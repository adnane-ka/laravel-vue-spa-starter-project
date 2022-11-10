<template>
    <div class="flex gap-2 p-1 dark:text-gray-200 items-center">
        <router-link class="px-4 py-2 hover:opacity-50" to="/">{{ $tc('Home') }}</router-link>
        <router-link class="px-4 py-2 hover:opacity-50" to="/example">{{ $tc('Link') }}</router-link>

        <language-switcher class="ml-auto"/>
        <mode-switcher />
    </div>

    <router-view class="text-center"></router-view>
</template>

<script>
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import ModeSwitcher from '../components/ModeSwitcher.vue'

export default {
    components:{
        LanguageSwitcher,
        ModeSwitcher
    }
}
</script>

<style scoped>
.router-link-active{
    @apply bg-gray-400;
}
</style>