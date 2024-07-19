package com.example.demo;

public class ClickerGame {
    private int score = 0;

    public void IncreaseScore() {
        score++;
    }

    public int GetScore() {
        return score;
    }

    public void ResetScore() {
        score = 0;
    }
}
