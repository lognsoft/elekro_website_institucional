<script setup lang="ts">
    const HTMLVideo:Ref<HTMLVideoElement | null> = ref(null);

    const playVideo:Ref<boolean> = ref(false);
    
    const initVideo = ():void => {
        if(HTMLVideo.value){
            !playVideo.value ? HTMLVideo.value.play() : HTMLVideo.value.pause()
            playVideo.value = !playVideo.value
        }
    }

    const endVideo = ():any => playVideo.value = !playVideo.value

</script>

<template>
    <div class="container-video" @click="initVideo">
        <video ref="HTMLVideo" @ended="endVideo" poster="/images/thumbnail.jpg">
            <source src="/video/mobile-video.mp4"/>
        </video>
        <div class="play-button" v-show="playVideo === false">
            <button>
                <img src="/video/videoplay.png" alt="Play">
            </button>
            <h3>Explore</h3>
        </div>
    </div>
</template>

<style scoped>
    .container-video{
        @apply
        md:hidden
        relative
        w-full
    }

    /* .container-video video{
        @apply
    } */

    .container-video .play-button{
        @apply
        absolute
        top-[50%]
        left-[50%]
        translate-x-[-50%]
        translate-y-[-50%]
        z-10
        text-white
        w-full
        flex
        flex-col
        justify-between
        items-center
        gap-y-3
    }
</style>