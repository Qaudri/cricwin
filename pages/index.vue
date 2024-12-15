<template>
  <Container>
  <Menubar :model="items">
    <template #start>
      <Logo class="w-10"/>
    </template>
    <template #end>
      <div class="md:flex gap-6 items-center hidden">
        <Button severity="secondary" as="router-link" to="/" label="FAQs" variant="Link" />
        <Button severity="secondary" label="Terms & Conditions" variant="Link" />
        <Button label="Whatsapp" variant="Link" />
      </div>    
    </template>
  </Menubar>
  </Container>

  <Container class="grid place-content-center py-20">
    <h1 class="oswald uppercase text-4xl lg:text-6xl text-center">SPORTS <br> KA <br>STOCK MARKET</h1>
    <p class="text-center">Join and Experience the Thrill</p>
    <div class="flex gap-6 justify-center mt-6">
      <NuxtLink>
        <img src="/public/google.svg" class="w-32" alt="">
      </NuxtLink>
      <NuxtLink>
        <img src="/public/apple.svg" class="w-32" alt="">
      </NuxtLink>
    </div>
    <div>
      <Divider class="my-4" align="center" type="solid"><b>Or</b></Divider>
      <InputGroup>
        <InputText placeholder="Enter your number" />
        <InputGroupAddon>
          <Button label="Send me link" @click="toggle" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  </Container>

  <Divider></Divider>

  <Container class="grid lg:grid-cols-2 gap-6 items-center py-20">
    <div>
      <h2 class="oswald uppercase text-2xl lg:text-4xl">Welcome To Cricwin</h2>
      <p class="font-normal">Cricwin is India's first sports stock exchange.
        <br>
        Now getting high returns on your money has never this easy. First in India fantasy concept, which merges sports and trading along the lines of how a stock exchange operates.
        <br>
        Use your knowledge in sports and earn real money.
      </p>
    </div>
    <video src="/public/welcome.mp4" controls>
      <source src="/public/welcome.mp4" type="video/mp4">
    </video>
  </Container>

  <Container class="pb-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-stretch">
    <li class="list-none">
      <h2 class="oswald uppercase text-2xl lg:text-4xl grid place-content-center">Our features</h2>
      <p>Cricwin - India's First Sports Stock Exchange.</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon1.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">User Friendly Interface</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon2.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">No Team Creation      </p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon3.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">Buy/Sell      </p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon4.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">Multibagger</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon5.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">Multiple Sports</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon6.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">Leaderboard</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon7.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">Dynamic Pricing</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon8.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">24/7 Customer Support</p>
    </li>
    <li class="list-none border rounded-md border-[#3f3f46] p-2 grid place-content-center">
      <img src="/public/features_icon9.svg" alt="" class="w-16 h-16 mx-auto" />
      <p class="text-center mt-2">Instant Withdrawal</p>
    </li>
  </Container>

  <section class="bg-white pt-20">
    <h2 class="oswald uppercase text-2xl lg:text-4xl grid place-content-center text-secondary">How to Play</h2>
    <p>Cricwin is a unique gaming fantasy platform where users can trade/invest in the virtual stocks of their favourite players.</p>
    <Container class="mt-6 grid lg:grid-cols-2 gap-6 items-stretch">
      <img src="/public/howto_play_play.png" width="100%" alt="">
      <ul class="list-none">
        <li class="bg-secondary p-2 rounded-md">

        </li>
      </ul>
    </Container>
  </section>

</template>
<script>
  import Menubar from 'primevue/menubar';
  import Button from 'primevue/button';
  import Divider from 'primevue/divider';
  import InputGroup from 'primevue/inputgroup';
  import InputGroupAddon from 'primevue/inputgroupaddon';

  export default {
    components: {
      Menubar, Button, Divider, InputGroup, InputGroupAddon
    }
  }
</script>
<style>
/* .gradient-bg {
  background: radial-gradient(transparent, gray);
} */
</style>