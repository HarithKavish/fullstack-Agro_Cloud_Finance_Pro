package com.agrocloud.harith.service;

import java.util.List;

import com.agrocloud.harith.dto.request.LoanRequest;
import com.agrocloud.harith.dto.response.LoanResponse;

public interface LoanService {
    LoanResponse createLoan(LoanRequest loanRequest);
    List<LoanResponse> getAllLoans();
    LoanResponse getLoanById(String loanId);
    LoanResponse updateLoan(String loanId, LoanRequest loanRequest);
    void deleteLoan(String loanId);
}