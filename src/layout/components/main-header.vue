<template>
  <div class="header w-100">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link :to="{name:'HomePage'}" class="navbar-brand fs-3" href="#"><b class="fw-bolder">Chat</b><span
            class="text-theme">Echo</span></router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <div class="ms-auto">
            <router-link :to="{name:'AuthLogin'}" class="btn btn-outline-dark fw-semibold rounded-pill px-4 mx-2">
              Login
            </router-link>
            <router-link :to="{name:'AuthRegister'}" class="btn btn-dark fw-semibold rounded-pill px-4 mx-2">Signup
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>
