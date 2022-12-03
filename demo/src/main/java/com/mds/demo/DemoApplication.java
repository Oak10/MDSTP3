package com.mds.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println(" ---- App Running ---- ");

		//swagger (https://springdoc.org/v2/) ui: http://localhost:8080/api/swagger-ui/index.html
	}

}
