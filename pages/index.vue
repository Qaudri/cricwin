<template>
  <Navbar />
  <header class="header py-24 grid place-content-center text-center">
    <Container>
      <TypographyH1 class="md:w-3/4 lg:w-[55%] mx-auto" color="white">Your Trusted Guide to Top Betting Platforms</TypographyH1>
      <TypographyP color="white">Discover, Compare, and Choose the Perfect Platform for Your Betting Journey.</TypographyP>

      <div class="mt-6 mx-auto">
        <TypographyP color="white">Download the app:</TypographyP>
        <div class="flex gap-6 justify-center mt-2">
          <NuxtLink class="block">
            <img src="/images/google.svg" alt="Download from Play Store" class="w-36" />
          </NuxtLink>
          <NuxtLink class="block">
            <img src="/images/apple.svg" alt="Download from App Store" class="w-36" />
          </NuxtLink>
        </div>

        <TypographyP color="white" class="mt-6">Or get a download link on your mobile</TypographyP>
        <form action="" class="mt-2 lg:w-1/2 mx-auto relative flex items-start justify-end">
          <input type="tel" class="w-full py-3 px-5 border text-sm outline-none border-secondary ring-0 focus:outline-none focus:border-primary active:border-primary rounded-md active:text-primary focus:text-primary text-secondary border-opacity-20 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out bg-white" placeholder="Enter your phone number">
          <div class="w-fit absolute">
            <FormButton>Send me Link</FormButton>
          </div>
        </form>

      </div>
    </Container>


  </header>
</template>
<script>
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 

  export default {
    mounted(){
      AOS.init();
    },
  }
</script>
<style>
.header {
  background: url('/images/header.avif'), #000054ca;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
}
</style>