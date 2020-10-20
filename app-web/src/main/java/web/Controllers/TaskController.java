package web.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;

@Slf4j //  is a Lombok-provided annotation that, at runtime, will automatically generate an SLF4J
@Controller
@RequestMapping("/home")
public class TaskController {
    @GetMapping
    public String showDesignForm(Model model) {
//        model.addAttribute("User"); and info about user if logged in
        return "home";
    }
}