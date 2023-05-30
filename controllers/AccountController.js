const Account = require("../models/Account");
const mongoose = require("mongoose");

const createAccount = async (req, res) => {
  const { username, password } = req.body;

  // add doc to db
  const accountCheck = await Account.find({ username: username });
  console.log(accountCheck.length);

  if (accountCheck.length === 0) {
    try {
      const account = await Account.create({ username, password });
      res.status(200).json(account);
      return;
    } catch (err) {
      res.status(400).json({ error: "Something Went Wrong" });
      return;
    }
  } else {
    console.log("Username Already Exist");
    res.status(400).json({ error: "Username Already Exist" });
    return;
  }
};

const loginAccount = async (req, res) => {
  const { username, password } = req.body;

  const account = await Account.find({
    username: username,
    password: password,
  });

  if (account.length === 1) {
    res.status(200).json(account);
  } else {
    res.status(400).json({ error: "Something Went Wrong" });
  }
};

const updateUser = async (req, res) => {
  const { bio, username } = req.body;
  const account = await Account.findOneAndUpdate(
    { username: username },
    {
      bio: bio,
    }
  );
  res.json(account);
};

const followUser = async (req, res) => {
  const { follow, username } = req.body;

  const account = await Account.findOneAndUpdate(
    { username: username },
    {
      $push: {
        following: follow,
      },
    }
  );

  const updateUserFollowCount = await Account.findOneAndUpdate(
    {
      username: follow,
    },
    {
      $inc: {
        followers: 1,
      },
    }
  );

  if (!account) {
    return res.status(404).json({ err: "No such account" });
  }
  if (!updateUserFollowCount) {
    return res.status(404).json({ err: "No such account" });
  }

  res.status(200).json(account);
};

const unfollowUser = async (req, res) => {
  const { follow, username } = req.body;

  const account = await Account.findOneAndUpdate(
    { username: username },
    {
      $pull: {
        following: follow,
      },
    }
  );

  const updateUserFollowCount = await Account.findOneAndUpdate(
    {
      username: follow,
    },
    {
      $inc: {
        followers: -1,
      },
    }
  );

  if (!account) {
    return res.status(404).json({ err: "No such account" });
  }
  if (!updateUserFollowCount) {
    return res.status(404).json({ err: "No such account" });
  }

  res.status(200).json(account);
};

const sendImage = async (req, res) => {
  console.log(req.headers.postid);
  res.sendFile(__dirname + "\\images\\" + req.headers.postid); // this code works
};

module.exports = {
  createAccount,
  followUser,
  unfollowUser,
  loginAccount,
  sendImage,
  updateUser,
};
