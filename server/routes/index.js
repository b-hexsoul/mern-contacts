const express = require("express");
const router = express.Router();
const AuthRouter = require("./auth");
const ContactsRouter = require("./contacts");
const UserRouter = require("./users");

router.use("/auth", AuthRouter);
router.use("/contacts", ContactsRouter);
router.use("/users", UserRouter);

module.exports = router;
