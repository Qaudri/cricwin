<template>
  <section data-aos="zoom-in" class="bg">
    <Container class="py-24" data-aos="fade-left" data-aos-delay="500">
      <div class="lg:w-1/2">
        <TypographyH1 color="white">Betting Tips, Strategies, and News</TypographyH1>
        <TypographyP color="white">Stay informed and improve your betting skills with our latest articles.
        </TypographyP>
      </div>
    </Container>
  </section>
  <Container class="py-24 grid lg:grid-cols-2 gap-6">
    <div data-aos="fade-right"  class="border border-neutral p-4 rounded-md">
      <TypographyH3>
        How to Choose the Best Betting Platform for Your Style
      </TypographyH3>
      <TypographyP>
        A comprehensive guide to picking the right platform based on your preferences.
      </TypographyP>
    </div>
    <div data-aos="fade-left" data-aos-delay="200" class="border border-neutral p-4 rounded-md">
      <TypographyH3>
        Maximize Your Bonuses: A Guide to Free Bets and Promotions
      </TypographyH3>
      <TypographyP>
        Learn how to take full advantage of platform bonuses to boost your bankroll.
      </TypographyP>
    </div>
    <div data-aos="fade-right" class="border border-neutral p-4 rounded-md">
      <TypographyH3>
        Top 5 Betting Strategies for Beginners
      </TypographyH3>
      <TypographyP>
        Key strategies that can help beginners make smarter bets and minimize losses.
      </TypographyP>
    </div>
    <div data-aos="fade-left" data-aos-delay="200" class="border border-neutral p-4 rounded-md">
      <TypographyH3>
        The Future of Online Betting: Trends to Watch in 2024
      </TypographyH3>
      <TypographyP>
        Explore upcoming trends in the betting industry, including the rise of mobile betting, cryptocurrency payments, and more.
      </TypographyP>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" class="border border-neutral p-4 rounded-md">
      <TypographyH3>
        How to Bet Responsibly: Managing Your Bankroll
      </TypographyH3>
      <TypographyP>
        Tips on setting betting limits and managing your bankroll to ensure a safe and enjoyable experience.
      </TypographyP>
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