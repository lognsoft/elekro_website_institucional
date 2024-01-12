<template>
    <main>
        <!-- <ClientOnly> -->
            <Slider/>
        <!-- </ClientOnly> -->
        <!-- destaque -->
        <section id="emphasis">
            <div class="container w-full max-w-screen-2xl mx-auto py-11 px-2">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <div class="px-8 pb-8 lg:p-8 flex justify-center items-center">
                        <img
                            src="https://t.ctcdn.com.br/MAMFrOpUc8jcTCPpiuyAXubD3YM=/640x360/smart/i10363.png" 
                            alt="imagem"
                            srcset="https://t.ctcdn.com.br/MAMFrOpUc8jcTCPpiuyAXubD3YM=/640x360/smart/i10363.png"
                            width="600"
                            height="500"
                            class="bg-gray-200 fluid-image"
                        />
                    </div>
                    <div class="px-8 lg:p-8 flex items-center">
                        <div class="">
                            <h2 class="text-7xl font-extrabold mb-7">Lorem Ipsum</h2>
                            <LinkOne class="text-slate-500" endereco="/">Lorem Ipsum</LinkOne>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end destaque -->
        <!-- features -->
        <section id="features">
            <div class="container w-11/12 max-w-screen-2xl mx-auto py-11 px-2">
                <TitleSection>Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
                    <div class="bg-gray-200 aspect-[1/1]">
                        <img
                            class="w-auto h-full object-cover"
                            src="https://t.ctcdn.com.br/z57ZmpGL39hWSqandHBFkzX2tS4=/1024x576/smart/i480311.png"
                            alt="imagem"
                            srcset="https://t.ctcdn.com.br/z57ZmpGL39hWSqandHBFkzX2tS4=/1024x576/smart/i480311.png"
                            width="600"
                            height="500"
                        />
                    </div>
                    <div class="p-8 bg-slate-500 aspect-[1/1] flex items-center">
                        <div class="w-full text-center text-white">
                            <h3 class="text-5xl font-extrabold mb-9">Lorem Ipsum</h3>
                            <LinkOne class="justify-center" endereco="/">lorem ipsum</LinkOne>
                        </div>
                    </div>
                    <div class="bg-gray-200 aspect-[1/1]">
                        <img
                            class="w-auto h-full object-cover"
                            src="https://noticiaoficial.com/wp-content/uploads/2021/08/Celular-Iphone-apple-1-758x505.png"
                            alt="imagem"
                            srcset="https://noticiaoficial.com/wp-content/uploads/2021/08/Celular-Iphone-apple-1-758x505.png"
                            width="600"
                            height="500"
                        />
                    </div>
                    <div class="bg-gray-200 aspect-[1/1]">
                        <img
                            class="w-auto h-full object-cover"
                            src="https://uploads.metropoles.com/wp-content/uploads/2022/10/06174619/iphone-14-roxo.jpg"
                            alt="imagem"
                            srcset="https://uploads.metropoles.com/wp-content/uploads/2022/10/06174619/iphone-14-roxo.jpg"
                            width="600"
                            height="500"
                        />
                    </div>
                </div>
            </div>
        </section>
        <!-- end features -->
        <!-- advantages -->
        <section id="advantages">
            <div class="container w-11/12 mx-auto py-11 px-2">
                <TitleSection>Lorem Ipsum</TitleSection>
                <div class="grid grid-cols-1 lg:grid-cols-3 grid">
                    <div class="bg-slate-300 lg:order-last lg:col-span-2">
                        <img
                            class="w-full max-h-96 object-cover"
                            src="https://t2.tudocdn.net/667867?w=824&h=494"
                            srcset="https://t2.tudocdn.net/667867?w=824&h=494"
                            alt=""
                        />
                    </div>
                    <div class="flex items-center pt-8 lg:px-11 lg:order-first">
                        <div>
                            <h3 class="text-5xl font-extrabold mb-7">lorem ipsum</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam magnam rem assumenda id expedita sed consectetur sit iure dignissimos eius nulla in perferendis voluptatibus illum voluptates, esse, ipsum soluta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end advantages -->
        <!-- bg-image -->
        <section id="bg-image">
            <div class="bg-image">
                <div class="container-text">
                    <h3 class="text-5xl font-extrabold mb-7">lorem ipsum</h3>
                    <p class="max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius libero minima officia id rem illo tempora quibusdam, officiis temporibus ducimus, voluptate commodi ea odio ipsam autem! Illum, totam unde.</p>
                </div>
            </div>
        </section>
        <!-- end-image -->
        <!-- advantages -->
        <section id="overview">
            <div class="container w-11/12 mx-auto py-11 px-2">
                <div class="grid grid-cols-1 lg:grid-cols-3 grid">
                    <div class="bg-slate-300 lg:order-last lg:col-span-2">
                        <img
                            class="w-full max-h-96 object-cover"
                            src="https://t2.tudocdn.net/667867?w=824&h=494"
                            srcset="https://t2.tudocdn.net/667867?w=824&h=494"
                            alt=""
                        />
                    </div>
                    <div class="flex items-center pt-8 lg:px-11 lg:order-first">
                        <div>
                            <h3 class="text-5xl font-extrabold mb-7">lorem ipsum</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam magnam rem assumenda id expedita sed consectetur sit iure dignissimos eius nulla in perferendis voluptatibus illum voluptates, esse, ipsum soluta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end advantages -->
    </main>
</template>

<style scoped>
    .bg-image{
        background-image: url("https://s.zst.com.br/cms-assets/2022/02/iphone-13.webp");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;    
    }
    .bg-image::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .container-text{
        position: relative;
        z-index: 2;
    }

    .bg-image{
        @apply container w-11/12 mx-auto py-11 px-2
    }

    .container-text{
        @apply flex justify-center flex-col w-full max-w-7xl mx-auto max-h-96 h-screen text-slate-50
    }
</style>