package com.agrocloud.harith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private Long mobileNumber;
    private Long aadharNumber;
    private String panCard;
    private String address;
}