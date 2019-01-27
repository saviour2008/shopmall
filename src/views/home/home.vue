<template>
  <div>
    <home-header></home-header>
    <router-link to='/list'>列表页</router-link>
  </div>
</template>

<script>
import HomeHeader from '@/components/header/header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped lang="scss">

</style>
