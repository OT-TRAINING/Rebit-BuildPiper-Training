package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/devops")
public class WelcomeController {

    @Value("${WELCOME_MSG:Welcome DevOps Team}")
    private String welcomeMessage;

    @GetMapping("/team")
    public String getWelcomeMessage() {
        return welcomeMessage;
    }
}

