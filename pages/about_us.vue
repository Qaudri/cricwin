<template>
  <section data-aos="zoom-in" class="bg">
    <Container class="py-24" data-aos="fade-left" data-aos-delay="500">
      <div class="lg:w-1/2">
        <TypographyH1 color="white">Our Mission</TypographyH1>
        <TypographyP color="white">At Cricwinn, we are committed to providing betting enthusiasts with a curated selection of the best online betting platforms. Our mission is simple: to help you find the right platform that fits your betting style, preferences, and goals. Whether you’re a seasoned bettor or a newcomer, we believe in empowering you with the information and tools to make informed decisions.
        </TypographyP>
      </div>

    </Container>
  </section>
  <Container class="py-24 grid lg:grid-cols-2 gap-6 lg:gap-10">
    <div data-aos="zoom-in" class="">
      <TypographyH2>Our Story</TypographyH2>
      <TypographyP>Born out of a passion for online betting, Cricwinn was created with the vision of simplifying the search for the perfect betting experience. With years of experience in the industry, our team has scoured the market to hand-pick the most reliable and user-friendly betting platforms.
        <br>
        We value trust, transparency, and customer satisfaction, which is why we provide you with unbiased, honest information. Our goal is to help you have a smooth, enjoyable, and secure betting experience, every time.
      </TypographyP>
    </div>
    <div data-aos="zoom-in" class="">
      <TypographyH2>Why Trust Us?
      </TypographyH2>
      <ul class="list-inside list-disc">
        <li>
          Expert Curated Selection: We thoroughly vet each platform for security, customer service, and overall experience.
        </li>
        <li>
          Unbiased Reviews: Our reviews are impartial, helping you make an informed choice without any hidden agendas.
        </li>
        <li>Dedicated Support: We stand by our platforms and are always here to assist you with any questions or concerns.</li>
      </ul>
    </div>
  </Container>
</template>
<style>
.bg {
  background: url('/images/about.jpg'), #000054b0 ;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: right;
}

@media (min-width: 1024px) {

  .bg {
  background: url('/images/about.jpg'), linear-gradient(to right, #000054b0, transparent) ;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: right;
}
}
</style>