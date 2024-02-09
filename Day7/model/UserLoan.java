package com.agrocloud.harith.model;

import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Entity;
// import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_loan")
public class UserLoan {
    
    @Id
    @GeneratedValue(strategy = UUID)
    private String userLoanId;

    private Long userLoanAmount;
    
    private Integer userLoanTotalDuration;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name = "loanId", referencedColumnName = "loanId")
    private Loan loan;
}