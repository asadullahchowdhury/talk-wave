<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-5 col-md-6 min-vh-100 bg-white">
        <!--Authentication form start-->
        <div class="p-md-5 p-4 h-100 d-flex  align-items-center w-100">

          <form class=" w-100" autocomplete="off">

            <!--Form Header start-->
            <div class="logo fw-bold fs-2 mb-3 ">
              <img src="https://themes.pixelstrap.com/chitchat/assets/images/logo/landing-logo.png" alt="">
            </div>
            <h3 class="fw-semibold">Hello Everyone , We are Chitchat</h3>
            <p class="text-muted mb-4">Wellcome to chitchat please login to your account.</p>
            <!--Form Header end  -->

            <!--Email input-->
            <div class="form-group mb-4">
              <label for="email" class="form-label fw-semibold">Email Address</label>
              <input type="email" class="form-control w-100 shadow-none"
                     placeholder="Enter your email address" name="email">
              <div class="error-report"></div>
            </div>

            <!--Password input-->
            <div class="form-group mb-4">
              <label for="password" class="form-label fw-semibold">Password</label>
              <input type="password" class="form-control w-100 shadow-none"
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

              <a href="javascript:void(0)" class="small text-decoration-none text-muted">Forgot Password?</a>

            </div>

            <!--Action button start-->
            <div class="form-group my-5 d-flex gap-3 justify-content-center">
              <button type="submit" class="btn btn-primary rounded-pill px-5 py-2">Login</button>
              <a href="javascript:void(0)" class="btn btn-dark rounded-pill px-5 py-2">Signup</a>
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

        </div>
        <!--Authentication form end  -->
      </div>
      <div class="col-lg-7 col-md-6 d-md-block d-none min-vh-100 bg-primary">1</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>
