package com.agrocloud.harith.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agrocloud.harith.dto.request.LoanRequest;
import com.agrocloud.harith.dto.response.LoanResponse;
import com.agrocloud.harith.model.Loan;
import com.agrocloud.harith.repository.LoanRepository;
import com.agrocloud.harith.service.LoanService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LoanServiceImpl implements LoanService {

    @Autowired
    private LoanRepository loanRepository;

    @Override
    public LoanResponse createLoan(LoanRequest loanRequest) {
        Loan loan = new Loan();
        loan.setLoanTitle(loanRequest.getLoanTitle());
        loan.setLoanDesc(loanRequest.getLoanDesc());
        loan.setLoanUrl(loanRequest.getLoanUrl());
        // loan.setLoanDuration(loanRequest.getLoanDuration());
        loanRepository.save(loan);

        return toLoanResponse(loan);
    }

    @Override
    public List<LoanResponse> getAllLoans() {
        List<Loan> loans = loanRepository.findAll();
        return loans.stream()
                .map(this::toLoanResponse)
                .collect(Collectors.toList());
    }

    @Override
    public LoanResponse getLoanById(String loanId) {
        Loan loan = loanRepository.findById(loanId).orElseThrow(() -> new RuntimeException("Loan not found"));
        return toLoanResponse(loan);
    }

    @Override
    public LoanResponse updateLoan(String loanId, LoanRequest loanRequest) {
        Loan loan = loanRepository.findById(loanId).orElseThrow(() -> new RuntimeException("Loan not found"));
        loan.setLoanTitle(loanRequest.getLoanTitle());
        loan.setLoanDesc(loanRequest.getLoanDesc());
        loan.setLoanUrl(loanRequest.getLoanUrl());
        loanRepository.save(loan);

        return toLoanResponse(loan);
    }

    @Override
    public void deleteLoan(String loanId) {
        loanRepository.deleteById(loanId);
    }

    private LoanResponse toLoanResponse(Loan loan) {
        LoanResponse response = new LoanResponse();
        response.setLoanId(loan.getLoanId());
        response.setLoanTitle(loan.getLoanTitle());
        response.setLoanDesc(loan.getLoanDesc());
        response.setLoanUrl(loan.getLoanUrl());
        return response;
    }
}