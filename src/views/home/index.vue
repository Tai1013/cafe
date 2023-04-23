<template lang="pug">
.home-layout
  .home-content(class="relative -mt-20 w-full h-screen min-h-[650px] before:absolute before:bottom-0 before:right-0 before:inset-0 before:-z-10")
    div(class="lg:container mx-4 h-full flex justify-between items-center")
      div(class=" flex-1")
        p(class="text-5xl text-paimary font-medium") {{ $t('Discover your favorite coffee beans by exploring the world of coffee.') }}
        p(class="my-6 text-xl text-secondary") {{ $t('Form the farm to the coffee bean, all of our coffee products are guaranteed to be 100% natural.') }}
        div(class="flex items-center")
          router-link(:to="{ name: 'product' }" class="mr-2")
            button(class="px-6 py-2 flex items-center rounded-full border-solid border-2 border-paimary text-paimary font-medium hover:text-white hover:bg-paimary")
              ShoppingBagIcon(class="w-4 h-4")
              span(class="pl-1") {{ $t('product now') }}
          router-link(:to="{ name: 'about' }" class="mr-2")
            button(class="px-6 py-2 flex items-center rounded-full border-solid border-2 border-secondary text-secondary font-medium hover:text-white hover:bg-secondary")
              span(class="pr-1") {{ $t('read more') }}
              ArrowRightIcon(class="w-4 h-4")
      div(class="relative flex-1 flex justify-center items-center")
        img(
          class="coffee-img max-w-lg w-full"
          src="@/assets/img/coffee.png"
        )
  div(class="w-full")
    //- p(class="text-center text-2xl font-medium text-paimary") {{ $t('deal of the day') }}
    ul(class="lg:container w-full")
      li(class="relative w-full my-6 p-6 h-56 flex rounded-lg bg-gradient-to-r shadow-sm shadow-slate-400 to-paimary from-paimary/25")
        div(class="w-2/3")
          span(class="inline-block px-4 py-2 text-white text-xs font-medium bg-red-600 rounded-full animate-pulse") {{ $t('deal of the day') }}
          p(class="my-3 text-secondary text-xl") {{ $t('Macarons in various flavors') }}
          p(class="my-3 text-secondary text-sm") {{ $t('A perfect macaron should be just set in the middle, with a soft and very slightly chewy centre and a thin layer of crispy outer shell.') }}
          router-link(:to="{ name: 'product' }" class="mr-2 mt-3")
            button(class="px-4 py-1.5 flex items-center rounded-full border-solid border-2 border-paimary text-paimary hover:text-white hover:bg-paimary")
              ShoppingBagIcon(class="w-4 h-4")
              span(class="pl-1 text-sm") {{ $t('product now') }}
        img(src="@/assets/img/macaron.png" class="absolute bottom-0 right-0 h-60")
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { ShoppingBagIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.home-content::before {
  background-position: bottom right;
  background-image: url('@/assets/img/background.png');
  background-size: cover;
}

.coffee-img {
  filter: drop-shadow(0 0 6px $paimary-color);
}
</style>
