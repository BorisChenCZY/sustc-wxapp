var app = getApp()
Page({
  data: {
    tmpl: {
      load: true
    },
    warn: ''
  },
  //事件处理函数
  login: function (e) {
    if (e.detail.value.username === '' || e.detail.value.password === '') {
      this.setData({
        warn: '学号或密码不能为空'
      })
      return
    } 
    this.setData({
      tmpl: {
        load: 'loading'
      }
    })
    wx.request({
      url: 'http://localhost:3000/',
      data: {
        username: e.detail.value.username,
        password: e.detail.value.password
      },
      method: 'POST', 
      success: (res) => {
        if (!res.data) {
          this.setData({
            tmpl: {
              load: true
            },
            warn: '学号或者密码错误'
          })
          return
        } else {
          wx.setStorageSync('LoginSessionKey', 'test')
          wx.setStorageSync('name', res.data)
          wx.setStorageSync('username', e.detail.value.username)
          wx.setStorageSync('password', e.detail.value.password)
          wx.redirectTo({ url: '../index/index' })
        }
      },
      fail: (res) => {
        this.setData({
          tmpl: {
            load: false
          }
        })
      }
    })
  },
  onLoad: function () {
    if (wx.getStorageSync('LoginSessionKey')) {
      wx.redirectTo({url: '../index/index'})
    }
  },

  click1: function(event){
    // that = app;
    console.log(event)
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '0% 0% 0',
      success: function(res) {
        console.log('hhh')
      }
    })

    this.animation = animation;
    
    animation.width('0%').translate('0%', "100%").step()
    this.setData({
      line2:animation.export(),
    })

    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '0% 0% 0',
      success: function(res) {
        console.log('hhh')
      }
    })

    this.animation = animation;
    
    animation.width('100%').translate('0%', "100%").step()
    this.setData({
      line1:animation.export(),
    })
  },

  click2: function(event){
    // that = app;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '0% 0% 0',
      success: function(res) {
        console.log('hhh')
      }
    })

    this.animation = animation;
    
    animation.width('0%').translate('0%', '100%').step()
    this.setData({
      line1:animation.export(),
    })

    console.log(event)
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '0% 0% 0',
      success: function(res) {
        console.log('hhh')
      }
    })

    this.animation = animation;
    
    animation.width('100%').translate('0%', '100%').step()
    this.setData({
      line2:animation.export(),
    })

  },

  onShow:function(){
    console.log(123)
   let base = 100;
   let i = 0
   var animation = wx.createAnimation({
        timingFunction: 'ease-out',
        duration: 500,
        delay:i * base,
    })

    this.animation = animation
    
    animation.translate(0, 200).opacity(1).step()

    this.setData({
      animation1:animation.export(),
      // opacity:animation.export(),
    })
    i ++;
    var animation = wx.createAnimation({
        timingFunction: 'ease-out',
        duration: 500,
        delay:i * base,
    })

    this.animation = animation
    
    animation.translate(0, 200).opacity(1).step()
    i++;
    this.setData({
      animation2:animation.export(),
      // opacity:animation.export(),
    })
    var animation = wx.createAnimation({
        timingFunction: 'ease-out',
        duration: 500,
        delay:i * base,
    })

    this.animation = animation
    
    animation.translate(0, 200).opacity(1).step()
    i++;
    this.setData({
      animation3:animation.export(),
      // opacity:animation.export(),
    })
    var animation = wx.createAnimation({
        timingFunction: 'ease-out',
        duration: 500,
        delay:i * base,
    })

    this.animation = animation
    
    animation.translate(0, 200).opacity(1).step()
    i++;
    this.setData({
      animation4:animation.export(),
      // opacity:animation.export(),
    })
    var animation = wx.createAnimation({
        timingFunction: 'ease-out',
        duration: 500,
        delay:i * base,
    })

    this.animation = animation
    
    animation.translate(0, 200).opacity(1).step()

    this.setData({
      animation5:animation.export(),
      // opacity:animation.export(),
    })
    // var animation = wx.createAnimation({
    //     timingFunction: 'ease-out',
    //     duration: 500,
    //     delay:0,
    // })

    // this.animation = animation
    
    // animation.translate(0, 200).opacity(1).step()

    // this.setData({
    //   animation1:animation.export(),
    //   // opacity:animation.export(),
    // })
    
    
  },

  input: function(){
    this.setData({
      select: !this.data.select,
    })
  },
})
