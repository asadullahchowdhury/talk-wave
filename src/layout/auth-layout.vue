<template>
  <div class="auth-layout min-vh-100">

    <div class="container-fluid">
      <div class="row">
        <!--Left auth box start-->
        <div class="col-xxl-4 col-lg-5 col-md-6 min-vh-100 position-relative left-auth-box">
          <!--Authentication form start-->
          <div class="p-md-5 p-4 h-100 d-flex  align-items-center w-100">

            <router-view/>

          </div>
          <!--Authentication form end  -->
        </div>
        <!--Left auth box end  -->

        <!--Right auth box start-->
        <div class="col-xxl-8 col-lg-7 col-md-6 d-md-flex min-vh-100 position-fixed end-0 right-auth-box">
          <div class="bg-circle">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="cross"></div>
          <div class="cross1"></div>
          <div class="cross2"></div>
          <div class="dot"></div>
          <div class="dot1"></div>
          <div class="maincircle"></div>
          <div class="top-circle"></div>
          <div class="center-circle"></div>
          <div class="bottom-circle"></div>
          <div class="bottom-circle1"></div>
          <div class="right-circle"></div>
          <div class="right-circle1"></div>
          <img class="heart-logo" src="../assets/image/auth/heart.png" alt="heart">
          <img class="hash-logo" src="../assets/image/auth/hash.png" alt="hash">
          <img v-if="routeName !== 'AuthRegister'" class="auth-img" src="../assets/image/auth/login.png" alt="login">
          <img v-if="routeName === 'AuthRegister'" class="auth-img" src="../assets/image/auth/signup.png" alt="signup">
          <img class="boy-img" src="../assets/image/auth/boy.png" alt="boy">
          <img class="girl-img" src="../assets/image/auth/girl.png" alt="girl">
          <img class="cloud-logo" src="../assets/image/auth/cloud.png" alt="cloud">
          <img class="cloud-logo1" src="../assets/image/auth/cloud.png" alt="cloud">
          <img class="cloud-logo2" src="../assets/image/auth/cloud.png" alt="cloud">
          <img class="cloud-logo3" src="../assets/image/auth/cloud.png" alt="cloud">
          <img class="cloud-logo4" src="../assets/image/auth/cloud.png" alt="cloud">
          <img class="hash-logo1" src="../assets/image/auth/hash.png" alt="hash">
        </div>
        <!--Right auth box end  -->
      </div>
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      routeName: ''
    }
  },
  watch:{
    '$route'(to, from) {
      console.log('Route changed from', from.fullPath, 'to', to.fullPath);
      this.routeName = to.name;
    }
  },
  mounted() {
    this.routeName = this.$route.name;
    console.log(this.routeName,'rname')
  }
}
</script>
