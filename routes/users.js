const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");
const { User } = require("../models/user");

router.get(
  "/get-all-users/",
  errorHandler(async (req, res) => {
    const users = await User.find({});

    res.status(200).send({ data: users });
  })
);

router.get(
  "/get-user/:userId",
  errorHandler(async (req, res) => {
    const { userId } = req.params;

    const user = await User.find({ _id: userId });

    res.status(200).send({ data: user });
  })
);

router.put(
  "/update-user-info/:userId",
  errorHandler(async (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, email } = req.body;

    await User.updateOne(
      { _id: userId },
      { $set: { firstName: firstName, lastName: lastName, email: email } }
    );

    res.status(200).send({ success: true });
  })
);

module.exports = router;
