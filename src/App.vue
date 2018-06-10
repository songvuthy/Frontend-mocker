<template>
  <div id="app">
      <Menu></Menu>
      <MainPanel></MainPanel>
  </div>
</template>

<script>
import Menu from './components/include/Menu/Menu.vue'
import MainPanel from './components/include/MainPanel/MainPanel.vue'
import user from './services/user'
export default {
  components:{
      Menu,
      MainPanel,
  },
   data(){
      return{
          index: 0,
          userId:''
      }
   },
    watch:{
       '$route.fullPath':function () {
         this.middleware();
      }
    },
    created(){
       // TODO Guard user authorization
        this.middleware();


    },
    methods:{
      middleware: function() {
          let isUserLogined = user.isLogin();
          if (!isUserLogined) {
              this.$router.push('/');

          }
          else
          {
              return;
          }
      }
    }

}
</script>
<style scoped lang="css">
</style>

