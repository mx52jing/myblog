const express = require('express');
const router = express.Router();

const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /login 登录页
router.get('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /login 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;