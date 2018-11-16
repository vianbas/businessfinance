package com.web.businessfinance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class BusinessFinanceApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(BusinessFinanceApplication.class, args);
    }

//    public static void main(String[] args) {
//        SpringApplication app = new SpringApplication(BusinessFinanceApplication.class);
//
//        //SpringApplication.run(KafkaMessageDrivenApplication.class, args);
//    }
}
