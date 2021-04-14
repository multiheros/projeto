const usersController = require("./users.controller");
const userUpdateController = require("./userUpdate.controller")
const authController = require("./auth.controller");
const accountController = require("./account.controller");
const moviesController = require("./movies.controller")

module.exports = {
  usersController,
  authController,
  accountController,
  moviesController,
  userUpdateController
};
