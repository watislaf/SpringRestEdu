package api.Controllers;

import data.DataApplication;
import data.Repository.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    DataApplication data_app;

    @GetMapping(path = "/createRandom") //    @PostMapping(consumes = "application/json") how works ??
    public String helloWorld() {
        data_app.createRandom();
        return "hello world";
    }

    @GetMapping(path = "/myTask")
    public ResponseEntity<Task> tacoById(@RequestParam(name = "id", required = false, defaultValue = "0") Long id) {
        Optional<Task> optionalTask = data_app.getTask(id);
        if (optionalTask.isPresent()) {
            return new ResponseEntity<>(optionalTask.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}

