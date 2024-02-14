package com.agrocloud.harith.service;

import com.agrocloud.harith.dto.request.PaymentRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse> getAllUser();

    PaymentResponse register(PaymentRequest request);

    BasicResponse<PaymentResponse> deletebooking(String paymentId);
}