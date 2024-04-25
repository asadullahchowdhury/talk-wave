<template>
  <div>
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from "@/layout/components/main-header.vue";

export default {
  components:{
    MainHeader

  },
  data() {
    return {}
  }
}
</script>
