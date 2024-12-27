<template>
  <div class="glide_slides mt-5 relative flex items-center">
    <div class="glide__track" data-glide-el="track">
      <div class="glide__slides">
        <img :src="sport.image" v-for="sport in sports" alt="">
      </div>
    </div>

    <div class="glide__arrows h-fit" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left absolute focus:outline-none left-3" data-glide-dir="<">
        <div class="bg-secondary aspect-square rounded-full p-3 hover:bg-primary duration-300 bg-opacity-75">
          <IconsAccordion class="w-5 h-5 -rotate-90 text-white" />
        </div>
      </button>
      <button class="glide__arrow glide__arrow--right absolute right-3 focus:outline-none" data-glide-dir=">">
        <div class="bg-secondary aspect-square rounded-full p-3 hover:bg-primary duration-300 bg-opacity-75">
          <IconsAccordion class="w-5 h-5 rotate-90 text-white" />
        </div>
      </button>
    </div>
  </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted, ref } from "vue";
const config = useRuntimeConfig()

const locationsLoaded = ref(false)
let locations = []

const sports = [
  {
    id: 1,
    image: '/images/carousel/01.jpg'
  },
  {
    id: 2,
    image: '/images/carousel/02.jpg'
  },
  {
    id: 3,
    image: '/images/carousel/03.jpg'
  },
  {
    id: 4,
    image: '/images/carousel/04.webp'
  },
  {
    id: 5,
    image: '/images/carousel/05.webp'
  },
  {
    id: 6,
    image: '/images/carousel/06.jpg'
  },
  {
    id: 7,
    image: '/images/carousel/07.webp'
  },
]

const mountSlider = () => {
  const carousel = document.querySelectorAll(`.glide_slides`)
  carousel.forEach((marketplace) => {
    new Glide(marketplace, {
      type: 'carousel',
      focusAt: 'center',
      autoplay: false,
      gap: 20,
      peek: 30,
      animationDuration: 1000,
      breakpoints: {
        600: {
          perView: 1
        },
        1024: {
          perView: 1
        },
        1440: {
          perView: 2
        },
      }
    }).mount()
  })
}

onMounted(() =>{
  mountSlider();
})
</script>