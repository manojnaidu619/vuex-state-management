<template lang="html">
  <div class="container">
    <p>Global : {{ $store.getters.doubleCounter }}</p>
    <p><my-result></my-result></p>
    <p><my-button></my-button></p>
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
