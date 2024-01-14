<template>
    <section class="h-screen max-h-80 md:max-h-96 overflow-hidden bg-black text-white py-11">
        <div class="container mx-auto max-w-screen-2xl h-full flex justify-center md:justify-start items-center px-3">
            <h1 class="animate__animated animate__backInRight text-4xl md:text-6xl lg:text-8xl font-extrabold"><slot/></h1>
        </div>
    </section>
</template>