package com.agrocloud.harith.controller;


import static com.agrocloud.harith.Utils.MyConstant.USERLOAN;
import static com.agrocloud.harith.Utils.MyConstant.USERLOANLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.harith.dto.request.UserLoanRequest;
import com.agrocloud.harith.dto.response.UserLoanResponse;
import com.agrocloud.harith.service.UserLoanService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USERLOAN)
@RequiredArgsConstructor
public class UserLoanController {

    private final UserLoanService userLoanService;
    
    @GetMapping(USERLOANLIST)
    public ResponseEntity<UserLoanResponse> getUserLoanById(@PathVariable String userLoanId) {
        UserLoanResponse response = new UserLoanResponse();
        try {
            response = userLoanService.getUserLoanById(userLoanId);
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(USERLOANLIST)
    public ResponseEntity<UserLoanResponse> createUserLoan(@RequestBody UserLoanRequest userLoanRequest) {
        UserLoanResponse response = new UserLoanResponse();
        try {
            UserLoanResponse createUserLoanResponse = userLoanService.createUserLoanById(userLoanRequest);
            response.setMessage(createUserLoanResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create user loan: " + e.getMessage());
            return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(USERLOANLIST)
    public ResponseEntity<UserLoanResponse> deleteUserLoan(@PathVariable String userLoanId) {
        UserLoanResponse response = new UserLoanResponse();
        try {
            UserLoanResponse deleteUserLoanResponse = userLoanService.deleteUserLoanById(userLoanId);
            response.setMessage(deleteUserLoanResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete user loan: " + e.getMessage());
            return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
        }
    }
}