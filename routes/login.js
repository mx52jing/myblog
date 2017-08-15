const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const UserModel = require('../models/user');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /login 登录页
router.get('/', checkNotLogin, function(req, res, next) {
  res.render('login');
});

// POST /login 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
  var name = req.fields.name;
  var password = req.fields.password;
  UserModel.getUserByName(name)
  .then((user) => {
    if(!user) {
      req.flash('error', '用户不存在');
      return res.redirect('back');
    }
    // 检查密码是否匹配
    if(sha1(password) !== user.password){
      req.flash('error', '用户名或密码错误');
      return res.redirect('back');
    }
    req.flash('success', '登录成功');
    // 用户信息写入 session
    delete user.password;
    req.session.user = user;
    // 跳转到主页
    res.redirect('/posts');
  })
  .catch(next)
});

module.exports = router;