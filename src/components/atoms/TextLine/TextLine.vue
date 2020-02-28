<template>
  <span :class="fontColor">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    fontColor: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

<style scoped>
.main {
  color: #21242b;
}
.nega {
  color: #fff;
}
.accent {
  color: #4d515c;
}
</style>
