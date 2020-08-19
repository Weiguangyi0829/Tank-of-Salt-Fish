<script>
import axios from "axios";
export default {
  name: 'login',
  datan () {
    return {
        loginName:'',
        password:''

    }
  },
  methods: {
    login: function () {
      if (password.trim() === "") {
        alert("1");
        return;
      }

      axios
        .post("/user/login", {
          loginName: loginName,
          password: password,
        })
        .then((result) => {
          console.log(result.data);
 
          if (result.data.status === 100) {
            location.href = "./products.html";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <div>
    登录名
    <input type="text" v-model="loginName" />
    密码
    <input type="password" name v-model="password" />
    <!-- 确认密码<input type="password" name="" id="password_confirm"> -->
    <button @click="login()">登录</button>
  </div>
</template>