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
    private String loanId;
    private String loanTitle;
    private String loanDesc;
    private String loanUrl;
}