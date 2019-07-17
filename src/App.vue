<template lang="html">
  <div class="container">
    <p><my-result></my-result></p>
    <p><my-button></my-button></p>
    <p><my-new-counter></my-new-counter></p>
  </div>
</template>

<script>
import Buttons from './components/Buttons.vue'
import Result from './components/Result.vue'
import AnotherCounter from './components/AnotherCounter.vue'

export default {
  components: {
    "my-button" : Buttons,
    "my-result" : Result,
    'my-new-counter' : AnotherCounter
  }
}
</script>

<style lang="css" scoped>
.container{
  margin-top: 50px;
}
</style>
