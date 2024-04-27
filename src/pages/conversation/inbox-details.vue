<template>
  <div class="inbox-details container position-relative">
    <router-link :to="{name:'ChatInbox'}" href="javascript:void(0)" class="btn btn-light "><i class="fa-solid fa-arrow-left"></i>
    </router-link>

    <!--Details header start-->
    <div class="d-flex justify-content-center align-items-center flex-column mb-4">
      <div class="user-img rounded-circle mb-3 border">
        <img class="img-fluid rounded-circle" src="../../assets/image/dummy-user.jpg" alt="user">
      </div>
      <h4 class="name fw-bold mb-0">Tamara</h4>
      <p class="text-muted">@tamara_cia</p>
    </div>
    <!--Details header end  -->

    <div class="border mb-4"></div>

    <p class="fw-bold mb-0">Phone</p>
    <p class="text-muted small">+234 2134 234 23423</p>

    <p class="fw-bold mb-0">Description</p>
    <p class="text-muted small">Available</p>

    <p class="fw-bold mb-0">Email</p>
    <p class="text-muted mb-4 small">tamara@gmail.com</p>

    <div class="border mb-4"></div>

    <div class="d-flex align-items-center justify-content-between mb-3">
      <p class="fw-bold mb-0">Shared file</p>
      <p class="text-muted small mb-0">640MB</p>
    </div>

    <!--Doc File-->
    <a href="javascript:void(0)"
       class="each-file-wrapper rounded-4 text-decoration-none d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-center gap-3">
                <span class="icon-wrapper rounded-3">
                <i class="fa-regular fa-file fs-3"></i>
              </span>
        <div>
          <p class="mb-0 text-dark fw-semibold small">Document</p>
          <p class="mb-0 small text-muted">10MB</p>
        </div>
      </div>

      <span class="right-arrow text-dark pe-2">
                <i class="fa-solid small fa-chevron-right"></i>
              </span>
    </a>

    <!--Image File-->
    <a href="javascript:void(0)"
       class="each-file-wrapper rounded-4 text-decoration-none d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-center gap-3">
                <span class="icon-wrapper image rounded-3">
                <i class="fa-regular fa-file-image fs-3"></i>
              </span>
        <div>
          <p class="mb-0 text-dark fw-semibold small">Image</p>
          <p class="mb-0 small text-muted">100MB</p>
        </div>
      </div>

      <span class="right-arrow text-dark pe-2">
                <i class="fa-solid small fa-chevron-right"></i>
              </span>
    </a>

    <!--Video File-->
    <a href="javascript:void(0)"
       class="each-file-wrapper rounded-4 text-decoration-none d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-center gap-3">
                <span class="icon-wrapper video rounded-3">
                <i class="fa-regular fa-file-video fs-3"></i>
              </span>
        <div>
          <p class="mb-0 text-dark fw-semibold small">Video</p>
          <p class="mb-0 small text-muted">530MB</p>
        </div>
      </div>

      <span class="right-arrow text-dark pe-2">
                <i class="fa-solid small fa-chevron-right"></i>
              </span>
    </a>

  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>