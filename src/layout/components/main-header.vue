<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">TalkWave</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>

          <router-link :to="{name:'AuthLogin'}" class="btn btn-outline-dark rounded-pill px-4 mx-2">Login</router-link>
          <a href="javascript:void(0)" class="btn btn-dark rounded-pill px-4 mx-2">Signup</a>
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
