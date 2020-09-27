const images = {
  mainScreenImages: {
    sounds: {
      path: require("../assets/images/p2.png"),
    },
    words: {
      path: require("../assets/images/p1.png"),
    },
  },
  soundScreenImages: {
    answer1: {
      path1: require("../assets/images/p2.png"), //image before the click
      path2: require("../assets/lesson_images/piano.png"), //image after the click
    },
    answer2: {
      path1: require("../assets/images/p2.png"),
      path2: require("../assets/lesson_images/banana.png"),
    },
    answer3: {
      path1: require("../assets/images/p2.png"),
      path2: require("../assets/lesson_images/lion.png"),
    },
    exitIcon: {
      success: require("../assets/images/green_v2.jpg"),
      fail: require("../assets/images/red_x4.jpg"),
    },
  },
  wordScreenImages: {
    answer1: {
      path1: require("../assets/images/p2.png"), //image before the click
      path2: require("../assets/lesson_images/monkey.png"), //image after the click
    },
    answer2: {
      path1: require("../assets/images/p2.png"),
      path2: require("../assets/lesson_images/spot.png"),
    },
    answer3: {
      path1: require("../assets/images/p2.png"),
      path2: require("../assets/lesson_images/crocodile.jpg"),
    },
  },
  sentanceScreenImages: {
    answer1: {
      path1: require("../assets/images/rocket.png"),
      path2: require("../assets/images/p2.png"),
    },
    answer2: {
      path1: require("../assets/images/rocket.png"),
      path2: require("../assets/images/p2.png"),
    },
    answer3: {
      path1: require("../assets/images/rocket.png"),
      path2: require("../assets/images/p2.png"),
    },
  },
};

const images2 = {
  //=======================FULL WORDS========================
  piano: require("../assets/lesson_images/piano.png"),
  banana: require("../assets/lesson_images/banana.png"),
  basket: require("../assets/lesson_images/basket.jpg"),
  crocodile: require("../assets/lesson_images/crocodile.jpg"),
  dinner: require("../assets/lesson_images/dinner.jpg"),
  lion: require("../assets/lesson_images/lion.png"),
  monkey: require("../assets/lesson_images/monkey.png"),
  jupiter: require("../assets/lesson_images/p2.png"),
  saturn: require("../assets/lesson_images/p1.png"),
  rocket: require("../assets/lesson_images/rocket.png"),
  spot: require("../assets/lesson_images/spot.png"),
  stairs: require("../assets/lesson_images/stairs.jpg"),
  yellow: require("../assets/lesson_images/yellow.png"),
  hippo: require("../assets/lesson_images/hippo.jpg"),
  turtle: require("../assets/lesson_images/turtle.jpg"),
  //=========================SENTENCES==================
  a_green_crocodile: require("../assets/lesson_images/a_green_crocodile.png"),
  a_monkey_eating_a_banana: require("../assets/lesson_images/a_monkey_eating_a_banana.jpg"),
  a_boy_eating_dinner: require("../assets/lesson_images/a_boy_eating_dinner.png"),
  //===========================STORY====================
  one_two_three: require("../assets/lesson_images/one_two_three.jpg"),

  //===========================AVATARS===========================
  monster_1: require("../assets/images/monster_1.png"),
  monster_2: require("../assets/images/monster_2.png"),
  monster_3: require("../assets/images/monster_3.png"),
  monster_4: require("../assets/images/monster_4.png"),
  monster_5: require("../assets/images/monster_5.png"),
  monster_6: require("../assets/images/monster_6.png"),
  monster_7: require("../assets/images/monster_7.png"),
  monster_8: require("../assets/images/monster_8.png"),
  monster_9: require("../assets/images/monster_9.png"),
  monster_10: require("../assets/images/monster_10.png"),
  monster_11: require("../assets/images/monster_11.png"),
  monster_12: require("../assets/images/monster_12.png"),

  //=========================EXIT=======================
  exitIcon: {
    success: require("../assets/images/green_v2.jpg"),
    fail: require("../assets/images/red_x4.jpg"),
  },
};
export { images, images2 };
