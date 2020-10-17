package api.Controllers;

import data.DataApplication;
import data.Repository.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;


import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ApiController {

    RestTemplate rest = new RestTemplate(); // provides 41 methods for interacting with REST resource

    @Autowired
    DataApplication data_app;

    @GetMapping(path = "/createRandom") //    @PostMapping(consumes = "application/json") how works ??
    public String helloWorld() {
        data_app.createRandom();
        return "hello world";
    }

    @GetMapping(path = "/deletTask{id}") //    @PostMapping(consumes = "application/json") how works ??
    public String deletTask(@RequestParam Integer id) {
        rest.delete("http://localhost:8080/api/tasks/{id}", id);
        return "hello world";
    }


    @GetMapping(path = "/myTask")
    public ResponseEntity<Task> tacoById(@RequestParam(name = "id", required = false, defaultValue = "0") Long id) {
        Optional<Task> optionalTask = data_app.getTask(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.add(linkTo(methodOn(ApiController.class).tacoById(id)).withSelfRel()); // links
            return new ResponseEntity<>(task, HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}

