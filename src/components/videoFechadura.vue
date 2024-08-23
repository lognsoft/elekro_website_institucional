<template>
  <div class="relative">
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
    <button v-if="isPaused" @click="togglePlay" class="absolute inset-0 flex items-center justify-center">
      <img src="/video/videoplay.png" alt="Play">
    </button>
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