const express = require('express');
const router = express.Router();

const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /reg 注册页
router.get('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /reg 用户注册
router.post('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;