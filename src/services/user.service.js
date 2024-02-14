const { User } = require("../models/user.model");
const { Op } = require("sequelize");
export class AuthService {
  async signUp({ email, password }) {
    const user = await User.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });

    if (user) throw new Error("User Already Exist");

    await User.create({
      email,
      fullName: "User",
      password,
    });

    return { message: "User created successfully" };
  }

  async signIn({ email, password }) {
    const user = await User.findOne({
      where: {
        email: {
          [Op.eq]: email,
          password,
        },
      },
    });

    if (!user) throw new Error("Email / Password is inavlid.");

    return {
      message: "User loggedin successfully.",
      data: {
        token: "abc",
      },
    };

  }
  


}
