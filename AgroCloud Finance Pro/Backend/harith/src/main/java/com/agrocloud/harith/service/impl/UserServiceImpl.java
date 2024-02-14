package com.agrocloud.harith.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agrocloud.harith.dto.request.UserRequest;
import com.agrocloud.harith.dto.response.UserResponse;
import com.agrocloud.harith.model.User;
import com.agrocloud.harith.repository.UserRepository;
import com.agrocloud.harith.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserResponse createUser(UserRequest userRequest) {
        User user = new User();
        user.setName(userRequest.getName());
        user.setEmail(userRequest.getEmail());
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        user.setRole(userRequest.getRole());
        user.setImage(userRequest.getImage());
        user.setPhoneNumber(userRequest.getPhoneNumber());
        user.setAddress(userRequest.getAddress());

        userRepository.save(user);

        return toUserResponse(user);
    }

    @Override
    public UserResponse getUserById(String userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return toUserResponse(user);
    }

    @Override
    public UserResponse updateUser(String userId, UserRequest userRequest) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userRequest.getName());
        user.setEmail(userRequest.getEmail());
        user.setRole(userRequest.getRole());
        user.setImage(userRequest.getImage());
        user.setPhoneNumber(userRequest.getPhoneNumber());
        user.setAddress(userRequest.getAddress());

        userRepository.save(user);

        return toUserResponse(user);
    }

    @Override
    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::toUserResponse)
                .collect(Collectors.toList());
    }

    private UserResponse toUserResponse(User user) {
        UserResponse response = new UserResponse();
        response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setImage(user.getImage());
        response.setPhoneNumber(user.getPhoneNumber());
        response.setAddress(user.getAddress());
        return response;
    }
}