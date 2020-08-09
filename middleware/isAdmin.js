const User = require("../models/user.model");

const isAdmin = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.user.id).exec();
    if (currentUser.isAdmin) {
      req.user.isAdmin = true;
      next();
    } else throw Error(`You don't have the rights to access this resource`);
  } catch (e) {
    res
      .status(403)
      .json({ msg: "You don't have the rights to access this resource" });
  }
};

module.exports = isAdmin;
