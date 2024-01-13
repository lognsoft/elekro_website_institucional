<template>
    <main>
        <Banner>
            Contate-nos
        </Banner>
        <section class="py-11">
            <div class="container mx-auto px-2 py-11">
                <TitleSection>Lorem Ipsum</TitleSection>
                <form @submit.prevent="submitContact" class="w-full mt-6 py-5">
                    <div class="wrapper-form-container">
                        <label for="input-name" class="label">nome</label>
                        <div class="container-input">
                            <input class="input-contact" type="text" name="nome" placeholder="Nome" id="input-name"/>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-phone" class="label">telefone</label>
                        <div class="container-input">
                            <input class="input-contact" type="text" name="telefone" placeholder="Telefone" id="input-phone"/>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-email" class="label">email</label>
                        <div class="container-input">
                            <input class="input-contact" type="text" name="email" id="input-email" placeholder="E-mail"/>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-message" class="label">mensagem</label>
                        <div class="container-input">
                            <!-- <input class="input-contact" type="text" name="nome" placeholder="Nome"/> -->
                            <textarea class="input-contact resize-y min-h-60" name="mensagem" id="input-message" placeholder="Mensagem"></textarea>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <div class="label"></div>
                        <div class="container-input">
                            <MyButton class="m-0" tipo="submit" :reverse="false">Enviar</MyButton>
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
        <section class="py-11 bg-slate-500 text-white">
            <div class="container mx-auto px-2 py-11">
                <div class="grid grid-cols-4 gap-6 text-center md:text-start">
                    <div class="col-span-4 md:col-span-1">
                        <h3 class="text-5xl font-extrabold mb-11">Lorem Ipsum</h3>
                        <p class="text-xl font-bold">Lorem ipsum dolor</p>
                    </div>
                    <div class="col-span-4 md:col-span-1">
                        <h3 class="text-5xl font-extrabold mb-11">Lorem Ipsum</h3>
                        <p class="text-xl font-bold">Lorem ipsum dolor</p>
                    </div>
                    <div class="col-span-4 md:col-span-1">
                        <h3 class="text-5xl font-extrabold mb-11">Lorem Ipsum</h3>
                        <p class="text-xl font-bold">Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const submitContact = () => {
    alert("Email enviado");
}
</script>

<style scoped>
.wrapper-form-container{
    @apply grid grid-cols-7 items-start mb-11
}

.input-contact{
    @apply w-full outline-none px-3 py-2
}

.label{
    @apply col-span-7 mb-1 md:mb-0 md:col-span-1 block capitalize font-bold
}
.container-input{
    @apply col-span-7 md:col-span-6 lg:col-span-4
}
</style>