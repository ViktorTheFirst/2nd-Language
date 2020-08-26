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
      path2: require("../assets/lesson_images/lion2.png"),
    },
    exitIcon: {
      success: require("../assets/images/green_v2.jpg"),
      fail: require("../assets/images/red_x4.jpg"),
    },
  },
  wordScreenImages: {
    answer1: {
      path1: require("../assets/images/p2.png"), //image before the click
      path2: require("../assets/images/rocket.png"), //image after the click
    },
    answer2: {
      path1: require("../assets/images/p2.png"),
      path2: require("../assets/images/rocket.png"),
    },
    answer3: {
      path1: require("../assets/images/p2.png"),
      path2: require("../assets/images/rocket.png"),
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
export { images };
