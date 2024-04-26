<template>
  <form class="w-100" autocomplete="off">

    <!--Form Header start-->
    <div class="logo fw-bold fs-2 mb-3 ">
      <img src="https://themes.pixelstrap.com/chitchat/assets/images/logo/landing-logo.png" alt="">
    </div>
    <h3 class="fw-semibold">Reset Password.</h3>
    <p class="text-muted mb-4">Welcome to Chatecho please login to your account.</p>
    <!--Form Header end  -->

    <!--Email input-->
    <div class="form-group mb-4">
      <input type="hidden" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Enter your email address" name="email">
      <div class="error-report"></div>
    </div>

    <!--otp input-->
    <div class="form-group mb-4">
      <label for="otp" class="form-label fw-semibold">OTP code</label>
      <input type="text" class="form-control rounded-pill ps-4 w-100 shadow-none" @keypress="checkNumber($event)"
             placeholder="Enter your otp" name="otp">
      <div class="error-report"></div>
    </div>

    <!--password input-->
    <div class="form-group mb-4">
      <label for="password" class="form-label fw-semibold">New Password</label>
      <input type="password" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Enter your email address" name="password">
      <div class="error-report"></div>
    </div>

    <!--password confirmation input-->
    <div class="form-group mb-4">
      <label for="password_confirmation" class="form-label fw-semibold">Confirm New Password</label>
      <input type="password" class="form-control rounded-pill ps-4 w-100 shadow-none"
             placeholder="Enter your email address" name="password_confirmation">
      <div class="error-report"></div>
    </div>


    <!--Action button start-->
    <div class="form-group my-5 d-flex gap-3 justify-content-center">
      <button type="submit" class="btn btn-dark rounded-pill width-250 height-50">Reset Password</button>
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

    /* Function to number check */
    checkNumber(e) {
      let theEvent = e || window.event;
      let key;
      if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');

      } else {
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      const regex = /^\d*$/;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    },
  }
}
</script>
