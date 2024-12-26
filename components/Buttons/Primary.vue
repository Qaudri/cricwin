<template>
  <button 
    @click="$emit('clicked')"
    class="py-3 px-5  font-medium text-base 2xl:text-lg justify-center duration-500 ease-in-out rounded-md " 
    :disabled="loading || disabled" :class="[flexdisplay ? 'flex w-full items-center gap-3' : 'block w-fit', disabled ? 'bg-gray-500 text-gray-300': 'text-white active:bg-primary outline-none bg-secondary hover:bg-primary hover:text-secondary focus:bg-primary']">
    <div class="flex items-center justify-center">
      <div v-if="loading"  class="flex items-center">
        <div class=" mr-2">
          <IconsLoading class="w-7"></IconsLoading>
        </div>
        {{ loadingText }}
      </div>
      <div v-if="!loading">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    flexdisplay: {
      default: false,
      type: Boolean
    },
    standout: {
      default: false,
      type: Boolean
    },
    loading: Boolean,
    color: String,
    disabled: Boolean,
    loadingText: {
      default: "Loading",
      type: String
    },
  },
}
</script>

<style>
</style>