package com.agrocloud.harith.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agrocloud.harith.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, String>{

        Optional<Loan> findById(String loanId);

}