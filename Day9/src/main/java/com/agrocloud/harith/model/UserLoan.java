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
    private String user_loan_id;

    // @Column(nullable = false)
    private Long loan_amount;
    
    // @Column(nullable = false)
    private Integer loan_total_duration;

    @OneToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name = "loan_id", referencedColumnName = "loan_id")
    private Loan loan;
}