<template lang="html">
  <div class="container">
    <my-result></my-result>
    <my-button></my-button>
  </div>
</template>

<script>
import Buttons from './components/Buttons.vue'
import Result from './components/Result.vue'

export default {
  components: {
    "my-button" : Buttons,
    "my-result" : Result
  },
  methods: {
    raiseCount(step){
      this.count += step
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  color: red;
}
</style>
