<template>
  <Button :is-shadow="isShadow" :is-round="isRound">
    <TextLine :font-color="fontColor">
      <slot />
    </TextLine>
  </Button>
</template>

<script lang="ts">
import Vue from 'vue'
import TextLine from '../../atoms/TextLine/TextLine.vue'
import Button from '../../atoms/Button/Button.vue'

export default Vue.extend({
  components: { Button, TextLine },
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
    },
    fontColor: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

<style scoped></style>
