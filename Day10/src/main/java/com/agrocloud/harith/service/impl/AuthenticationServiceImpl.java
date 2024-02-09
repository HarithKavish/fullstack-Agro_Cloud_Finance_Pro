package com.agrocloud.harith.service.impl;

import static com.agrocloud.harith.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agrocloud.harith.Utils.JwtUtil;
import com.agrocloud.harith.dto.request.LoginRequest;
import com.agrocloud.harith.dto.request.PaymentRequest;
import com.agrocloud.harith.dto.request.RegisterRequest;
import com.agrocloud.harith.dto.request.UserLoanRequest;
import com.agrocloud.harith.dto.response.LoginResponse;
import com.agrocloud.harith.dto.response.PaymentResponse;
import com.agrocloud.harith.dto.response.RegisterResponse;
import com.agrocloud.harith.dto.response.UserLoanResponse;
import com.agrocloud.harith.model.User;
import com.agrocloud.harith.repository.UserRepository;
import com.agrocloud.harith.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+ request.getEmail() + " is already exists!").build();
        }
        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(USER)
                .build();
        userRepository.save(user);
        return RegisterResponse.builder()
                .message("User created successfully!")
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateToken(user);
        return LoginResponse.builder()
        .message("User logged in successfully!")
        .token(token)
        .build();
    }

    @Override
    public UserLoanResponse loan(UserLoanRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loan'");
    }

    @Override
    public PaymentResponse pay(PaymentRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'pay'");
    }
}