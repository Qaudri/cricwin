<template>
  <p :class="[color==='primary' ? 'text-primary' : color==='white' ? 'text-white' : color === 'secondary' ? 'text-secondary' :'text-neutral-800', small_text ? 'text-sm 2xl:text-base' : 'text-sm md:text-base 2xl:text-lg']" class="font-normal">
    <slot/>
  </p>
</template>
<script>
  export default {
    props: {
      color: String,
      small_text: Boolean
    }
  }
</script>