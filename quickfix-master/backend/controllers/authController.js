import User from "../models/User.js";
import Worker from "../models/Work.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user
// user registation
export const userregister = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      // phoneno: req.body.phoneno,
      // location: req.body.location,
      // zipcode: req.body.zipcode,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try Again" });
  }
};

//user login
export const userlogin = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    //if user not exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    //if user exist,check the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    //set token in browser cookies
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        // success: true,
        // message: "Successfully login",
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};

//worker
// worker register
export const workerregister = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newWorker = new Worker({
      workername: req.body.workername,
      service: req.body.service,
      email: req.body.email,
      password: hash,
      gender: req.body.gender,
      phoneno: req.body.phoneno,
      location: req.body.location,
      street: req.body.street,
      zipcode: req.body.zipcode,
      price: req.body.price
    });

    await newWorker.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try Again" });
  }
};

export const workerlogin = async (req, res) => {
  const email = req.body.email;

  try {
    const work = await Worker.findOne({ email });

    //if work not exist
    if (!work) {
      return res
        .status(404)
        .json({ success: false, message: "work not found" });
    }
    //if work exist,check the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      work.password
    );

    //if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = work._doc;

    //create jwt token
    const token = jwt.sign(
      { id: work._id, role: work.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in browser cookies
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        // success: true,
        // message: "Successfully login",
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
