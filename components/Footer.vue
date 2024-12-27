<template>
  <Container class="py-8">
    <div class="w-full h-0.5 bg-neutral-200"></div>
    <div class="flex-wrap flex gap-6 justify-between mt-8">

      <div>
        <div class="w-36">
          <Logo />
        </div>
        <div class="flex gap-6 justify-center mt-2">
          <NuxtLink  to="/" class="block">
            <img src="/images/google.svg" alt="Download from Play Store" class="w-36" />
          </NuxtLink>
          <NuxtLink to="/" class="block">
            <img src="/images/apple.svg" alt="Download from App Store" class="w-36" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex md:grid gap-6">
        <ButtonsSecondary @clicked="$router.push({path: '/'})">About Us</ButtonsSecondary>
        <ButtonsSecondary @clicked="$router.push({path: '/'})">How It Works</ButtonsSecondary>
        <ButtonsSecondary @clicked="$router.push({path: '/'})">FAQs</ButtonsSecondary>
        <ButtonsSecondary @clicked="$router.push({path: '/'})">Reviews</ButtonsSecondary>
        <ButtonsSecondary @clicked="$router.push({path: '/'})">Contact Us</ButtonsSecondary>
      </div>

      <div class="flex md:grid gap-6 items-center">
        <ButtonsSecondary @clicked="$router.push({path: '/'})" >Privacy Policy</ButtonsSecondary>
        <ButtonsSecondary @clicked="$router.push({path: '/t_and_c'})">Terms and Conditions</ButtonsSecondary>

        <div class="flex gap-4 mt-4">
          <NuxtLink to="/" class="bg-secondary h-10 w-10 grid place-content-center rounded-md">
            <img src="/images/facebook_f.svg" class="w-8 h-8" alt="">
          </NuxtLink>
          <NuxtLink to="/" class="bg-secondary h-10 w-10 grid place-content-center rounded-md">
            <img src="/images/instagram.svg" class="w-8 h-8" alt="">
          </NuxtLink>
          <NuxtLink to="/" class="bg-secondary h-10 w-10 grid place-content-center rounded-md">
            <img src="/images/twitter.svg" class="w-8 h-8" alt="">
          </NuxtLink>
        </div>
      </div>
    </div>
  </Container>
</template>