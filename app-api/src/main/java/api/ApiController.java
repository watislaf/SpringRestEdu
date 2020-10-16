package api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;
import tacos.data.TacoRepository;


@Slf4j //  is a Lombok-provided annotation that, at runtime, will automatically generate an SLF4J
@Service
@RestController
@RequestMapping("/api")
public class ApiController {

    TacoRepository repoo;


    @GetMapping
    @PostMapping(consumes = "application/json")
    public String helloWorld() {  //(@RequestBody Taco taco) {
        return "hello world";
    }

    @GetMapping("/task?{id}")
    @PostMapping(consumes = "application/json")
    public String tasks(@PathVariable("id") int id) {  //(@RequestBody Taco taco) {
        return "hello world";
    }
}