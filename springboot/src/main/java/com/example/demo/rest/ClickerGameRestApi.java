package com.example.demo.rest;

import com.example.demo.App;
import com.example.demo.utils.JsonConverter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClickerGameRestApi {
    @GetMapping("/increaseScore")
    @CrossOrigin(origins = "*")
    public String IncreaseScore() {
        App.GetClickerGame().IncreaseScore();
        return JsonConverter.ConvertIntegerToJson("score", App.GetClickerGame().GetScore());
    }

    @GetMapping("/getScore")
    @CrossOrigin(origins = "*")
    public String GetScore() {
        return JsonConverter.ConvertIntegerToJson("score", App.GetClickerGame().GetScore());
    }

    @GetMapping("/getEvents")
    @CrossOrigin(origins = "*")
    public String GetEvents() {
        return App.GetClickerGame().GetEventsJson();
    }
}
