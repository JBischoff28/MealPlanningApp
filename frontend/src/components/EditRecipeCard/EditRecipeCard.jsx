import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { app_id, app_key } from '../../localKey';
import axios from 'axios';
import '../RecipeCard/RecipeCard.css';
import useAuth from '../../hooks/useAuth';


const EditRecipeCard = (props) => {

    const [user, token] = useAuth();
    const [recObj, setRecObj] = useState({
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_9cfe6941a27959b49343b6ec198d56f8",
            "label": "Candied-Fennel-Topped Lemon Cake",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b33/b33c10fdae59c68a2ee146cc8e12fedd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJGMEQCID2Ynscv6LksLqGTTeBb7W3Et1GiJm3SvJlSFTNXGu6hAiBHHALRvb1tu7S3MQyjzvODtpd7hQMLwJd66vywzT%2BgLSq5BQhLEAAaDDE4NzAxNzE1MDk4NiIMc0AOOv%2B3MqDswOYYKpYFsuFLD1wUjososBHqSUEoft6%2FfUavFKAU9T33C1u3cdG1TAZLj7%2FEWYzdyvsftbnYO7USf0ue%2F7yQpke195r%2Fh8RxlQO6HfzbMgCpl45pTsyEVZRlZrwirya2Lm0u1B16tVWOqyevh84qlxnFy5wwBKSkzHbY1RC%2BfyZz%2BDeTTylsic4kGBqu2QkJor6INZSqsYncI7dNQbbOPjy8%2BqiOybLyg%2BpOocsZKqmf5IttYQSZgk2xZ3KEguSnTctXWTRZFzzqM6PbGGf13SGbqoMkRE7VZptuiY3ceXrp0VSMTHm8Sj45NEN%2FLuVpeJTjoUs%2BXZpKXDte7GExRCZ2RWdAT9AaMR3ueksvDGkIq%2FJADsdi2SVnNG8Uw3BLv0yTnAmN3UKP5SJezbIDHJWeJ6LCD4NQME4na5xkD5XP8mtyOdMdpiKp%2FsYDUPOtLHsr9NRKXaZPHRxnv8QaBXW8U%2Bf8O2GZK1mUXlSgOSLjcx3fwH1GtAX9qcHGbgytH95dqRmOdwOx%2BVtEzmSiT8oVya4BVqH3bBpWA2404D1%2BWNV0VrfgzFx%2BeRh28GU1BiaRmGKg5meoVm%2BYFgZOTFRwFRSU3pde67zYM1UvOrOd0WXZYw4b13iqW%2Bci1tIsm7KnTeS8Mw3b6yOZguDoO4x5uzxvu4axxZfsa%2Bzsrn%2FFAnWTUrAZN%2F4I%2B6U0RQlFclj9aXK8fRL81MVhZQ%2B4WJFz%2F%2BngRkjAofYKMaVfWJFpCmr0C9%2FcBRyxlS30IfBrQiLA0DTCYYw6Agb70JiQeXPiPHi7%2BxXP3tnST%2BbA37x7wU65gsvkMrW2Pya%2FrZirSX14e%2BKLs3DupvXUDxTRYnaClM7H3Z1wF4QHRbfdAhz4fwvqgt39ksHoxDswqKfBoQY6sgGCjO88K9z4BWx41bAUW%2FFyrEjzZ3DT9zPWlVuvgNQt462UDO%2B6qlkbpaFiCCpXoxsBigAWW2n%2Bpl4QvFJWqWPNatPcq669UKs8qoa2kbhUNxpY50MshktZd4YHKIzAKC5CfwXsrmNcY%2FSoYB8LhaOpjYsLsPotRqxRqpPGT3HXbevqk8KYHAN0499F1t4bGwoX8FoIW0Smpqa3WO%2Bmwy0nr0nV%2BCexDb1LFn3ENbZYSsgy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230407T191123Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBMFDI2IC%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0280fa2a44852dad7ca56859fe076b308445533d6464ee8266e8fb99536d98ae",
            "images": {
                "THUMBNAIL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b33/b33c10fdae59c68a2ee146cc8e12fedd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJGMEQCID2Ynscv6LksLqGTTeBb7W3Et1GiJm3SvJlSFTNXGu6hAiBHHALRvb1tu7S3MQyjzvODtpd7hQMLwJd66vywzT%2BgLSq5BQhLEAAaDDE4NzAxNzE1MDk4NiIMc0AOOv%2B3MqDswOYYKpYFsuFLD1wUjososBHqSUEoft6%2FfUavFKAU9T33C1u3cdG1TAZLj7%2FEWYzdyvsftbnYO7USf0ue%2F7yQpke195r%2Fh8RxlQO6HfzbMgCpl45pTsyEVZRlZrwirya2Lm0u1B16tVWOqyevh84qlxnFy5wwBKSkzHbY1RC%2BfyZz%2BDeTTylsic4kGBqu2QkJor6INZSqsYncI7dNQbbOPjy8%2BqiOybLyg%2BpOocsZKqmf5IttYQSZgk2xZ3KEguSnTctXWTRZFzzqM6PbGGf13SGbqoMkRE7VZptuiY3ceXrp0VSMTHm8Sj45NEN%2FLuVpeJTjoUs%2BXZpKXDte7GExRCZ2RWdAT9AaMR3ueksvDGkIq%2FJADsdi2SVnNG8Uw3BLv0yTnAmN3UKP5SJezbIDHJWeJ6LCD4NQME4na5xkD5XP8mtyOdMdpiKp%2FsYDUPOtLHsr9NRKXaZPHRxnv8QaBXW8U%2Bf8O2GZK1mUXlSgOSLjcx3fwH1GtAX9qcHGbgytH95dqRmOdwOx%2BVtEzmSiT8oVya4BVqH3bBpWA2404D1%2BWNV0VrfgzFx%2BeRh28GU1BiaRmGKg5meoVm%2BYFgZOTFRwFRSU3pde67zYM1UvOrOd0WXZYw4b13iqW%2Bci1tIsm7KnTeS8Mw3b6yOZguDoO4x5uzxvu4axxZfsa%2Bzsrn%2FFAnWTUrAZN%2F4I%2B6U0RQlFclj9aXK8fRL81MVhZQ%2B4WJFz%2F%2BngRkjAofYKMaVfWJFpCmr0C9%2FcBRyxlS30IfBrQiLA0DTCYYw6Agb70JiQeXPiPHi7%2BxXP3tnST%2BbA37x7wU65gsvkMrW2Pya%2FrZirSX14e%2BKLs3DupvXUDxTRYnaClM7H3Z1wF4QHRbfdAhz4fwvqgt39ksHoxDswqKfBoQY6sgGCjO88K9z4BWx41bAUW%2FFyrEjzZ3DT9zPWlVuvgNQt462UDO%2B6qlkbpaFiCCpXoxsBigAWW2n%2Bpl4QvFJWqWPNatPcq669UKs8qoa2kbhUNxpY50MshktZd4YHKIzAKC5CfwXsrmNcY%2FSoYB8LhaOpjYsLsPotRqxRqpPGT3HXbevqk8KYHAN0499F1t4bGwoX8FoIW0Smpqa3WO%2Bmwy0nr0nV%2BCexDb1LFn3ENbZYSsgy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230407T191123Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBMFDI2IC%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2c5f2f76376fafddcf08daec937a41c1426266b7081342b4612bf926514e82e8",
                    "width": 100,
                    "height": 100
                },
                "SMALL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b33/b33c10fdae59c68a2ee146cc8e12fedd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJGMEQCID2Ynscv6LksLqGTTeBb7W3Et1GiJm3SvJlSFTNXGu6hAiBHHALRvb1tu7S3MQyjzvODtpd7hQMLwJd66vywzT%2BgLSq5BQhLEAAaDDE4NzAxNzE1MDk4NiIMc0AOOv%2B3MqDswOYYKpYFsuFLD1wUjososBHqSUEoft6%2FfUavFKAU9T33C1u3cdG1TAZLj7%2FEWYzdyvsftbnYO7USf0ue%2F7yQpke195r%2Fh8RxlQO6HfzbMgCpl45pTsyEVZRlZrwirya2Lm0u1B16tVWOqyevh84qlxnFy5wwBKSkzHbY1RC%2BfyZz%2BDeTTylsic4kGBqu2QkJor6INZSqsYncI7dNQbbOPjy8%2BqiOybLyg%2BpOocsZKqmf5IttYQSZgk2xZ3KEguSnTctXWTRZFzzqM6PbGGf13SGbqoMkRE7VZptuiY3ceXrp0VSMTHm8Sj45NEN%2FLuVpeJTjoUs%2BXZpKXDte7GExRCZ2RWdAT9AaMR3ueksvDGkIq%2FJADsdi2SVnNG8Uw3BLv0yTnAmN3UKP5SJezbIDHJWeJ6LCD4NQME4na5xkD5XP8mtyOdMdpiKp%2FsYDUPOtLHsr9NRKXaZPHRxnv8QaBXW8U%2Bf8O2GZK1mUXlSgOSLjcx3fwH1GtAX9qcHGbgytH95dqRmOdwOx%2BVtEzmSiT8oVya4BVqH3bBpWA2404D1%2BWNV0VrfgzFx%2BeRh28GU1BiaRmGKg5meoVm%2BYFgZOTFRwFRSU3pde67zYM1UvOrOd0WXZYw4b13iqW%2Bci1tIsm7KnTeS8Mw3b6yOZguDoO4x5uzxvu4axxZfsa%2Bzsrn%2FFAnWTUrAZN%2F4I%2B6U0RQlFclj9aXK8fRL81MVhZQ%2B4WJFz%2F%2BngRkjAofYKMaVfWJFpCmr0C9%2FcBRyxlS30IfBrQiLA0DTCYYw6Agb70JiQeXPiPHi7%2BxXP3tnST%2BbA37x7wU65gsvkMrW2Pya%2FrZirSX14e%2BKLs3DupvXUDxTRYnaClM7H3Z1wF4QHRbfdAhz4fwvqgt39ksHoxDswqKfBoQY6sgGCjO88K9z4BWx41bAUW%2FFyrEjzZ3DT9zPWlVuvgNQt462UDO%2B6qlkbpaFiCCpXoxsBigAWW2n%2Bpl4QvFJWqWPNatPcq669UKs8qoa2kbhUNxpY50MshktZd4YHKIzAKC5CfwXsrmNcY%2FSoYB8LhaOpjYsLsPotRqxRqpPGT3HXbevqk8KYHAN0499F1t4bGwoX8FoIW0Smpqa3WO%2Bmwy0nr0nV%2BCexDb1LFn3ENbZYSsgy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230407T191123Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBMFDI2IC%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a49514f4ab3616b812ea855f96066251e83de86b52d98e267d38911c790549f9",
                    "width": 200,
                    "height": 200
                },
                "REGULAR": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b33/b33c10fdae59c68a2ee146cc8e12fedd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJGMEQCID2Ynscv6LksLqGTTeBb7W3Et1GiJm3SvJlSFTNXGu6hAiBHHALRvb1tu7S3MQyjzvODtpd7hQMLwJd66vywzT%2BgLSq5BQhLEAAaDDE4NzAxNzE1MDk4NiIMc0AOOv%2B3MqDswOYYKpYFsuFLD1wUjososBHqSUEoft6%2FfUavFKAU9T33C1u3cdG1TAZLj7%2FEWYzdyvsftbnYO7USf0ue%2F7yQpke195r%2Fh8RxlQO6HfzbMgCpl45pTsyEVZRlZrwirya2Lm0u1B16tVWOqyevh84qlxnFy5wwBKSkzHbY1RC%2BfyZz%2BDeTTylsic4kGBqu2QkJor6INZSqsYncI7dNQbbOPjy8%2BqiOybLyg%2BpOocsZKqmf5IttYQSZgk2xZ3KEguSnTctXWTRZFzzqM6PbGGf13SGbqoMkRE7VZptuiY3ceXrp0VSMTHm8Sj45NEN%2FLuVpeJTjoUs%2BXZpKXDte7GExRCZ2RWdAT9AaMR3ueksvDGkIq%2FJADsdi2SVnNG8Uw3BLv0yTnAmN3UKP5SJezbIDHJWeJ6LCD4NQME4na5xkD5XP8mtyOdMdpiKp%2FsYDUPOtLHsr9NRKXaZPHRxnv8QaBXW8U%2Bf8O2GZK1mUXlSgOSLjcx3fwH1GtAX9qcHGbgytH95dqRmOdwOx%2BVtEzmSiT8oVya4BVqH3bBpWA2404D1%2BWNV0VrfgzFx%2BeRh28GU1BiaRmGKg5meoVm%2BYFgZOTFRwFRSU3pde67zYM1UvOrOd0WXZYw4b13iqW%2Bci1tIsm7KnTeS8Mw3b6yOZguDoO4x5uzxvu4axxZfsa%2Bzsrn%2FFAnWTUrAZN%2F4I%2B6U0RQlFclj9aXK8fRL81MVhZQ%2B4WJFz%2F%2BngRkjAofYKMaVfWJFpCmr0C9%2FcBRyxlS30IfBrQiLA0DTCYYw6Agb70JiQeXPiPHi7%2BxXP3tnST%2BbA37x7wU65gsvkMrW2Pya%2FrZirSX14e%2BKLs3DupvXUDxTRYnaClM7H3Z1wF4QHRbfdAhz4fwvqgt39ksHoxDswqKfBoQY6sgGCjO88K9z4BWx41bAUW%2FFyrEjzZ3DT9zPWlVuvgNQt462UDO%2B6qlkbpaFiCCpXoxsBigAWW2n%2Bpl4QvFJWqWPNatPcq669UKs8qoa2kbhUNxpY50MshktZd4YHKIzAKC5CfwXsrmNcY%2FSoYB8LhaOpjYsLsPotRqxRqpPGT3HXbevqk8KYHAN0499F1t4bGwoX8FoIW0Smpqa3WO%2Bmwy0nr0nV%2BCexDb1LFn3ENbZYSsgy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230407T191123Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBMFDI2IC%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0280fa2a44852dad7ca56859fe076b308445533d6464ee8266e8fb99536d98ae",
                    "width": 300,
                    "height": 300
                }
            },
            "source": "Epicurious",
            "url": "https://www.epicurious.com/recipes/food/views/candied-fennel-topped-lemon-cake-352317",
            "shareAs": "http://www.edamam.com/recipe/candied-fennel-topped-lemon-cake-9cfe6941a27959b49343b6ec198d56f8/-",
            "yield": 8.0,
            "dietLabels": [],
            "healthLabels": [
                "Vegetarian",
                "Pescatarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Kosher"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "1 small fennel bulb",
                "3/4 cup sugar",
                "3/4 cup water",
                "3 (3-inch) strips lemon zest, thinly sliced",
                "1 teaspoon fennel seeds",
                "1 1/2 cups all-purpose flour",
                "1 1/2 teaspoons baking powder",
                "1 teaspoon baking soda",
                "1/2 teaspoon salt",
                "1 stick unsalted butter, softened",
                "3/4 cup sugar",
                "2 large eggs",
                "1 1/2 teaspoons grated lemon zest",
                "3/4 cup well-shaken buttermilk",
                "Equipment: a 9-by 2-inch round cake pan; an adjustable-blade slicer",
                "Accompaniment: lightly sweetened whipped cream"
            ],
            "ingredients": [
                {
                    "text": "1 small fennel bulb",
                    "quantity": 1.0,
                    "measure": "bulb",
                    "food": "fennel",
                    "weight": 175.5,
                    "foodCategory": "vegetables",
                    "foodId": "food_a4sdbkob8ixokpb07a42dbt3typw",
                    "image": "https://www.edamam.com/food-img/038/038c19f86af781e925c97991e17b90ed.jpeg"
                },
                {
                    "text": "3/4 cup sugar",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "sugar",
                    "weight": 150.0,
                    "foodCategory": "sugars",
                    "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                },
                {
                    "text": "3/4 cup water",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "water",
                    "weight": 177.75,
                    "foodCategory": "water",
                    "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                    "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                },
                {
                    "text": "3 (3-inch) strips lemon zest, thinly sliced",
                    "quantity": 3.0,
                    "measure": "strip",
                    "food": "lemon zest",
                    "weight": 6.0,
                    "foodCategory": "fruit",
                    "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
                    "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
                },
                {
                    "text": "1 teaspoon fennel seeds",
                    "quantity": 1.0,
                    "measure": "teaspoon",
                    "food": "fennel seeds",
                    "weight": 2.0,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
                    "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
                },
                {
                    "text": "1 1/2 cups all-purpose flour",
                    "quantity": 1.5,
                    "measure": "cup",
                    "food": "all-purpose flour",
                    "weight": 187.5,
                    "foodCategory": "grains",
                    "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                    "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                },
                {
                    "text": "1 1/2 teaspoons baking powder",
                    "quantity": 1.5,
                    "measure": "teaspoon",
                    "food": "baking powder",
                    "weight": 6.8999999999999995,
                    "foodCategory": "condiments and sauces",
                    "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
                    "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
                },
                {
                    "text": "1 teaspoon baking soda",
                    "quantity": 1.0,
                    "measure": "teaspoon",
                    "food": "baking soda",
                    "weight": 4.6,
                    "foodCategory": "condiments and sauces",
                    "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
                    "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
                },
                {
                    "text": "1/2 teaspoon salt",
                    "quantity": 0.5,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 3.0,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "1 stick unsalted butter, softened",
                    "quantity": 1.0,
                    "measure": "stick",
                    "food": "unsalted butter",
                    "weight": 113.0,
                    "foodCategory": "Dairy",
                    "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                    "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                },
                {
                    "text": "3/4 cup sugar",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "sugar",
                    "weight": 150.0,
                    "foodCategory": "sugars",
                    "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                    "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                },
                {
                    "text": "2 large eggs",
                    "quantity": 2.0,
                    "measure": "<unit>",
                    "food": "eggs",
                    "weight": 100.0,
                    "foodCategory": "Eggs",
                    "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                    "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                    "text": "1 1/2 teaspoons grated lemon zest",
                    "quantity": 1.5,
                    "measure": "teaspoon",
                    "food": "lemon zest",
                    "weight": 3.0,
                    "foodCategory": "fruit",
                    "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
                    "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
                },
                {
                    "text": "3/4 cup well-shaken buttermilk",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "buttermilk",
                    "weight": 183.75,
                    "foodCategory": "Milk",
                    "foodId": "food_axwuni1bjd81cybjn45rwb25o4jb",
                    "image": "https://www.edamam.com/food-img/768/768bea3c8421a7ae987bc00c4a2b82e8.jpg"
                },
                {
                    "text": "Accompaniment: lightly sweetened whipped cream",
                    "quantity": 0.0,
                    "measure": null,
                    "food": "cream",
                    "weight": 0.0,
                    "foodCategory": "Dairy",
                    "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
                    "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                }
            ],
            "calories": 2939.264,
            "totalWeight": 1261.331216265029,
            "totalTime": 0.0,
            "cuisineType": [
                "american"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "desserts"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 2939.264,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 105.29420000000002,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 62.64047500000001,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 3.74214,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 28.360110000000006,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 6.5230075,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 469.57087500000006,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 457.30407500000007,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 12.2668,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 316.418125,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 299.4,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 41.605475,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 622.3000000000001,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 2930.1048,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 963.1379919036068,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 119.08931216265032,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 1424.5089973012025,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 13.220448013674595,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 3.9739362162650287,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 1374.0695,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 1043.295,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 34.9275,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.61111,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.8320649999999998,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 12.579234999999999,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 0.42573000000000005,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 653.7574999999999,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 162.5075,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 288.75,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 1.48635,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 3.6950000000000003,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 5.235125,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 119.17025,
                    "unit": "µg"
                },
                "Sugar.alcohol": {
                    "label": "Sugar alcohol",
                    "quantity": 0.0,
                    "unit": "g"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 628.14493743253,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 146.9632,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 161.99107692307695,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 313.202375,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 156.52362500000004,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 49.0672,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 83.21095,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 207.43333333333337,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 122.0877,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 96.31379919036067,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 28.35459813396436,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 30.308702070238354,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 73.44693340930331,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 36.12669287513663,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 196.29564285714287,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 115.92166666666667,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 38.80833333333333,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 134.25916666666666,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 140.9280769230769,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 78.62021874999999,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 32.74846153846154,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 163.43937499999998,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 61.93125000000001,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 24.633333333333333,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 34.90083333333334,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 99.30854166666667,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 105.29420000000002,
                    "hasRDI": true,
                    "daily": 161.99107692307695,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 62.64047500000001,
                            "hasRDI": true,
                            "daily": 313.202375,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 3.74214,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 28.360110000000006,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 6.5230075,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 469.57087500000006,
                    "hasRDI": true,
                    "daily": 156.52362500000004,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 457.30407500000007,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 12.2668,
                            "hasRDI": true,
                            "daily": 49.0672,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 316.418125,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 299.4,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 41.605475,
                    "hasRDI": true,
                    "daily": 83.21095,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 622.3000000000001,
                    "hasRDI": true,
                    "daily": 207.43333333333337,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 2930.1048,
                    "hasRDI": true,
                    "daily": 122.0877,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 963.1379919036068,
                    "hasRDI": true,
                    "daily": 96.31379919036067,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 119.08931216265032,
                    "hasRDI": true,
                    "daily": 28.35459813396436,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 1424.5089973012025,
                    "hasRDI": true,
                    "daily": 30.308702070238354,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 13.220448013674595,
                    "hasRDI": true,
                    "daily": 73.44693340930331,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 3.9739362162650287,
                    "hasRDI": true,
                    "daily": 36.12669287513663,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 1374.0695,
                    "hasRDI": true,
                    "daily": 196.29564285714287,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 1043.295,
                    "hasRDI": true,
                    "daily": 115.92166666666667,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 34.9275,
                    "hasRDI": true,
                    "daily": 38.80833333333333,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.61111,
                    "hasRDI": true,
                    "daily": 134.25916666666666,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.8320649999999998,
                    "hasRDI": true,
                    "daily": 140.9280769230769,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 12.579234999999999,
                    "hasRDI": true,
                    "daily": 78.62021874999999,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 0.42573000000000005,
                    "hasRDI": true,
                    "daily": 32.74846153846154,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 653.7574999999999,
                    "hasRDI": true,
                    "daily": 163.43937499999998,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 162.5075,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 288.75,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 1.48635,
                    "hasRDI": true,
                    "daily": 61.93125000000001,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 3.6950000000000003,
                    "hasRDI": true,
                    "daily": 24.633333333333333,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 5.235125,
                    "hasRDI": true,
                    "daily": 34.90083333333334,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 119.17025,
                    "hasRDI": true,
                    "daily": 99.30854166666667,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0.0,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 628.14493743253,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "g"
                }
            ]
        },
        "_links": {
            "self": {
                "title": "Self",
                "href": "https://api.edamam.com/api/recipes/v2/recipe_9cfe6941a27959b49343b6ec198d56f8/9cfe6941a27959b49343b6ec198d56f8?type=public&app_id=c82dbea8&app_key=c38067b0fb357e5b6b0e10147a06ddc3"
            }
        }
    });

    function editURI(foodId) {
        let recipeId = foodId.toString().substr(44);
        return recipeId;
    }

    function manipulateDishes(foodId) {
        let recipeId = editURI(foodId);
        /*fetchDishes(recipeId);*/
    }

    function roundNum(calories) {
        let caloriesCount = Math.round(calories);
        return caloriesCount;
    }

    async function fetchDishes(recipeId) {
        try {
            let response = await axios.get(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${app_id}&app_key=${app_key}`);
            setRecObj(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function removeRecipe(event, dishId, mealId) {
        event.preventDefault();
        try {
            let response = await axios.delete(`http://127.0.0.1:8000/api/meals/mymeal/dish/${dishId}/meal/${mealId}/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            console.log(response.statusText);
            console.log('Recipe removed from meal');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="recipeCardContainer">
            {props.meal.dish.map((dish) => {
                if (dish) {
                    { manipulateDishes(dish.foodId) }
                    return (
                        <div className='dish' key={dish.id}>
                            <div className='mealLayoutContainer'>
                                <img src={recObj.recipe.images.THUMBNAIL.url} alt="" />
                                <p>{recObj.recipe.label}</p>
                                <p>Dish Calories: {roundNum(recObj.recipe.calories)}</p>
                                <Link to={`/recipe/${editURI(dish.foodId)}`}>View Recipe</Link>
                                <button onClick={(event) => removeRecipe(event, dish.id, props.meal.id)}>Remove Recipe</button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default EditRecipeCard;