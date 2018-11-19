package com.web.businessfinance.home;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class HomeController {

    @RequestMapping(value = "")
    public String home(Model model){

        model.addAttribute("viko", "babi");
        return "pages/home";
    }
}
