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
  //=========================EXIT=======================
  exitIcon: {
    success: require("../assets/images/green_v2.jpg"),
    fail: require("../assets/images/red_x4.jpg"),
  },
};
export { images, images2 };
