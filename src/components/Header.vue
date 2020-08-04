<template>
  <header class="header">
    <div class="header__menu"></div>
    <div class="header__logo">
      logo
    </div>
    <div class="header__btn"></div>
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

  }
  &__logo {
    font-size: 30px;
    text-transform: uppercase;
  }
}
</style>
