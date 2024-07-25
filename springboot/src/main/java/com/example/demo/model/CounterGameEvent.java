package com.example.demo.model;

import com.example.demo.utils.JsonConverter;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.w3c.dom.css.Counter;

public class CounterGameEvent {
    @JsonProperty("id")
    private int id;
    @JsonProperty("title")
    private String title;
    @JsonProperty("message")
    private String message;

    public CounterGameEvent() {}

    public CounterGameEvent(int id, String title, String message) {
        this.id = id;
        this.title = title;
        this.message = message;
    }

    public String ToJson() {
        try {
            return JsonConverter.GetMapper().writeValueAsString(this);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
