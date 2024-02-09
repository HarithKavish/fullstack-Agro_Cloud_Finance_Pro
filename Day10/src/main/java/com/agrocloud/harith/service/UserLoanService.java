package com.agrocloud.harith.service;

import com.agrocloud.harith.dto.request.UserLoanRequest;
import com.agrocloud.harith.dto.response.UserLoanResponse;

public interface UserLoanService {
    UserLoanResponse getUserLoanById(String userLoanId);
    UserLoanResponse deleteUserLoanById(String userLoanId);
    UserLoanResponse createUserLoanById(UserLoanRequest userRequest);
}