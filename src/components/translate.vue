<template>
    <div class="translate_el">
        <Icon name="icon-park-outline:earth"/>
        <div>
            <span class="btn-translate">Português(BR)</span> e <span class="btn-translate">Inglês</span>
        </div>
    </div>
</template>

<style scoped>
    .translate_el{
        @apply mb-3 font-light text-sm flex items-center gap-1 justify-center
    }

    .translate_el .btn-translate{
        @apply cursor-pointer hover:text-blue-400 duration-200 hover:underline
    }
</style>