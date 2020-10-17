package root;

import api.ApiApplication;
import data.DataApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import web.WebApplication;


@SpringBootApplication
@ComponentScan(basePackageClasses = {WebApplication.class, DataApplication.class, ApiApplication.class})
public class RootApplication {
    public static void main(String[] args) {
        SpringApplication.run(RootApplication.class, args);
        System.out.println("Run");
    }
}

// @SpringBootApplication ==
//@SpringBootConfiguration—Designates this class as a configuration class.
//Although there’s not much configuration in the class yet, you can add Javabased Spring Framework configuration to this class if you need to. This annotation is, in fact, a specialized form of the @Configuration annotation.
// @EnableAutoConfiguration—Enables Spring Boot automatic configuration.
//We’ll talk more about autoconfiguration later. For now, know that this annotation tells Spring Boot to automatically configure any components that it thinks
//you’ll need.
// @ComponentScan—Enables component scanning. This lets you declare other
//classes with annotations like @Component, @Controller, @Service, and others,
//to have Spring automatically discover them and register them as components in
//the Spring application context.