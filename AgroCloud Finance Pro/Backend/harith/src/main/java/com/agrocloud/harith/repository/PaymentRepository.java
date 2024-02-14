package com.agrocloud.harith.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agrocloud.harith.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {

}