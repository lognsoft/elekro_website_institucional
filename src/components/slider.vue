
<template>
    <section class="slider text-slate-50">
        <div class="w-full lg:basis-3/5 bg-black py-11 flex items-center px-9">
            <h1 class="text-8xl font-extrabold">Lorem<br>Ipsum<br>Dolor</h1>
        </div>
        <div class="basis-2/5 bg-slate-500 hidden lg:block">
            <!-- <h1>Hello, world</h1> -->
        </div>
    </section>
</template>

<style scoped>
.slider{
    /* height: 100vh; */
    min-height: 35rem;
}

/* classes tailwind */
.slider{
    @apply bg-slate-700 flex h-screen md:h-auto
}
</style>