package com.example.demo.model;

import org.w3c.dom.css.Counter;

public class CounterGameEvent {
    private int id;
    private String title;
    private String message;

    public CounterGameEvent() {}

    public CounterGameEvent(int id, String title, String message) {
        this.id = id;
        this.title = title;
        this.message = message;
    }

    public String ToJson() {
        return """
                {
                "id": "%d",
                "title": "%s",
                "message": "%s"
                }
                """.formatted(id, title, message);
    }
}
