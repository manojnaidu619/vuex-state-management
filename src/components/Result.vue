<template lang="html">
  <div class="row">
    <h1>{{result}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    result(){
      return this.$store.state.counter
    }
  }
}
</script>

<style lang="css" scoped>
</style>
