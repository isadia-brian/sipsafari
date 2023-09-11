import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,

    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  image: {
    type: String,
  },
  orders: [],
  favouriteDrinks: [],
});

const User = models.User || model("User", UserSchema);
export default User;
