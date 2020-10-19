package data.Repository;

import java.util.Date;
import javax.persistence.*;

import lombok.*;
import org.springframework.hateoas.RepresentationModel;


@Data
@Entity // beans if going to be created in databese
@Table(name = "task", schema = "public") // important to create database with name user
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true) // create no args constructor
// force = true) is used, then all final fields are initialized with 0 / false / null.
@RequiredArgsConstructor //generates a constructor with 1 parameter for each field that requires special handling
public class Task extends RepresentationModel<Task> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer number;

    private final String name;
    private final String string;

    @Column(name = "created_at")
    private final Date createdDate;
}