<template>
<div class="headerWrapper">
  <div class="align">
    <div class="grid">
      <div class="form login">
        <div class="form__field">
          <label for="login__username"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use></svg><span class="hidden">用户名</span></label>
          <input id="login__username" title="请输入用户名" type="text" name="username" class="form__input" placeholder="用户名" required>
        </div>

        <div class="form__field">
          <label for="login__password"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use></svg><span class="hidden">密码</span></label>
          <input id="login__password" title="请输入密码" type="password" name="password" class="form__input" placeholder="密码" required>
        </div>

        <div class="form__field">
          <div class=form-button onclick="login.init()">登陆</div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="icons">
        <symbol id="arrow-right" viewBox="0 0 1792 1792">
          <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"/></symbol><symbol id="lock" viewBox="0 0 1792 1792"><path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/>
        </symbol>
        <symbol id="user" viewBox="0 0 1792 1792">
          <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"/>
        </symbol>
    </svg>
  </div>
<!--
  <div id="bg"></div> -->

</div>
</template>

<script>

var login = {
  init: function() {
    let name = document.getElementById('login__username').value
    let password = document.getElementById('login__password').value
    if (name.length === 0 || password.length === 0) {
      sweetAlert("请输入账号和密码", "出错了！", "error")
    }
    if (name === "admin" && password === "admin") {
      swal({
          title: "登陆成功即将跳转至主页",
          text: "正在跳转",
          timer: 1200,
          icon: "success",
          buttons: false
        })
        .then(() => {
          window.location = "./#/Overview"　
        })
    } else {
      sweetAlert("账号或密码错误", "出错了！", "error")
    }
  }
}
document.onkeyup = function(event) {
  let e = event || window.event || arguments.callee.caller.arguments[0]
  if (e && e.keyCode === 13) { // enter 键
    login.init()
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>





 .headerWrapper{
   position: absolute;
   top: 0;
   width: 100%;
   height: 100px;
 }

.bg {
  z-index: 100;
  height: 80px;
  /*border-bottom: 1px solid #ddd;*/
  position: absolute;
  width: 100%;
}

.shadow {
  /*border-bottom-right-radius:20px;*/
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
  overflow: hidden;
  /*border-bottom: 2px solid rgba(0, 0, 0, 0.5);*/
}

.hover {}

.mohu {
  height: 80px;
  /*z-index: 10110;*/
  filter: blur(15px);
  overflow: hidden;
  /*background: url(img/demo-bg.jpg) center center / cover no-repeat;*/
  /*background: #ddd;*/
}

.header {
  position: absolute;
  overflow: hidden;
  background-color: #20a0ff;
}
</style>
<style>



@use cssnext;
/* config.css */

:root {
  --baseColor: #606468;
}

/* helpers/align.css */

.align {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* helpers/grid.css */

/* 修改长度 */
:root {
  --gridMaxWidth: 22rem;
  --gridWidth: 90%;
}

.grid {
  margin-left: auto;
  margin-right: auto;
  max-width: var(--gridMaxWidth);
  width: 700px;
}

/* helpers/hidden.css */

.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/* helpers/icon.css */

:root {
  --iconFill: var(--baseColor);
}

.icons {
  display: none;
}

.icon {
  display: inline-block;
  fill: var(--iconFill);
  font-size: 1rem;
  height: 1em;
  vertical-align: middle;
  width: 1em;
}

/* layout/base.css */

:root {
  --htmlFontSize: 100%;
  --bodyBackgroundColor: #fff;
  --bodyColor: var(--baseColor);
  --bodyFontFamily: 'Open Sans';
  --bodyFontFamilyFallback: sans-serif;
  --bodyFontSize: 0.875rem;
  --bodyFontWeight: 400;
  --bodyLineHeight: 1.5;
}

* {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: var(--htmlFontSize);
  height: 100%;
}

/* body {
  background-color: var(--bodyBackgroundColor);
  color: var(--bodyColor);
  font-family: var(--bodyFontFamily), var(--bodyFontFamilyFallback);
  font-size: var(--bodyFontSize);
  font-weight: var(--bodyFontWeight);
  height: 100%;
  line-height: var(--bodyLineHeight);
  margin: 0;
  min-height: 100%;
} */

/* modules/anchor.css */

:root {
  --anchorColor: #eee;
}

a {
  color: var(--anchorColor);
  outline: 0;
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: underline;
}

/* modules/form.css */

:root {
  --formFieldMargin: 0.875rem;
}

input {
  background-image: none;
  border: 0;
  color: #000;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  transition: background-color 0.3s;
}

input[type='submit'] {
  cursor: pointer;
}

.form {
  margin:0;
}

.form input[type='password'],
.form input[type='text'],
.form input[type='submit'] {
  width: 100%;
}

.form__field {
  display: flex;
  margin: var(--formFieldMargin);
}

.form__input {
  flex: 1;
}

/* modules/login.css */

:root {
  --loginBorderRadus: 0.25rem;
  --loginColor: #eee;
  --loginInputBackgroundColor: #fff;
  --loginInputHoverBackgroundColor: #fff;
  --loginLabelBackgroundColor: #ddd;
  --loginSubmitBackgroundColor: #20a0ff;
  --loginSubmitColor: #eee;
  --loginSubmitHoverBackgroundColor: #0f88eb;
}

.login {
  color: var(--loginColor);
}

.login label,
.login input[type='text'],
.login input[type='password'],
.login input[type='submit'] {
  border-radius: var(--loginBorderRadus);
  padding: 1rem;
}

.login label {
  background-color: var(--loginLabelBackgroundColor);
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.login input[type='password'],
.login input[type='text'] {
  background-color: var(--loginInputBackgroundColor);
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.login input[type='password']:focus,
.login input[type='password']:hover,
.login input[type='text']:focus,
.login input[type='text']:hover {
  background-color: var(--loginInputHoverBackgroundColor);
}

.login input[type='submit'] {
  background-color: var(--loginSubmitBackgroundColor);
  color: var(--loginSubmitColor);
  font-weight: 700;
  text-transform: uppercase;
}

.login input[type='submit']:focus,
.login input[type='submit']:hover {
  background-color: var(--loginSubmitHoverBackgroundColor);
}

/* modules/text.css */

:root {
  --paragraphMarginBottom: 1.5rem;
  --paragraphMarginTop: 1.5rem;
}

p {
  margin-bottom: var(--paragraphMarginBottom);
  margin-top: var(--paragraphMarginTop);
}

.text--center {
  text-align: center;
}
</style>
<style>
#login__username,
#login__password {
  border: solid 1px #ddd;
}

.align {
  float: right;
  /* margin-right: 10%; */
  padding-top: 200px;
}

.form-button {
  /*border: solid 1px #ddd;*/
  width: 100%;
  background: #20a0ff;
  transition: background 0.3s;
  color: #fff;
  font-weight: bold;
  border-radius: 0.25rem;
  padding: 1rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  text-align: center;
  cursor: pointer;
}

.form-button:hover {
  background: #0f88eb;
}

</style>
