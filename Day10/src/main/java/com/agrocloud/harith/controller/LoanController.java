package com.agrocloud.harith.controller;

import static com.agrocloud.harith.Utils.MyConstant.LOAN;
import static com.agrocloud.harith.Utils.MyConstant.LOANLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.harith.dto.request.LoanRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.LoanResponse;
import com.agrocloud.harith.service.LoanService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(LOAN)
@RequiredArgsConstructor
public class LoanController {
    
    private final LoanService loanService;

    @GetMapping(LOANLIST)
    public ResponseEntity<BasicResponse<LoanResponse>> getLoan() {
        BasicResponse<LoanResponse> response = new BasicResponse<>();
        try {
            response = loanService.getAllLoan();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
@PostMapping(LOANLIST)
    public ResponseEntity<LoanResponse> createBooking(@RequestBody LoanRequest loanRequest) {
        LoanResponse response = new LoanResponse();
        try {
            LoanResponse createLoanResponse = loanService.createLoan(loanRequest);
            response.setMessage(createLoanResponse.getMessage());
            // response.setData(createLoanResponse.getData());
            response.setLoanName(createLoanResponse.getLoanName());
            response.setLoanType(createLoanResponse.getLoanType());
            response.setLoanScheme(createLoanResponse.getLoanScheme());
            response.setLoanDuration(createLoanResponse.getLoanDuration());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create booking: " + e.getMessage());
            return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
        }
    }
}