<template>
  <nav class="">
    <Container class="flex items-center justify-between py-6">
      <div class="w-24">
        <Logo/>
      </div>

      <button class="flex md:hidden" @click="toggleMenu">
        <div class="w-8">
          <div :class="mobile_nav ? 'transition transform rotate-45 items-center w-8' : 'transition w-8'" class="block cursor-pointer bg-primary" style="height: 3px;"></div>
          <div :class="mobile_nav ? 'transition transform -rotate-45 item-center w-8 -mt-0.5' : 'transition w-8 mt-1.5'" class="block cursor-pointer bg-primary" style="height: 3px;"></div>
        </div>
      </button>

      <nav :class="menu_revealed ? 'translate-x-0' : '-translate-x-full'" class="md:h-fit z-0 md:static w-full md:w-fit fixed h-screen left-0 top-20 md:top duration-150 ease-in-out md:translate-x-0 bg-white">
        <ul class="grid grid-cols-1 place-items-center md:flex gap-5 md:gap-3 lg:gap-5 items-center px-6 pt-10 md:p-0">
          <li>
            <ButtonsSecondary @clicked="$router.push({path: '/about_us'})">About Us</ButtonsSecondary>

          </li>
          <li>
            <ButtonsSecondary @clicked="$router.push({path: '/how_it_works'})">How It Works</ButtonsSecondary>
          </li>
          <li>
            <ButtonsSecondary @clicked="$router.push({path: '/reviews'})">Reviews</ButtonsSecondary>
          </li>
          <li>
            <ButtonsSecondary @clicked="$router.push({path: '/faqs'})">FAQs</ButtonsSecondary>
          </li>
          <li>
            <ButtonsSecondary @clicked="$router.push({path: '/blog'})">Blog</ButtonsSecondary>
          </li>
          <li >
            <ButtonsPrimary @clicked="$router.push({name: 'contact'})">Contact Us</ButtonsPrimary>
          </li>
        </ul>
      </nav>
    </Container>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu_revealed: false,
      mobile_nav: false
    }
  },

  props: {
    keep_button_hovered: Boolean
  },

  methods: {
    toggleMenu(){
      this.mobile_nav = !this.mobile_nav
      this.menu_revealed = !this.menu_revealed
    },
  }
}
</script>

<style>

</style>