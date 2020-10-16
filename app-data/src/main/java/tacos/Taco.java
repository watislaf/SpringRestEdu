package tacos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Builder;
import lombok.Data;

@Data
@Entity
public class Taco {

    @NotNull
    @Size(min = 5, message = "Name must be at least 5 characters long")
    private String name;


    @Size(min = 1, message = "You must choose at least 1 ingredient")
    @Transient // not a percistent
    private List<String> ingredients = new ArrayList<String>();

    @Id
    private long id;
    Date createdAt;
}