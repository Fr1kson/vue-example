<template>
  <header class="header">
    <div class="header__menu">
      <img alt="Vue logo" src="../images/open-menu.svg">
    </div>
    <div class="header__logo">
      logo
    </div>
    <div class="header__btn">
      <img alt="Vue logo" src="../images/menu.svg">
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.header {
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 60px;
  background-color: #D50320;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__menu {
    img {
      width: 32px;
      height: 32px;
    }
  }
  &__logo {
    font-size: 30px;
    text-transform: uppercase;
  }
}
</style>
