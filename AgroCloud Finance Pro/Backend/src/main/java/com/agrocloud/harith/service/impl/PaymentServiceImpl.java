package com.agrocloud.harith.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.agrocloud.harith.dto.request.PaymentRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.PaymentResponse;
import com.agrocloud.harith.model.Payment;
import com.agrocloud.harith.repository.PaymentRepository;
import com.agrocloud.harith.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository payRepository;

    @Override
    public BasicResponse<PaymentResponse> getAllUser() {
        List<Payment> payments = payRepository.findAll();
        List<com.agrocloud.harith.dto.response.PaymentResponse> payResponses = payments.stream()
                .map(payment -> PaymentResponse.builder()
                .paymentId(payment.getPaymentId())
                .status(payment.getStatus())
                .modeOfPayment(payment.getModeOfPayment())
                .build())
                .collect(Collectors.toList());
        return BasicResponse.<PaymentResponse>builder()
                .message("Payment Data fetched").data(payResponses).build();
    }

    @Override
    public PaymentResponse register(PaymentRequest request) {
        Payment payment = Payment.builder()
                .status(request.getStatus())
                .amountPaid(request.getAmountPaid())
                .modeOfPayment(request.getModeOfPayment())
                .paymentDate(request.getPaymentDate())
                .build();
        payRepository.save(payment);
        return PaymentResponse.builder()
                .message("Payment done Successfully")
                .build();
    }

    @Override
    public BasicResponse<PaymentResponse> deletebooking(String paymentId) {
        if (payRepository.existsById(paymentId)) {
            payRepository.deleteById(paymentId);
            return BasicResponse.<PaymentResponse>builder()
                    .message("Payment deleted successfully")
                    .build();
        } else {
            return BasicResponse.<PaymentResponse>builder()
                    .message("Payment not found with ID: " + paymentId)
                    .build();
        }
    }

}