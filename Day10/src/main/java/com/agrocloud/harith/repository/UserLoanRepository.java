package com.agrocloud.harith.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agrocloud.harith.model.UserLoan;

public interface UserLoanRepository extends JpaRepository<UserLoan, String>{
    Optional<UserLoan> findByUserLoanId(String userLoanId);
}
