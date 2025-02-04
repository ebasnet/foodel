import noodle from './noodle.png'; // Changed to .png
import logo from './logo.png'; // Changed to .png
import search from './search.png'; 
import cart from './cart.png';

import menu_1 from './pancake.png'; 
import menu_2 from './lunch.png'; 
import menu_3 from './dine.png'; // Changed to .png
import menu_4 from './rolls.png'; // Changed to .png
import menu_5 from './tiramisu.png'; // Changed to .png
import menu_6 from './burger.png'; // Changed to .png
import menu_7 from './noodle.png'; // Changed to .png

import food_1 from './food_1.png'; 
import food_2 from './food_2.png';
import food_3 from './burger.png';

export const asset = {
    noodle,
    logo,
    search,
    cart
}

export const menu_list = [
    {
        menu_name: "Breakfast",
        menu_image: menu_1
    },
    {
        menu_name: "Lunch",
        menu_image: menu_2
    },
    {
        menu_name: "Dine",
        menu_image: menu_3
    },
    {
        menu_name: "Rolls",
        menu_image: menu_4
    },
    {
        menu_name: "Deserts",
        menu_image: menu_5
    },
    {
        menu_name: "Burger",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Pancake Crepes",
        image: food_1,
        price: 550,
        description: "Delicious Crepes for your sweet morning",
        category: "Breakfast"
    },
    {
        _id: "2",
        name: "Bolognese Pasta",
        image: food_2,
        price: 550,
        description: "Good Pasta leads you to good memories",
        category: "Pasta"
    },
    {
        _id: "3",
        name: "Classic Burger",
        image: food_3,
        price: 550,
        description: "Good Pasta leads you to good memories",
        category: "Burger"
    },
    {
        _id: "4",
        name: "Bolognese Pasta",
        image: food_1,
        price: 550,
        description: "Good Pasta leads you to good memories",
        category: "Noodle"
    },
    {
        _id: "5",
        name: "Bolognese Pasta",
        image: food_1,
        price: 550,
        description: "Good Pasta leads you to good memories",
        category: "Noodle"
    },
    {
        _id: "6",
        name: "Bolognese Pasta",
        image: food_1,
        price: 550,
        description: "Good Pasta leads you to good memories",
        category: "Noodle"
    }
]
