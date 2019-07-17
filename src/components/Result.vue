<template lang="html">
  <div class="row">
    <div class="col-2">
      <h1>{{ $store.state.counter }}</h1>
    </div>
    <div class="col-3">
      <p>Getter.doubleCounter : {{ doubleCounter }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'doubleCounter'
  ])
}

</script>

<style lang="css" scoped>
</style>
