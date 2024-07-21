package com.example.demo;

import com.example.demo.model.ClickerGame;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class App {
    private static ClickerGame game;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
        game = new ClickerGame();
    }

    public static ClickerGame GetClickerGame() {
        return game;
    }
}
