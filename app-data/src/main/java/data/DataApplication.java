package data;

import data.Repository.Task;
import data.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;
import java.util.Optional;

@SpringBootApplication
public class DataApplication {
    @Autowired
    TaskRepository repo;

    public void createRandom() {
        repo.save(new Task("lol", "lel", new Date()));
    }

    public Optional<Task> getTask(Long id) {
        return repo.findById(id.intValue());
    }
}
