package com.agrocloud.harith.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.agrocloud.harith.dto.request.UserRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.UserResponse;
import com.agrocloud.harith.model.User;
import com.agrocloud.harith.repository.UserRepository;
import com.agrocloud.harith.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses= users.stream().map(user -> UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .password(user.getPassword())
        .role(user.getRole())
        .address(user.getAddress())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User Data fetched").data(userResponses).build();
    }

    @Override
    public UserResponse createUser(UserRequest request) {
        var user = User.builder()
            .mobileNumber(request.getMobileNumber())
            .aadharNumber(request.getAadharNumber())
            .panCard(request.getPanCard())
            .address(request.getAddress())
            .build();
        userRepository.save(user);
        return UserResponse.builder()
            .message("Success")
            .build();
    }
}