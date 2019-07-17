<template lang="html">
</template>

<script>
export default {
  computed: {
    mutRaise(){
       this.$store.commit('increment')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
