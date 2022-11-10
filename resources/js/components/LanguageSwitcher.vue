<template>
    <select @change="switchLanguage" class="dark:text-gray-600"> 
        <option :selected="$i18n.locale == language" v-for="language in languages" :value="language" v-text="language">
        </option> 
    </select>
</template>

<script>
import i18n from '../lang'

export default {
    methods:{
        /**
         * switch language handler
         * @return void
        */
        switchLanguage(e){
            i18n.global.locale = e.target.value
            this.$storeLanguage(e.target.value)
        }
    },
    computed:{
        languages(){
            return Object.keys(this.$i18n.messages)
        }
    }
}
</script>