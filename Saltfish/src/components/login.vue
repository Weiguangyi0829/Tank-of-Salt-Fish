<template>
  <div>
    登录名
    <input type="text" v-model="login_name" />
    密码
    <input type="password" name v-model="password" />
    <!-- 确认密码<input type="password" name="" id="password_confirm"> -->
    <button @click="login">登录</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
        login_name:'',
        password:''
    };
  },
  methods: {
    login() {
      if (this.password.trim() === "") {
        alert("1");
        return;
      }

      axios
        .post("/user/login", {
          login_name: this.login_name,
          password: this.password,
        })
        .then((result) => {
          console.log(result.data);

          if (result.data.status === 100) {
            console.log('100');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>