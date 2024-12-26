<template>
  <h1 :class="color==='primary' ? 'text-primary' : color==='white' ? 'text-white' : color === 'secondary' ? 'text-secondary' :'text-neutral-800'" class="text-5xl md:text-6xl xl:text-7xl heading uppercase"><slot/></h1>
</template>
<script>
  export default {
    props: {
      color: String
    }
  }
</script>