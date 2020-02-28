<template>
  <button class="default" :class="{ shadow: isShadow, round: isRound }">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isShadow: {
      type: Boolean,
      default: false,
      required: false
    },
    isRound: {
      type: Boolean,
      default: false,
      required: false
    }
  }
})
</script>

<style scoped>
.default {
  width: 20px;
  height: 20px;
  background-color: #21242b;
}

.shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.round {
  border-radius: 50px;
}
</style>
