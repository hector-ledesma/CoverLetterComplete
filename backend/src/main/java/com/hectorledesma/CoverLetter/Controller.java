package com.hectorledesma.CoverLetter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/")
    public String testing(@RequestParam String jobTitle, @RequestParam String companyName) {
        return "Job Title: " + jobTitle + ", Company Name: " + companyName;
    }


}
