package com.agrocloud.harith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoanRequest {
    private String loanId;
    private String loanName;
    private String loanType;
    private String loanScheme;
    private Integer loanDuration;
}