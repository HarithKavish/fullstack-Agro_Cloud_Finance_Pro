package com.agrocloud.harith.model;

import static jakarta.persistence.GenerationType.UUID;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
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
@Table(name = "loans")
public class Loan {
    
    @Id
    @GeneratedValue(strategy = UUID)
    private String loanId;

    // @Column(nullable = false)
    private String loanTitle;
    
    // @Column(nullable = false)
    private String loanDesc;

    // @Column(nullable = false)
    private String loanUrl;

    // @Column(nullable = false)
    // private Integer loanDuration;
}