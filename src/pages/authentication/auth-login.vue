<template>
  <div class="container-fluid">
    <div class="row">
      <!--Left auth box start-->
      <div class="col-xxl-4 col-lg-5 col-md-6 min-vh-100 position-relative left-auth-box">
        <!--Authentication form start-->
        <div class="p-md-5 p-4 h-100 d-flex  align-items-center w-100">

          <form class="w-100" autocomplete="off">

            <!--Form Header start-->
            <div class="logo fw-bold fs-2 mb-3 ">
              <img src="https://themes.pixelstrap.com/chitchat/assets/images/logo/landing-logo.png" alt="">
            </div>
            <h3 class="fw-semibold">Hello Everyone , We are Chatecho</h3>
            <p class="text-muted mb-4">Welcome to Chatecho please login to your account.</p>
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

              <a href="javascript:void(0)" class="small text-decoration-none text-muted">Forgot Password?</a>

            </div>

            <!--Action button start-->
            <div class="form-group my-5 d-flex gap-3 justify-content-center">
              <button type="submit" class="btn btn-primary rounded-pill width-150 height-50">Login</button>
              <button type="butto5" class="btn btn-dark rounded-pill width-150 height-50">Signup</button>
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
        <img class="heart-logo" src="../../assets/image/auth/heart.png" alt="heart">
        <img class="hash-logo" src="../../assets/image/auth/hash.png" alt="hash">
        <img class="auth-img" src="../../assets/image/auth/login.png" alt="login">
        <img class="boy-img" src="../../assets/image/auth/boy.png" alt="boy">
        <img class="girl-img" src="../../assets/image/auth/girl.png" alt="girl">
        <img class="cloud-logo" src="../../assets/image/auth/cloud.png" alt="cloud">
        <img class="cloud-logo1" src="../../assets/image/auth/cloud.png" alt="cloud">
        <img class="cloud-logo2" src="../../assets/image/auth/cloud.png" alt="cloud">
        <img class="cloud-logo3" src="../../assets/image/auth/cloud.png" alt="cloud">
        <img class="cloud-logo4" src="../../assets/image/auth/cloud.png" alt="cloud">
        <img class="hash-logo1" src="../../assets/image/auth/cloud.png" alt="cloud">
      </div>
      <!--Right auth box end  -->
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
