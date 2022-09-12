package com.example.backend;


import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Array;
import java.util.ArrayList;

@RestController
@RequestMapping("/ActionAPI")
public class ActionCameraController {

    private static class Product {
        @JsonProperty
        int sku;

        @JsonProperty
        String regularPrice;

        @JsonProperty
        String name;
    }

    private static class Result {
        @JsonProperty
        ArrayList<Product> products;
    }

    @GetMapping
    Result get() {
        var url = "https://api.bestbuy.com/v1/products((search=GOPRO))?apiKey=llqLsV0kYcad3dNsNdrk2MyB&format=json";
        return new RestTemplate().exchange(url, HttpMethod.GET, null, Result.class).getBody();


    }

}