<template>
    <main>
        <Banner>
            Sobre
        </Banner>

        <section class="bg-image"></section>
        <section class="py-9 bg-black min-h-96 flex items-center">
            <div class="container mx-auto w-full px-2 grid grid-cols-4">
                <div class="col-span-4 lg:col-span-1 pr-2">
                    <TitleSection class="text-white">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-4 lg:col-span-3">
                    <p class="text-xl text-white mb-6">
                        <span class="quote"><IconCSS name="bi:quote"/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>

                    <p class="text-slate-200 text-sm">-nameExample</p>
                </div>
            </div>
        </section>
        <section class="py-9 bg-slate-400 min-h-96 flex items-center">
            <div class="container mx-auto w-full px-2 grid grid-cols-6">
                <div class="col-span-6 lg:col-span-2 pr-2">
                    <TitleSection class="text-white">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-6 lg:col-span-4">
                    <p class="text-xl text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>
                </div>
            </div>
        </section>
        <section class="py-9">
            <div class="container mx-auto w-full px-2"></div>
        </section>
    </main>
</template>

<script setup>
useSeoMeta({
    title: "About"
})
</script>

<style scoped>
.bg-image{
    @apply py-9 h-screen
}

.quote{
    @apply text-amber-600 text-3xl relative
}

.quote{
    top: -5px;
}
.bg-image{
    max-height: 26rem !important;
    background-image: url("https://ogimg.infoglobo.com.br/in/5727496-6f1-03e/FT1086A/2012-539074198-20120725102505273rts.jpg_20120730.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

@media screen and (min-width: 640px){
    .bg-image{
        max-height: 30rem !important;
    }
}
@media screen and (min-width: 768px){
    .bg-image{
        max-height: 30rem !important;
    }
}
@media screen and (min-width: 1024px){
    .bg-image{
        max-height: 35rem !important;
    }
}
@media screen and (min-width: 1280px){
    .bg-image{
        max-height: 40rem !important;
    }
}
@media screen and (min-width: 1536px){
    .bg-image{
        max-height: 45rem !important; 
    }
}
</style>