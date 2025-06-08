<template>
  <div class="relative z-10">
    <video 
      ref="videoPlayer"
      class="w-full lg:h-screen h-auto object-cover"
      preload="auto"
      :poster="poster"
      @play="hidePlayButton"
      @pause="showPlayButton"
      @click="togglePlay"
    >
      <source :src="midia" type="video/mp4">
    </video>
    
    <!-- Botão de Play Personalizado -->
    <button v-if="isPaused" @click="togglePlay" class="absolute inset-0 flex items-center justify-center">
      <img src="/video/videoplay.png" alt="Play">
    </button>
  </div>
</template>

<script setup lang="ts">
const isPaused = ref<boolean>(true)
const videoPlayer = ref<HTMLVideoElement | null>(null)
const midia = ref<string>(`/video/fechadura-elekro.mp4`)
const poster = ref<string>(`/images/elekro-one/05Desktop_VideoFechadura.png`)


function togglePlay(): void {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play()
    } else {
      videoPlayer.value.pause()
    }
  }
}

function hidePlayButton(): void {
  isPaused.value = false
}

function showPlayButton(): void {
  isPaused.value = true
}

onMounted(() => {
  const mobile:string = `/video/fechadura-elekro-responsive.mp4`;
  const posterUrl:string = `/images/thumbnail.jpg`

  const wind = window.innerWidth
  if(wind <= 748){
    midia.value = mobile
    poster.value = posterUrl
    nextTick(() => {
      videoPlayer.value && videoPlayer.value.load()
    })
  }
})
</script>
