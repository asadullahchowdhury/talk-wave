<template>
  <form class="w-100" autocomplete="off">

    <!--Form Header start-->
    <div class="logo fw-bold fs-2 mb-3 ">
      <img src="https://themes.pixelstrap.com/chitchat/assets/images/logo/landing-logo.png" alt="">
    </div>
    <h3 class="fw-semibold">Hello Everyone , We are Chatecho</h3>
    <p class="text-muted mb-4">Welcome to Chatecho please signup to use chatecho.</p>
    <!--Form Header end  -->

    <!--Name input-->
    <div class="form-group mb-4">
      <label for="name" class="form-label fw-semibold">Name</label>
      <input type="text" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Enter your name" name="name">
      <div class="error-report"></div>
    </div>

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

    <!--Password input-->
    <div class="form-group mb-4">
      <label for="password_confirmation" class="form-label fw-semibold">Password Confirmation</label>
      <input type="password" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Confirm your password" name="password_confirmation">
      <div class="error-report"></div>
    </div>


    <!--Action button start-->
    <div class="form-group my-5 d-flex gap-3 justify-content-center">
      <button type="button" class="btn btn-dark rounded-pill width-200 height-50">Signup</button>
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

  }
}
</script>
