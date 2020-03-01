<template>
  <div :class="[{ centered: isCentered }]">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isCentered: {
      type: Boolean,
      default: false,
      required: false
    }
  }
})
</script>

<style scoped>
.centered {
  align-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: inherit;
  width: 100%;
}
</style>
