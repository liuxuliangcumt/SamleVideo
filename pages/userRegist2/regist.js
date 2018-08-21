// pages/userRegist/regist.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  loginSubmit: function(e) {
    var objectData = e.detail.value;
    var username = objectData.username;
    var password = objectData.password;
    if (username.length == 0 || password.length == 0) {
      wx.showToast({
        title: '请输入账号和密码',
        duration: 3000,
        icon: "none"
      })
    } else {
      wx.showLoading({
        title: '请稍后',
      })
      console.log('去请求数据');
      var serverUrl = app.serverUrl;
      wx.request({

        url: serverUrl + 'regist',
        method: "POST",
        data: {
          username: username,
          password: password
        },
        header: {
          'content-type': 'application/text' // 默认值
        },
        success: function(res) {
          wx.hideLoading();
          console.log(res.data);
        }

      })
    }

  }
})