function matchUser(req, res, next) {
  try {
    if (req.user.isAdmin || req.user.id === req.body.author) {
      next();
    } else throw Error(`You don't have the rights to access this resource`);
  } catch (e) {
    res
      .status(403)
      .json({ msg: "You don't have the rights to access this resource" });
  }
}

module.exports = matchUser;
