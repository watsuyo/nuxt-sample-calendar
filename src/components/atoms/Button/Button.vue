<template>
  <button class="default" :class="{ shadow: isShadow }" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isShadow: {
      type: Boolean,
      default: false,
      required: false
    }
  }
})
</script>

<style scoped>
.default {
  width: 50px;
  height: 50px;
}

.shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
