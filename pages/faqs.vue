<template>
  <header class="background py-24" data-aos="zoom-in">
    <Container>
      <TypographyH1  data-aos="zoom-in" data-aos-delay="500" color="white" class="text-center">
        Frequently Asked Questions
      </TypographyH1>
    </Container>

  </header>
  <Container class="py-24">
    <div class="lg:w-1/2 mx-auto md:w-3/4">
      <Accordion class="grid gap-6 text-neutral-800">
      <AccordionItem data-aos="fade-right" 
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          How do I choose the best betting platform?
        </template>
        <template #accordion-content>
          Look for factors like ease of use, available betting markets, bonuses, payment methods, and customer support. Our platform reviews can help guide your decision.
        </template>
      </AccordionItem>
      <AccordionItem  data-aos="fade-right" data-aos-delay="200"
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          Are the betting platforms safe to use?
        </template>
        <template #accordion-content>
          Yes. All platforms we recommend are licensed, regulated, and use industry-standard encryption methods to protect your personal and financial information.
        </template>
      </AccordionItem>
      <AccordionItem  data-aos="fade-right"  data-aos-delay="200"
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          Can I bet on mobile?
        </template>
        <template #accordion-content>
          Most of our recommended platforms offer mobile-friendly sites or apps. You can enjoy betting on the go with a smooth, responsive mobile experience.
        </template>
      </AccordionItem>
      <AccordionItem  data-aos="fade-right"  data-aos-delay="200"
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          How can I deposit funds into my betting account?
        </template>
        <template #accordion-content>
          Our featured platforms support a variety of deposit methods, including credit cards, e-wallets (PayPal, Skrill), bank transfers, and even cryptocurrencies like Bitcoin.
        </template>
      </AccordionItem>
      <AccordionItem  data-aos="fade-right"  data-aos-delay="200"
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          How long does it take to withdraw winnings?
        </template>
        <template #accordion-content>
          Withdrawal times vary by platform and payment method. However, our recommended platforms offer fast withdrawal options, often within 24 hours.
        </template>
      </AccordionItem>
      <AccordionItem  data-aos="fade-right"  data-aos-delay="200"
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          Is there customer support available?
        </template>
        <template #accordion-content>
          Yes. All of the platforms we recommend provide customer support, typically available via live chat, email, or phone.
        </template>
      </AccordionItem>
      <AccordionItem  data-aos="fade-right"  data-aos-delay="200"
        container_class="border border-neutral-800" 
        trigger_class="px-4 py-2 font-bold text-secondary" 
        content_class="px-4 py-2 border-t border-neutral-800">
        <template #accordion-trigger >
          What should I do if I have a problem with my account?
        </template>
        <template #accordion-content>
          If you face any issues, contact the platform's support team directly. If you need help, feel free to reach out to us; we're always here to assist.
        </template>
      </AccordionItem>
    </Accordion>
    </div>

  </Container>
</template>
<style>
.background {
  background: url('/images/head.jpg');
  background-size: cover;
  background-position: center;
}
</style>