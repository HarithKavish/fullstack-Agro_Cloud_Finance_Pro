package com.agrocloud.harith.service;

import com.agrocloud.harith.dto.request.LoginRequest;
import com.agrocloud.harith.dto.request.PaymentRequest;
import com.agrocloud.harith.dto.request.RegisterRequest;
import com.agrocloud.harith.dto.request.UserLoanRequest;
import com.agrocloud.harith.dto.response.LoginResponse;
import com.agrocloud.harith.dto.response.PaymentResponse;
import com.agrocloud.harith.dto.response.RegisterResponse;
import com.agrocloud.harith.dto.response.UserLoanResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    UserLoanResponse loan(UserLoanRequest request);

    PaymentResponse pay(PaymentRequest request);
}