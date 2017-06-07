<template>
  <div class="out-form">
    正在退出...
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: { //计算属性
      userErrors () {
        let errorText, status;
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '不包含@'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) { //监测页面是否是第一次进入
          status = true
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码不是1-6位'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin() {
        if (!this.passwordErrors.status || !this.userErrors.status) {
          this.errorText = "用户名或者用户密码格式错误"
          return false;
        } else {
          this.errorText = "正在登录..."
          //模拟登录请求
          this.$http.post('api/login',{"user":this.usernameModel,'password':this.passwordModel})
            .then((data) =>{
              console.log(data);
              console.log(data.body);
              //将返回的data数据传递到父组件
              //由于这里使用的是箭头函数,所以this的指向没有改变
              this.$emit('has-log',data.body);
            },(err) => {
              //console.log(err);
              this.$emit('has-log',data)
            })
        }
      }
    },
    //自定义指令
    directives : {
      focus : {
        inserted (el , binding){
          el.focus()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
