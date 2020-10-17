package data.Repository;

import java.util.Date;
import javax.persistence.*;

import lombok.*;


@Data
@Entity // beans if going to be created in databese
@Table(name = "task", schema = "public") // important to create database with name user
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true) // create no args constructor
// force = true) is used, then all final fields are initialized with 0 / false / null.
@RequiredArgsConstructor //generates a constructor with 1 parameter for each field that requires special handling
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private final String name;
    private final String string;

    @Column(name = "created_at")
    private final Date createdDate;
}