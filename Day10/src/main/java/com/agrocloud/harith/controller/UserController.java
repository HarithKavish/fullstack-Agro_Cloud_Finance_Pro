package com.agrocloud.harith.controller;

import static com.agrocloud.harith.Utils.MyConstant.USER;
import static com.agrocloud.harith.Utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrocloud.harith.dto.request.UserRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.UserResponse;
import com.agrocloud.harith.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(USERLIST)
    public ResponseEntity<BasicResponse<UserResponse>> getUser() {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            response = userService.getAllUser();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(USERLIST)
    public ResponseEntity<UserResponse> createUser(@RequestBody UserRequest userRequest) {
        UserResponse response = new UserResponse();
        try {
            // response = userService.getUserById(userId);
            UserResponse createUserResponse = userService.createUser(userRequest);
            response.setMessage(createUserResponse.getMessage());
            response.setMobileNumber(createUserResponse.getMobileNumber());
            response.setAadharNumber(createUserResponse.getAadharNumber());
            response.setPanCard(createUserResponse.getPanCard());
            response.setAddress(createUserResponse.getAddress());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to create user: " + e.getMessage());
            return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
        }
    }
}