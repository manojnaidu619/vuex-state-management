<template lang="html">
  <div class="row">
    <button type="button" @click='raise()'class="btn btn-primary" name="button">Increment</button>
    <button type="button" @click='drop()' class="btn btn-primary" name="button">Decrement</button>
  </div>
</template>

<script>
export default {
 methods:{
   raise(){
     this.$store.state.counter++
   },
   drop(){
     this.$store.state.counter--
   }
 }
}
</script>

<style lang="css" scoped>
</style>
