package data.Repository;

import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional // delete works
@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
public interface TaskRepository extends JpaRepository<Task, Long> { // CRUD operations
    Task save(Task design);

    void delete(Task task); // holding by data rest ( deleteById - does not work with urls )

    Optional<Task> findById(@Param("id") Integer task_id);
}