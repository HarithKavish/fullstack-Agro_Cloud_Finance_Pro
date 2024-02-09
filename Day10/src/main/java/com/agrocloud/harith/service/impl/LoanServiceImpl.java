package com.agrocloud.harith.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.agrocloud.harith.dto.request.LoanRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.LoanResponse;
import com.agrocloud.harith.model.Loan;
import com.agrocloud.harith.repository.LoanRepository;
import com.agrocloud.harith.service.LoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoanServiceImpl  implements LoanService{

    private final LoanRepository loanRepository;

    @Override
    public BasicResponse<LoanResponse> getAllLoan() {
        List<Loan> loans = loanRepository.findAll();
        List<LoanResponse> loanResponses= loans.stream().map(loan -> LoanResponse.builder()
        .loanId(loan.getLoanId())
        .loanName(loan.getLoanName())
        .loanType(loan.getLoanType())
        .loanScheme(loan.getLoanScheme())
        .loanDuration(loan.getLoanDuration())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<LoanResponse>builder()
        .message("User Data fetched").data(loanResponses).build();
    }

    @Override
    public LoanResponse createLoan(LoanRequest request) {
        var loan = Loan.builder()
            .loanId(request.getLoanId())
            .loanName(request.getLoanName())
            .loanType(request.getLoanType())
            .loanScheme(request.getLoanScheme())
            .loanDuration(request.getLoanDuration())
            // .status(request.getStatus())
            .build();
        loanRepository.save(loan);
        return LoanResponse.builder()
            .message("Success")
            .build();
        }
}
