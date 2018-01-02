<template>
</template>

<script>
  import auth from '../services/auth'

  export default {
    name: 'logout',
    created () {
      auth.logout()
      this.$router.push('/')
    }
  }
</script>

<style scoped>
</style>
