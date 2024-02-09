package com.agrocloud.harith.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoanResponse {
    private String message;
    private String loanId;
    private String loanName;
    private String loanType;
    private String loanScheme;
    private Integer loanDuration;
}