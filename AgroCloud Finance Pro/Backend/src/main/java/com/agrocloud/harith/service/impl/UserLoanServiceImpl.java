package com.agrocloud.harith.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.agrocloud.harith.dto.request.UserLoanRequest;
import com.agrocloud.harith.dto.response.UserLoanResponse;
import com.agrocloud.harith.model.UserLoan;
import com.agrocloud.harith.repository.UserLoanRepository;
import com.agrocloud.harith.service.UserLoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserLoanServiceImpl implements UserLoanService{

    private final UserLoanRepository userLoanRepository;

    @Override
    public UserLoanResponse getUserLoanById(String userLoanId) {
        Optional<UserLoan> isUserLoanExists = userLoanRepository.findByUserLoanId(userLoanId);
        if (!isUserLoanExists.isPresent()) {
            return UserLoanResponse.builder().message("User loan id mismatch!").build();
        }
        return UserLoanResponse.builder()
            .message("User loan data fetched successfully@")
            .userLoanId(userLoanId)
            .user(isUserLoanExists.get().getUser())
            .loan(isUserLoanExists.get().getLoan())
            .build();
    }

    @Override
    public UserLoanResponse createUserLoanById(UserLoanRequest request) {
        Optional<UserLoan> isUserLoanExists = userLoanRepository.findByUserLoanId(request.userLoanId);
        if (!isUserLoanExists.isPresent()) {
            return UserLoanResponse.builder().message("User loan id mismatch!").build();
        }
        var userLoan = UserLoan.builder()
            .userLoanId(request.getUserLoanId())
            // .bookingname(request.getBookingName())
            // .status(request.getStatus())
            .user(isUserLoanExists.get().getUser())
            .loan(isUserLoanExists.get().getLoan())
            .build();
        userLoanRepository.save(userLoan);
        return UserLoanResponse.builder()
            .message("Success")
            .build();
    }

    @Override
    public UserLoanResponse deleteUserLoanById(String userLoanId) {
        if (userLoanRepository.existsById(userLoanId)) {
            userLoanRepository.deleteById(userLoanId);
            return UserLoanResponse.builder()
                .message("User Loan deleted successfully")
                .build();
        } else {
            return UserLoanResponse.builder()
            .message("User Loan not found with ID: " + userLoanId)
            .build();
        }
    }
}