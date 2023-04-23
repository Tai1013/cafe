<template lang="pug">
.layout
  .header-content(class="h-20")
    header(class="fixed top-0 w-full z-30")
      div(class="lg:container flex justify-between items-center p-2 w-full h-20")
        router-link(:to="{ name: 'home' }" class="header-logo inline-block p-1 h-full rounded-full bg-paimary")
          img(src="@/assets/img/logo.png" class="h-full brightness-200")
        ul(class="header-menu mx-4 flex items-center ")
          li(
            v-for="menu in MENU_LIST"
            :key="menu.title"
            class="mx-4 uppercase font-medium"
          )
            router-link(:to="{ name: menu.name }") {{ $t(menu.title) }}
        div(class="flex items-center")
          button(class="mx-4")
            MagnifyingGlassIcon(class="w-6 h-6")
          button
            ShoppingBagIcon(class="w-6 h-6")
          //- ShopPopover
  router-view(v-slot="{ Component, route }")
    transition(
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    )
      component(:is="Component" :key="route.path")
</template>

<script setup lang="ts">
// import ShopPopover from '@/components/shop-popover/index.vue'
import { ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { MENU_LIST } from '@/configs/constant'
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.header-menu {
  a.router-link-exact-active, a:hover {
    @apply text-paimary
  }
}
</style>
