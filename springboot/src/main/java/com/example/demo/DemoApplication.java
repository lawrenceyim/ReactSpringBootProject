package com.example.demo;

import com.example.demo.utils.JsonConverter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {
    private static ClickerGame game;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        game = new ClickerGame();
    }

    @GetMapping("/increaseScore")
    @CrossOrigin(origins = "*")
    public String IncreaseScore() {
        game.IncreaseScore();
        return JsonConverter.ConvertIntegerToJson("score", game.GetScore());
    }

    @GetMapping("/getScore")
    @CrossOrigin(origins = "*")
    public String GetScore() {
        return JsonConverter.ConvertIntegerToJson("score", game.GetScore());
    }
}
