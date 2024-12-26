<template>
  <NuxtPage />
  <div id="cursor"></div>
    <div id="trail-container">
      <!-- Trail elements will be dynamically generated -->
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.heading {
  font-family: "BoldyCondensed", sans-serif;
}

* {
  font-family: "Poppins", sans-serif;
  font-style: normal;
}

@font-face {
  font-family: 'BoldyCondensed'; /* Custom name for the font */
  src: url('/fonts/boldy-condensed.woff2') format('woff2'),
       url('/fonts/boldy-condensed.woff') format('woff'),
       url('/fonts/boldy-condensed.otf') format('opentype'); /* Path to the font file */
  font-weight: normal; /* Adjust weight if needed */
  font-style: normal; /* Adjust style if needed */
}

/* body {
  cursor: url('/favicon.svg'), auto;
} */

#trail-container .trail {
  width: 20px;
  height: 20px;
  background: url('/favicon.svg');
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  opacity: 0;
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<!-- <script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  const cursor = document.getElementById('cursor');
  const trailContainer = document.getElementById('trail-container');

  const moveCursor = (e) => {
    // Move the main cursor
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Create a trail element
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Add the trail element to the container
    trailContainer.appendChild(trail);

    // Remove the trail element after the animation ends
    trail.addEventListener('animationend', () => {
      trail.remove();
    });
  };

  document.addEventListener('mousemove', moveCursor);

  // Cleanup the event listener
  onUnmounted(() => {
    document.removeEventListener('mousemove', moveCursor);
  });
});
</script> -->
