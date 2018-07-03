<template>
  <div id="app">
    <tabs></tabs>
    <div class="content">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import Tabs from 'components/tab/Tabs'
export default {
  name: 'App',
  components: {
    Tabs
  }
 
}
</script>

<style lang='stylus'>
html,body{
  height: 100%
} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
}
</style>
