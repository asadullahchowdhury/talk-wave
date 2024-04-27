<template>
  <form class="w-100" autocomplete="off">

    <!--Form Header start-->
    <div class="logo fw-bold fs-2 mb-3 ">
      <b>Chat</b><span class="text-theme">Echo</span>
    </div>
    <h3 class="fw-semibold">Hello Everyone , We are  <b>Chat</b><span class="text-theme">Echo</span></h3>
    <p class="text-muted mb-4">Welcome to ChatEcho please login to your account.</p>
    <!--Form Header end  -->

    <!--Email input-->
    <div class="form-group mb-4">
      <label for="email" class="form-label fw-semibold">Email Address</label>
      <input type="email" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Enter your email address" name="email">
      <div class="error-report"></div>
    </div>

    <!--Password input-->
    <div class="form-group mb-4">
      <label for="password" class="form-label fw-semibold">Password</label>
      <input type="password" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Enter your password" name="password">
      <div class="error-report"></div>
    </div>

    <!--Remember / Forgot-->
    <div class="form-group mb-4 d-flex justify-content-between align-items-center">
      <div class="form-check small text-muted">
        <input class="form-check-input" type="checkbox" value="" id="rememberMe">
        <label class="form-check-label" for="rememberMe">
          Remember me.
        </label>
      </div>

      <router-link :to="{name:'AuthForgot'}" class="small text-decoration-none text-muted">Forgot Password?</router-link>

    </div>

    <!--Action button start-->
    <div class="form-group my-5 d-flex gap-3 justify-content-center">
      <button type="submit" class="btn btn-primary rounded-pill width-150 height-50">Login</button>
      <button type="button" class="btn btn-dark rounded-pill width-150 height-50" @click="redirectToRegister">
        Signup
      </button>
    </div>
    <!--Action button end  -->


    <!--or text-->
    <div class="or-text text-center mb-4 fw-semibold">Or connect with</div>


    <!--Social buttons-->
    <ul class="m-0 p-0 list-unstyled gap-3 d-flex justify-content-center">
      <li>
        <a href="javascript:void(0)"
           class="btn btn-social google d-flex justify-content-center align-items-center rounded-circle">
          <i class="fa-brands fa-google"></i>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)"
           class="btn btn-social twitter d-flex justify-content-center align-items-center rounded-circle">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)"
           class="btn btn-social facebook d-flex justify-content-center align-items-center rounded-circle">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
      </li>
    </ul>


    <div class="d-flex flex-wrap justify-content-center gap-2 align-items-center fw-semibold mt-4">
      <span class="text-danger fw-bold">*</span>
      <a href="javascript:void(0)" class="text-muted  text-decoration-none">Terms and conditions </a>
      <strong> & </strong>
      <a href="javascript:void(0)" class="text-muted  text-decoration-none"> Privacy policy</a>
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    /*Function to redirect in signup page*/
    redirectToRegister() {
      this.$router.push({name: 'AuthRegister'})
    }
  }
}
</script>
