<template lang="html">
  <div class="container">
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
  }
}
</script>

<style lang="css" scoped>
.container{
  margin-top: 50px;
}
</style>
