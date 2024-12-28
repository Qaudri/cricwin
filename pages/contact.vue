<template>
  <Container class="py-24 grid lg:grid-cols-2 gap-6 items-center">
    <div data-aos="fade-right">
      <TypographyH1>We're Here to Help
      </TypographyH1>
      <TypographyP>If you have any questions, concerns, or need support, feel free to contact us. We're always happy to assist you.</TypographyP>

      <hr class="w-20 border-neutral-800">
      <TypographyH2 class="mt-6">Ways to Reach Us</TypographyH2>
      <ul class="list-disc list-inside">
        <li>Live Chat: Available 24/7 for immediate assistance.</li>
        <li>Phone: Reach us at [phone number].</li>
        <li>Social Media: Follow us on [list of social media platforms] for updates and promotions.
        </li>
      </ul>
    </div>
    <form data-aos="fade-up-left" data-aos-delay="500" action="" class="grid gap-6">
      <FormInput label="Your Name" placeholder="Enter your full name" type="text" />
      <FormInput label="Email Address" placeholder="Enter your email address" type="email" />
      <FormTextarea label="Message" placeholder="Send us a message" />
      <FormButton>Send Message</FormButton>
    </form>
  </Container>
</template>