package com.agrocloud.harith.dto.response;

import com.agrocloud.harith.model.Loan;
import com.agrocloud.harith.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserLoanResponse {
    private String message;
    private String userLoanId;
    private User user;
    private Loan loan;
}