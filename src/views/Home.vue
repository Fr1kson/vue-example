<template>
  <div class="home">
    <Header/>
    <MainScreen/>
  </div>
</template>

<script>
import MainScreen from '@/components/MainScreen.vue'
import Header from '@/components/Header.vue'
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    "Header": Header,
    "MainScreen": MainScreen,
  },
})
export default class Home extends Vue {

}
</script>
<style scoped lang="scss">
.home {
  position: relative;
}
</style>
