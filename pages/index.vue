<template>
  <header data-aos="zoom-in" class="header py-24 grid place-content-center text-center">
    <Container>
      <TypographyH1 
        data-aos="fade-down"
        data-aos-delay="500"
        class="md:w-3/4 lg:w-[55%] mx-auto" color="white">
        Your Trusted Guide to Top Betting Platforms
      </TypographyH1>
      <TypographyP 
        data-aos="fade-down"
        data-aos-delay="500" 
        color="white">
        Discover, Compare, and Choose the Perfect Platform for Your Betting Journey.
      </TypographyP>

      <div 
        data-aos="fade-up"
        data-aos-delay="500"
        class="mt-6 mx-auto">
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

  <Container class="grid lg:grid-cols-2 py-24 items-center gap-6 lg:gap-10">
    <div data-aos="fade-up-right">
      <TypographyH2 color="secondary">Welcome to Cricwinn</TypographyH2>
      <TypographyP>Your Gateway to the Best Betting Platforms</TypographyP>
      <hr class="w-20 border-neutral-800" />

      <TypographyP class="mt-3">At Cricwinn, we understand that finding the right betting platform is critical to a great betting experience. As a trusted curator of top betting platforms, we provide betting enthusiasts like you with a range of carefully selected options. Our goal is to simplify the process of finding a platform that fits your needs, whether you're a beginner or a seasoned bettor.
        <br><br>
      Explore a world of trusted, high-quality platforms designed to cater to your preferences in terms of user interface, features, sports markets, and more.
      </TypographyP>
    </div>
    <video data-aos="fade-up-left" src="/intro.mp4" controls></video>
  </Container>

  <Container class="grid lg:grid-cols-2 py-24 items-center gap-6 lg:gap-10">
    <img data-aos="fade-right" src="/why.webp" class="object-cover hidden lg:block h-full w-full" alt="">
    <img data-aos="zoom-in" src="/why.webp" class="object-cover block lg:hidden h-64 w-full" alt="">
    <div class="grid gap-6">
      <div data-aos="fade-left">
        <TypographyH2 color="primary">Why Choose Cricwinn?</TypographyH2>
        <TypographyP>We offer a professional, user-centric approach that ensures your betting experience is not only seamless but also secure and enjoyable. Here's why thousands of betting enthusiasts trust us:
        </TypographyP>
      </div>
      <div data-aos="fade-left" data-aos-delay="200" class="p-5 border rounded-md border-primary">
        <div class="flex gap-4 items-center">
          <img src="/images/platform.svg" class="w-10 h-10" alt="">
          <TypographyH3 color="primary">Tailored Platform Selection</TypographyH3>
        </div>
        <TypographyP class="mt-2">Each bettor is unique, which is why we bring you a variety of betting platforms with different user interfaces, betting options, and features. Whether you're looking for an easy-to-navigate interface, advanced features, or a specific sports market, you can select the platform that suits you best.
        </TypographyP>
      </div>
      <div data-aos="fade-left" data-aos-delay="200" class="p-5 border rounded-md border-primary">
        <div class="flex gap-4 items-center">
          <img src="/images/support.svg" class="w-10 h-10" alt="">
          <TypographyH3 color="primary">24/7 Dedicated Support</TypographyH3>
        </div>
        <TypographyP class="mt-2">We understand that issues can arise at any time. That's why our platforms offer round-the-clock support to assist you with any concerns. From account management to resolving transaction queries, our dedicated customer support teams are here for you whenever you need help.
        </TypographyP>
      </div>
    </div>
    <div data-aos="fade-right" data-aos-delay="200" class="p-5 border rounded-md border-primary">
      <div class="flex gap-4 items-center">
        <img src="/images/clock.svg" class="w-10 h-10" alt="">
        <TypographyH3 color="primary">Instant Deposits and Withdrawals </TypographyH3>
      </div>
      <TypographyP class="mt-2">We understand that issues can arise at any time. That's why our platforms offer round-the-clock support to assist you with any concerns. From account management to resolving transaction queries, our dedicated customer support teams are here for you whenever you need help.
      </TypographyP>
    </div>
    <div data-aos="fade-left" data-aos-delay="200" class="p-5 border rounded-md border-primary">
      <div class="flex gap-4 items-center">
        <img src="/images/security.svg" class="w-10 h-10" alt="">
        <TypographyH3 color="primary">Security & Fair Play        </TypographyH3>
      </div>
      <TypographyP class="mt-2">Your security is our priority. All the betting sites we recommend are licensed, regulated, and fully compliant with industry standards. Enjoy peace of mind knowing that your personal information, as well as your deposits and withdrawals, are protected with the latest encryption technology.
      </TypographyP>
    </div>
    <div data-aos="fade-right" data-aos-delay="200" class="p-5 border rounded-md border-primary">
      <div class="flex gap-4 items-center">
        <img src="/images/payment.svg" class="w-10 h-10" alt="">
        <TypographyH3 color="primary">Wide Range of Payment Methods</TypographyH3>
      </div>
      <TypographyP class="mt-2">We understand that everyone has different preferences when it comes to payments. Our recommended platforms support a wide range of payment options, including credit/debit cards, e-wallets, cryptocurrencies, and bank transfers, ensuring you can deposit and withdraw your funds with ease.
      </TypographyP>
    </div>
    <div data-aos="fade-up" data-aos-delay="500">
      <TypographyH3 color="primary">Explore the Best Betting Platforms</TypographyH3>
      <TypographyP class="mt-2">We believe in providing you with a curated selection of platforms that offer the best user experience, a wide variety of betting options, and top-tier customer service. Here, you can browse through our listed platforms and find the one that suits your betting style.
      </TypographyP>
    </div>
  </Container>

  <Carousel data-aos="slide-left" />

  <Container class="py-24">
    <TypographyH2 data-aos="fade-down" class="text-center" color="secondary">Our Top Betting Platforms</TypographyH2>
    <TypographyP data-aos="fade-down" data-aos-delay="100" class="text-center md:w-3/4 lg:w-2/3 mx-auto">Each platform listed below has been vetted for reliability, security, and the quality of the betting experience it offers. Whether you prefer sports betting, casino games, or live betting, you'll find a platform that matches your preferences.
    </TypographyP>

    <table data-aos="flip-up" class="table-auto border-collapse mt-6 w-full overflow-x-scroll">
      <thead>
        <tr>
          <th>Platform Name</th>
          <th>User Interface</th>
          <th>Sports Markets</th>
          <th>Bonuses</th>
          <th>Payment Methods</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BetMaster</td>
          <td>Sleek, User-Friendly</td>
          <td>Football, Tennis, Basketball, eSports</td>
          <td>100% Welcome Bonus</td>
          <td>Credit Cards, e-Wallets, Cryptocurrencies</td>
          <td>Live Betting, Cash Out, Mobile App</td>
        </tr>
        <tr>
          <td>FastBet</td>
          <td>Simple, Minimalist</td>
          <td>All Major Sports, Casino</td>
          <td>Free Bet Offers</td>
          <td>Bank Transfers, e-Wallets</td>
          <td>In-Play Betting, Live Streaming</td>
        </tr>
        <tr>
          <td>WinPro</td>
          <td>Advanced, Customizable</td>
          <td>Football, Tennis, Horse Racing</td>
          <td>Loyalty Program, Free Spins</td>
          <td>Credit Cards, PayPal, Bitcoin</td>
          <td>Live Casino, VIP Program</td>
        </tr>
        <tr>
          <td>QuickWin</td>
          <td>Clean, Modern</td>
          <td>Football, Golf, Boxing, Poker</td>
          <td>Risk-Free Bet</td>
          <td>Debit Cards, e-Wallets, Bank Transfers</td>
          <td>Multi-Currency Support, Fast Withdrawals</td>
        </tr>
      </tbody>
    </table>

    <TypographyP class="mt-2">Each platform in our list is hand-picked based on its reputation, ease of use, and the quality of service it provides. Click on any platform to learn more about its features, bonuses, and why it might be the right choice for you.
    </TypographyP>
  </Container>

  <section data-aos="zoom-in" class="bg-primary">
    <Container class="grid lg:grid-cols-2 py-24 items-center gap-14">
      <img data-aos="fade-up-right" data-aos-delay="200" src="/images/betting.png" alt="">
      <div>
        <TypographyH2 data-aos="fade-left" data-aos-delay="200" color="secondary">How It Works</TypographyH2>
        <TypographyP data-aos="fade-left" data-aos-delay="100">Getting started with the perfect betting platform is easy. Here's how it works:</TypographyP>

        <div class="flex gap-12 text-secondary mt-6">
          <div class="flex relative justify-center">
            <div data-aos="fade-left" class="bg-secondary w-0.5 h-full -mr-5"></div>
            <ul class="flex flex-col gap-6 justify-around h-full w-full">
              <li data-aos="fade-left" data-aos-delay="100" class="flex gap-6">
                <div class="bg-secondary heading min-w-10 h-10 w-10 rounded-full grid place-content-center text-white text-xl">01</div>
                <div>
                  <h4 class="heading text-2xl uppercase">Browse Our Selection</h4>
                  <TypographyP>Take a look at our carefully curated list of betting platforms. Compare the options based on your preferences, including sports markets, UI design, payment methods, and more.
                  </TypographyP>
                </div>
              </li>
              <li data-aos="fade-left" data-aos-delay="100" class="flex gap-6">
                <div class="bg-secondary heading min-w-10 w-10 h-10 rounded-full grid place-content-center text-white text-xl">02</div>
                <div>
                  <h4 class="heading text-2xl uppercase">Select Your Ideal Platform</h4>
                  <TypographyP>Once you've found a platform that suits your style, simply click on it to learn more. You can find detailed information about its features, user interface, bonuses, and supported payment methods.
                  </TypographyP>
                </div>
              </li>
              <li data-aos="fade-left" data-aos-delay="100" class="flex gap-6">
                <div class="bg-secondary heading min-w-10 w-10 h-10 rounded-full grid place-content-center text-white text-xl">03</div>
                <div>
                  <h4 class="heading text-2xl uppercase">Sign Up & Bet</h4>
                  <TypographyP>After selecting your platform, head to the site, create an account, and start betting. Take advantage of generous bonuses and explore all the betting options available.
                  </TypographyP>
                </div>
              </li>
              <li data-aos="fade-left" data-aos-delay="100" class="flex gap-6">
                <div class="bg-secondary heading min-w-10 w-10 h-10 rounded-full grid place-content-center text-white text-xl">04</div>
                <div>
                  <h4 class="heading text-2xl uppercase">Enjoy Fast & Secure Transactions</h4>
                  <TypographyP>Deposit funds instantly using your preferred method and enjoy smooth withdrawals with minimal waiting time. Whether you’re placing a bet on a major football game or enjoying a live casino experience, everything is handled securely.
                  </TypographyP>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section data-aos="zoom-in" class="bg-secondary">
    <Container class="py-24 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
      <div  data-aos="fade-up-right" data-aos-delay="200">
        <TypographyH2 color="white">Bet Smarter. <span class="text-primary heading">Bet Safer.</span> </TypographyH2>
        <TypographyP color="white" class="mt-2">At Cricwinn, we believe that betting should be enjoyable and stress-free. That's why we focus on bringing you reliable platforms with excellent customer support, fast transactions, and top-notch security. Whatever your betting preferences are, we're confident you'll find a platform that suits your needs.
        </TypographyP>
      </div>
      <img src="/images/gambling.png"  data-aos="fade-up-left" data-aos-delay="200" alt="">
    </Container>
  </section>

  <Container class="py-24 text-center"  data-aos="fade">
    <TypographyH2>Need Help? We're Here 24/7</TypographyH2>
    <TypographyP class="lg:w-3/4 mx-auto">Have questions or need assistance? Our team is available 24/7 to help you navigate through the platform options or resolve any issues you might encounter. Contact us via live chat, email, or phone, and we'll be happy to assist you.</TypographyP>
  </Container>

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

th {
  text-align: left;
  background-color: #000054;
  color: white;
}

th, td {
  border: 1px solid #e5e5e5;
  padding: 5px 10px;
}

tr:nth-child(even){
  background-color: #d6d6d6;
}
</style>