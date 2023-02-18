<template>
  <div>
    <transition name="fade">
      <el-switch
        v-model="$colorMode.preference"
        size="large"
        :class="{ 'dark': $colorMode.preference === 'light' }"
        class="fixed-ThemeSwitch"
        inline-prompt
        active-text="☀️"
        inactive-text="🌛"
        active-value="light"
        inactive-value="dark"
        style="--el-switch-on-color: #fff; --el-switch-off-color: #000;"
      />
    </transition>
  </div>
</template>>
<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<style lang="scss">
  body {
    background-color: #f4f5f5;
    color: #86909c;
  }
  .dark-mode body {
    background-color: var(--color-dark-background-color);
    color: var(--color-dark-font-color);
  }
  .light-mode body {
    background-color: #f4f5f5;
    color: #86909c
  }
  .fixed-ThemeSwitch {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
