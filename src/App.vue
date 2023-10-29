<template>
  <headingNav></headingNav>
  <div :style="'margin-top: 77px;'">
    <router-view></router-view>
  </div>
</template>

<script>
import headingNav from './components/headingNav.vue';
export default {
  name: 'MainApp',
  components: {
    headingNav
  }
}
</script>

<style lang="scss">
@import '/public/static/style/main.scss';
#app > div > .container{
  @media (min-width: 1600px){
    max-width: 1600px;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (max-width: 1600px) and (min-width: 768px){
    max-width: calc(100% - 160px);
    padding-left: 80px;
    padding-right: 80px;
  }
}
</style>