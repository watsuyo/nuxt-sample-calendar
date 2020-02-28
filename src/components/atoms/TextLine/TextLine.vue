<template>
  <span class="default" :class="[fontColor, { bold: isBold }]">
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
    },

    isBold: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style scoped>
.default {
  font-size: 16px;
}
.main {
  color: #21242b;
}
.nega {
  color: #fff;
}
.accent {
  color: #4d515c;
}
.passive {
  color: #737a8c;
}
.bold {
  font-weight: bold;
}
</style>
