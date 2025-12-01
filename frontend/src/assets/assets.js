import basket_icon from './basket_icon.svg'
import logo from './logo.svg'
import header_img from './header_img.png'
import search_icon from './search_icon.svg'
import menu_1 from './menu_1.webp'
import menu_2 from './menu_2.webp'
import menu_3 from './menu_3.webp'
import menu_4 from './menu_4.webp'
import menu_5 from './menu_5.webp'
import menu_6 from './menu_6.webp'
import menu_7 from './menu_7.webp'
import menu_8 from './menu_8.webp'

import food_1 from './food_1.webp'
import food_2 from './food_2.webp'
import food_3 from './food_3.webp'
import food_4 from './food_4.webp'
import food_5 from './food_5.webp'
import food_6 from './food_6.webp'
import food_7 from './food_7.webp'
import food_8 from './food_8.webp'
import food_9 from './food_9.webp'
import food_10 from './food_10.webp'
import food_11 from './food_11.webp'
import food_12 from './food_12.webp'
import food_13 from './food_13.webp'
import food_14 from './food_14.webp'
import food_15 from './food_15.webp'
import food_16 from './food_16.webp'
import food_17 from './food_17.webp'
import food_18 from './food_18.webp'
import food_19 from './food_19.webp'
import food_20 from './food_20.webp'
import food_21 from './food_21.webp'
import food_22 from './food_22.webp'
import food_23 from './food_23.webp'
import food_24 from './food_24.webp'
import food_25 from './food_25.webp'
import food_26 from './food_26.webp'
import food_27 from './food_27.webp'
import food_28 from './food_28.webp'
import food_29 from './food_29.webp'
import food_30 from './food_30.webp'
import food_31 from './food_31.webp'
import food_32 from './food_32.webp'


import add_icon_white from './add_icon_white.svg'
import add_icon_green from './add_icon_green.svg'
import remove_icon_red from './remove_icon_red.svg'
import app_store from './app_store.svg'
import play_store from './play_store.svg'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.svg'
import profile_icon from './profile_icon.svg'
import bag_icon from './bag_icon.svg'
import logout_icon from './logout_icon.svg'
import parcel_icon from './parcel_icon.png'
import heart_icon from './heart_icon.svg'

export const assets = {
    logo,
    heart_icon,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Dosa",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwichs",
        menu_image: menu_4
    },
    {
        menu_name: "Cakes",
        menu_image: menu_5
    },
    {
        menu_name: "Thalis",
        menu_image: menu_6
    },
    {
        menu_name: "Pizza",
        menu_image: menu_7
    },
    {
        menu_name: "Chinese",
        menu_image: menu_8
    }]

export const food_list = [
        {
        _id: "1",
        name: "Fresh Garden Salad",
        image: food_1,
        price: 120,
        description: "A crunchy mix of lettuce, cucumbers, tomatoes, and light herbs.",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Sprout Power Salad",
        image: food_2,
        price: 140,
        description: "A protein-rich salad made with sprouts, lemon, and mild spices.",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Corn Capsicum Salad",
        image: food_3,
        price: 130,
        description: "A sweet and crunchy blend of corn, capsicum, and herbs.",
        category: "Salad"
    },
    {
        _id: "4",
        name: "Paneer Protein Salad",
        image: food_4,
        price: 170,
        description: "Fresh cottage cheese cubes tossed with veggies and herbs.",
        category: "Salad"
    },

    // ---------------- DOSA ----------------
    {
        _id: "5",
        name: "Masala Dosa",
        image: food_5,
        price: 90,
        description: "Crispy dosa stuffed with spiced potato masala.",
        category: "Dosa"
    },
    {
        _id: "6",
        name: "Paneer Dosa",
        image: food_6,
        price: 130,
        description: "A flavorful dosa filled with grated paneer and spices.",
        category: "Dosa"
    },
    {
        _id: "7",
        name: "Rava Dosa",
        image: food_7,
        price: 100,
        description: "Thin and crispy dosa made from semolina batter.",
        category: "Dosa"
    },
    {
        _id: "8",
        name: "Cheese Burst Dosa",
        image: food_8,
        price: 150,
        description: "A cheesy twist on the classic dosa for dairy lovers.",
        category: "Dosa"
    },

    // ---------------- DESERTS ----------------
    {
        _id: "9",
        name: "Chocolate Mousse",
        image: food_9,
        price: 120,
        description: "Rich and airy chocolate dessert with silky smooth texture.",
        category: "Deserts"
    },
    {
        _id: "10",
        name: "Gulab Jamun Cup",
        image: food_10,
        price: 90,
        description: "Soft gulab jamuns served chilled with sweet syrup.",
        category: "Deserts"
    },
    {
        _id: "11",
        name: "Brownie with Ice Cream",
        image: food_11,
        price: 180,
        description: "Warm chocolate brownie topped with a scoop of vanilla ice cream.",
        category: "Deserts"
    },
    {
        _id: "12",
        name: "Fruit Custard",
        image: food_12,
        price: 110,
        description: "Seasonal fruits mixed with creamy sweet custard.",
        category: "Deserts"
    },

    // ---------------- SANDWICHES ----------------
    {
        _id: "13",
        name: "Cheese Grilled Sandwich",
        image: food_13,
        price: 120,
        description: "Grilled bread stuffed with melted cheese and herbs.",
        category: "Sandwichs"
    },
    {
        _id: "14",
        name: "Paneer Tikka Sandwich",
        image: food_14,
        price: 150,
        description: "Paneer tikka cubes layered inside toasted bread.",
        category: "Sandwichs"
    },
    {
        _id: "15",
        name: "Veg Club Sandwich",
        image: food_15,
        price: 130,
        description: "A triple-layered sandwich loaded with veggies and sauces.",
        category: "Sandwichs"
    },
    {
        _id: "16",
        name: "Chilli Cheese Sandwich",
        image: food_16,
        price: 140,
        description: "A spicy sandwich filled with cheese and green chillies.",
        category: "Sandwichs"
    },

    // ---------------- CAKES ----------------
    {
        _id: "17",
        name: "Red Velvet Cake",
        image: food_17,
        price: 250,
        description: "A soft red velvet sponge layered with cream cheese frosting.",
        category: "Cakes"
    },
    {
        _id: "18",
        name: "Chocolate Truffle Cake",
        image: food_18,
        price: 300,
        description: "Rich chocolate cake filled with smooth truffle cream.",
        category: "Cakes"
    },
    {
        _id: "19",
        name: "Strawberry Cream Cake",
        image: food_19,
        price: 280,
        description: "Fresh strawberry-flavored cake topped with whipped cream.",
        category: "Cakes"
    },
    {
        _id: "20",
        name: "Coffee Walnut Cake",
        image: food_20,
        price: 260,
        description: "A soft cake blended with coffee flavor and crunchy walnuts.",
        category: "Cakes"
    },

    // ---------------- THALIS ----------------
    {
        _id: "21",
        name: "North Indian Thali",
        image: food_21,
        price: 220,
        description: "A hearty thali with dal, paneer, roti, rice, and dessert.",
        category: "Thalis"
    },
    {
        _id: "22",
        name: "South Indian Thali",
        image: food_22,
        price: 180,
        description: "A traditional thali served with sambar, rasam, rice, and papad.",
        category: "Thalis"
    },
    {
        _id: "23",
        name: "Mini Veg Thali",
        image: food_23,
        price: 150,
        description: "A simple and light thali with roti, sabzi, dal, and rice.",
        category: "Thalis"
    },
    {
        _id: "24",
        name: "Special Deluxe Thali",
        image: food_24,
        price: 260,
        description: "A royal thali with multiple curries, sweets, and sides.",
        category: "Thalis"
    },

    // ---------------- PIZZA ----------------
    {
        _id: "25",
        name: "Margherita Pizza",
        image: food_25,
        price: 220,
        description: "Classic pizza topped with cheese, basil, and tomato sauce.",
        category: "Pizza"
    },
    {
        _id: "26",
        name: "Veg Loaded Pizza",
        image: food_26,
        price: 260,
        description: "A cheesy pizza topped with fresh vegetables and herbs.",
        category: "Pizza"
    },
    {
        _id: "27",
        name: "Paneer Tandoori Pizza",
        image: food_27,
        price: 300,
        description: "Tandoori paneer chunks over a spicy cheesy base.",
        category: "Pizza"
    },
    {
        _id: "28",
        name: "Mexican Wave Pizza",
        image: food_28,
        price: 280,
        description: "A zesty pizza with jalapenos, olives, and Mexican spices.",
        category: "Pizza"
    },

    // ---------------- CHINESE ----------------
    {
        _id: "29",
        name: "Veg Hakka Noodles",
        image: food_29,
        price: 120,
        description: "Classic Chinese-style noodles tossed with veggies.",
        category: "Chinese"
    },
    {
        _id: "30",
        name: "Chilli Garlic Noodles",
        image: food_30,
        price: 130,
        description: "Spicy noodles flavored with garlic and red chillies.",
        category: "Chinese"
    },
    {
        _id: "31",
        name: "Paneer Chilli Dry",
        image: food_31,
        price: 160,
        description: "Crispy paneer cubes tossed in Indo-Chinese sauces.",
        category: "Chinese"
    },
    {
        _id: "32",
        name: "Veg Manchurian Gravy",
        image: food_32,
        price: 150,
        description: "Fried vegetable balls cooked in a rich Chinese-style gravy.",
        category: "Chinese"
    }
];