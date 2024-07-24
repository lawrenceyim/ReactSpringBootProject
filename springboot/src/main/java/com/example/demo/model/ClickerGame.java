package com.example.demo.model;

import java.util.List;

public class ClickerGame {
    private int score = 0;
    private List<CounterGameEvent> events = List.of(
            new CounterGameEvent(1, "example title", "example message"),
            new CounterGameEvent(2, "example title", "example message")
    );

    public void IncreaseScore() {
        score++;
    }

    public int GetScore() {
        return score;
    }

    public void ResetScore() {
        score = 0;
    }

    public void AddEvent(int id, String title, String message) {
        events.add(new CounterGameEvent(id, title, message));
    }

    public List<CounterGameEvent> GetEvents() {
        return events;
    }

    public String GetEventsJson() {
        StringBuilder sb = new StringBuilder();
        events.forEach(event -> sb.append(event.ToJson() + ","));
        if (sb.length() > 0) {
            sb.deleteCharAt(sb.length() - 1);
        }
        return """ 
                {
                    "events": [%s]
                }
                """.formatted(sb.toString());
    }
}
