<template>
    <main>
        <Head>
            <Title>Contato</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Contato"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Contato"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
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
                            <input class="input-contact" v-model="formulario.name" type="text" name="nome" placeholder="Nome" id="input-name" required/>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-phone" class="label">telefone</label>
                        <div class="container-input">
                            <input class="input-contact" v-model="formulario.telefone" maxlength="15" type="text" name="telefone" placeholder="(00) 00000-0000" id="input-phone" required/>
                        </div>
                    </div>
                    <div class="wrapper-form-container">
                        <label for="input-email" class="label">email</label>
                        <div class="container-input">
                            <input class="input-contact" v-model="formulario.email" type="email" name="email" id="input-email" placeholder="E-mail" required/>
                        </div>
                    </div>
                    <div class="wrapper-form-container-t">
                        <label for="input-message" class="label">mensagem</label>
                        <div class="container-input">
                            <!-- <input class="input-contact" type="text" name="nome" placeholder="Nome"/> -->
                            <textarea class="input-contact resize-y min-h-60" v-model="formulario.message" name="mensagem" id="input-message" placeholder="Mensagem" required></textarea>
                        </div>
                    </div>
                    <div class="wrapper-form-container-t">
                        <div class="label"></div>
                        <div class="container-input text-center md:text-start">
                            <MyButton class="my-0 mx-0" tipo="submit" :reverse="false">Enviar</MyButton>
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

<script setup lang="ts">
interface Form{
    [name:string]:string;
    telefone:string;
    email:string;
    message:string;
}
const formulario = ref<Form>({
    'name':'',
    'telefone':'',
    'email':'',
    'message':''
});
const submitContact = () => {
    let form:Form = formulario.value;
    for(const val in form){
        console.log(form[val]);
    }
}
</script>

<style scoped>
.wrapper-form-container{
    @apply grid grid-cols-7 items-start mb-11
}
.wrapper-form-container-t{
    @apply grid grid-cols-7 items-start mb-3
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