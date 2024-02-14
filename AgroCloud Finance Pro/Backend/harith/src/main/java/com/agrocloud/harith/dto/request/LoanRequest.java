package com.agrocloud.harith.dto.request;

import lombok.Data;

@Data
public class LoanRequest {
    private String loanTitle;
    private String loanDesc;
    private String loanUrl;
}