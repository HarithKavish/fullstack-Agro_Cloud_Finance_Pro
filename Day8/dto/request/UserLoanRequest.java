package com.agrocloud.harith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserLoanRequest {
    public String loan_name;
    public String loan_type;
    public String loan_scheme;
    public Integer loan_duration;
    public Integer loan_amount;
    public Integer loan_total_duration;
}