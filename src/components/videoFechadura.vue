<template>
  <div class="relative z-10">
    <video 
      ref="videoPlayer"
      class="w-full lg:h-screen h-auto object-cover"
      preload="auto"
      poster="/images/elekro-one/05Desktop_VideoFechadura.png"
      @play="hidePlayButton"
      @pause="showPlayButton"
      @click="togglePlay"
    >
      <source src="/video/fechadura-elekro.mp4" type="video/mp4">
    </video>
    
    <!-- Botão de Play Personalizado -->
    <div v-if="isPaused" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-y-3 text-white">
      <button @click="togglePlay" class="flex items-center justify-center">
        <img src="/video/videoplay.png" alt="Play">
      </button>
      <h3>Explore</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPaused: true
    };
  },
  methods: {
    togglePlay() {
      const videoPlayer = this.$refs.videoPlayer;
      
      if (videoPlayer.paused) {
        videoPlayer.play();
      } else {
        videoPlayer.pause();
      }
    },
    hidePlayButton() {
      this.isPaused = false;
    },
    showPlayButton() {
      this.isPaused = true;
    }
  }
}
</script>

<style scoped>
/* Adicione aqui estilos personalizados, se necessário */
</style>
