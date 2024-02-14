package com.agrocloud.harith.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.agrocloud.harith.dto.request.LoanRequest;
import com.agrocloud.harith.dto.response.LoanResponse;
import com.agrocloud.harith.service.LoanService;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PostMapping
    public LoanResponse createLoan(@RequestBody LoanRequest loanRequest) {
        return loanService.createLoan(loanRequest);
    }

    @GetMapping
    public List<LoanResponse> getAllLoans() {
        return loanService.getAllLoans();
    }

    @GetMapping("/{loanId}")
    public LoanResponse getLoanById(@PathVariable String loanId) {
        return loanService.getLoanById(loanId);
    }

    @PutMapping("/{loanId}")
    public LoanResponse updateLoan(@PathVariable String loanId, @RequestBody LoanRequest loanRequest) {
        return loanService.updateLoan(loanId, loanRequest);
    }

    @DeleteMapping("/{loanId}")
    public void deleteLoan(@PathVariable String loanId) {
        loanService.deleteLoan(loanId);
    }
}