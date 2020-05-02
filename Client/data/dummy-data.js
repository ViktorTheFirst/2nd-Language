import User from "../models/user";
import Trainer from "../models/trainer";
import Category from "../models/category";

export const USERS = [
  new User("1", "Viktor", "viktor@gmail.com", "32", "Berr Sheva"),
  new User("2", "Stella", "stella@gmail.com", "29", "Paris"),
  new User("3", "Bob", "Bob@gmail.com", "11", "London"),
];

export const CATEGORIES = [
  new Category(
    "c1",
    "Crossfit",
    require("../assets/images/categories_pics/crossfits.jpg")
  ),
  new Category(
    "c2",
    "Trx",
    require("../assets/images/categories_pics/trx.jpg")
  ),
  new Category(
    "c3",
    "Pilatis",
    require("../assets/images/categories_pics/pilatis.jpg")
  ),
  new Category(
    "c4",
    "Power",
    require("../assets/images/categories_pics/powerlift.jpg")
  ),
  new Category(
    "c5",
    "Airobic",
    require("../assets/images/categories_pics/aerobic.jpg")
  ),
];

export const TRAINERS = [
  new Trainer(
    "10",
    "Fedor",
    "fedor@gmail.com",
    "26",
    "Bersheva",
    require("../assets/images/img_10.jpg"),
    ["c1", "c2"]
  ),
  new Trainer(
    "11",
    "Lindy",
    "lindy@gmail.com",
    "29",
    "Telaviv",
    require("../assets/images/img_11.jpg"),
    ["c1", "c3", "c5"]
  ),
  new Trainer(
    "12",
    "Bono",
    "bono@gmail.com",
    "16",
    "Bersheva",
    require("../assets/images/img_12.jpg"),
    ["c4", "c2"]
  ),
  new Trainer(
    "13",
    "Kristina",
    "kristina@gmail.com",
    "19",
    "Bersheva",
    require("../assets/images/img_13.jpg"),
    ["c2", "c4", "c3"]
  ),
  new Trainer(
    "14",
    "Or",
    "or@gmail.com",
    "31",
    "Yavne",
    require("../assets/images/img_14.jpg"),
    ["c1", "c5"]
  ),
  new Trainer(
    "15",
    "Vasya",
    "vasya@gmail.com",
    "38",
    "Rahat",
    require("../assets/images/img_15.jpg"),
    ["c4", "c5"]
  ),
  new Trainer(
    "16",
    "Taufik",
    "taufik@gmail.com",
    "16",
    "Rahat",
    require("../assets/images/img_16.jpg"),
    ["c2", "c4", "c5"]
  ),
  new Trainer(
    "17",
    "Bob",
    "vasya@gmail.com",
    "35",
    "Sadan",
    require("../assets/images/img_17.jpg"),
    ["c2", "c4"]
  ),
];
