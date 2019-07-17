<template lang="html">
  <div class="row">
    <div class="col-2">
      <h1>{{counter}}</h1>
    </div>
    <div class="col-2">
      <p>Global : {{ doubleCounter }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'doubleCounter',
    'counter'
  ])
}

</script>

<style lang="css" scoped>
</style>
