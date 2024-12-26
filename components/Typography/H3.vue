<template>
  <h3 :class="color==='primary' ? 'text-primary' : color==='white' ? 'text-white' : color === 'secondary' ? 'text-secondary' :'text-neutral-800'" class="heading uppercase text-2xl md:text-3xl lg:text-4xl"><slot/></h3>
</template>
<script>
  export default {
    props: {
      color: String,
    }
  }
</script>