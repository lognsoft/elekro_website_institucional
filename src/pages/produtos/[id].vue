<template>
    <main>
        <Banner>
            Produto
        </Banner>
        <section class="py-11">
            <div class="container w-12/12 md:w-11/12 mx-auto py-11 px-2">
                <h3 class="text-center text-gray-400 font-bold mb-6">Lorem Ipsum</h3>
                <TitleSection class="text-center mb-11 animate__animated animate__fadeInDown">Lorem Ipsum</TitleSection>
                <figure>
                    <img
                        src="/assets/images/de-lado-prateada.jpeg"
                        srcset="/assets/images/de-lado-prateada.jpeg"
                        alt=""
                        width="907"
                        height="472"
                        class="img-fluid inline-bloc mx-auto"
                    />
                </figure>
            </div>
        </section>
        <section class="py-11">
            <div id="after-clip" class="relative text-white">
                <div class="container min-h-96 relative w-12/12 md:w-11/12 mx-auto py-11 px-2 z-10 flex items-center">
                    <div class="w-full">
                        <h3 class="text-center text-gray-400 font-bold mb-6">Lorem Ipsum</h3>
                        <TitleSection class="text-center mb-11">Lorem Ipsum</TitleSection>
                        <p class="text-center max-w-md mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque maxime dolores corrupti maiores nemo necessitatibus!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-11">
            <div class="conatiner mx-auto w-12/12 md:-11/12 py-11 px-2">
                <h3 class="text-center text-gray-400 font-bold mb-6">Lorem Ipsum</h3>
                <TitleSection class="text-center mb-11">Lorem Ipsum</TitleSection>
                <p class="text-center max-w-md mx-auto mb-11">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque maxime dolores corrupti maiores nemo necessitatibus!</p>
                <figure>
                    <img
                        src="/assets/images/de-lado-preta.jpeg"
                        srcset="/assets/images/de-lado-preta.jpeg"
                        alt=""
                        width="907"
                        height="472"
                        class="img-fluid inline-bloc mx-auto"
                    />
                </figure>
            </div>
        </section>
    </main>
</template>

<style scoped>
.img-fluid{
    width: 100%;
    height: auto;
    max-width: 70rem;
}

#after-clip::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: black; */
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%);
}

#after-clip::after{
    @apply z-0 bg-gradient-to-r from-slate-500 to-black
}
</style>