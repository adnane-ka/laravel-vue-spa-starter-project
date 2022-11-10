<template>
    <div id="app-container" :class="{dark :isOnDarkMode }">
        <div class="dark:bg-gray-900 min-h-screen min-w-screen">
            <DefaultLayout v-if="!isUsingOtherLayout"/>
            <OtherLayout v-if="isUsingOtherLayout"/>
        </div>
    </div>
</template>

<script>
import DefaultLayout from './layouts/default.vue'
import OtherLayout from './layouts/other.vue'

export default {
    data(){
        return{
            isOnDarkMode: true
        }
    },
    components:{
        DefaultLayout,
        OtherLayout
    },
    computed:{
        /**
         * determines which routes are using x layout
         * @return boolean 
        */
        isUsingOtherLayout(){
            return ['not.found'].includes(this.$route.name)
        }
    },
    mounted(){
        this.$setMode()
    }
}
</script>