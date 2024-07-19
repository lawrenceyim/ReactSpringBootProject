package com.example.demo.utils;

public class JsonConverter {
    public static String ConvertIntegerToJson(String key, int value) {
        return "{\"" + key + "\": \"" + value + "\"}";
    }
}
