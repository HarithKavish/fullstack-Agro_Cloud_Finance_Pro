package com.agrocloud.harith.service;

import com.agrocloud.harith.dto.request.LoanRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.LoanResponse;

public interface LoanService {
    
    BasicResponse<LoanResponse> getAllLoan();
    LoanResponse createLoan(LoanRequest loanRequest);
}