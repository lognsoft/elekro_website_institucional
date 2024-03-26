<template>
    <div>
        <div class="translate_el">
            <Icon name="icon-park-outline:earth"/>
            <div>
                <span @click="changeLanguage('pt')" class="btn-translate">Português(BR)</span> e <span @click="changeLanguage('en')" class="btn-translate">Inglês</span>
            </div>
        </div>
        <!-- <div class="w-full" id="google_translate_element"></div> -->
    </div>
</template>

<script setup>

    onMounted(async () => {
        initGoogleTranslate()
    })

    function initGoogleTranslate(){
        new google.translate.TranslateElement({pageLanguage: 'pt', includedLanguages: 'en,pt', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, "google_translate_element");
    }
    function changeLanguage(lang){
        // const select = document.querySelector('.goog-te-gadget-simple');
        // console.log(select);
        // select.value = lang;
        // select.dispatchEvent(new Event('change'));
    }
</script>

<style scoped>
    .translate_el{
        @apply mb-3 font-light text-sm flex items-center gap-1 justify-center
    }

    .translate_el .btn-translate{
        @apply cursor-pointer hover:text-blue-400 duration-200 hover:underline
    }
</style>