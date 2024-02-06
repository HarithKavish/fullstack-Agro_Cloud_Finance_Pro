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
    private String loan_id;

    // @Column(nullable = false)
    private String loan_name;
    
    // @Column(nullable = false)
    private String loan_type;

    // @Column(nullable = false)
    private String loan_scheme;

    // @Column(nullable = false)
    private Integer loan_duration;
}
