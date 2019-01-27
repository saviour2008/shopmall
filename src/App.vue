<template>
  <div>
    <!-- 显示当前路由地址所对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  html.style.fontSize = fontSize + 'px'
})
export default {
  name: 'app'
}
</script>

<style>
</style>
