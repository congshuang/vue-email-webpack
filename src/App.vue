<template>
  <div id="app">
     <h1>woshi1nidaye1</h1>
  </div>
</template>

<script>
//引入状态
import {mapGetters, matpActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },computed:mapGetters([
        'loading'
     ]),
    components:{

    }
}
</script>

<style>

</style>
