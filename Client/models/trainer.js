import User from "./user";

class Trainer extends User {
  constructor(id, name, email, age, location, picture, categoryIDs) {
    super(id, name, email, age, location);
    this.picture = picture;
    this.categoryIDs = categoryIDs;
  }
}

export default Trainer;
