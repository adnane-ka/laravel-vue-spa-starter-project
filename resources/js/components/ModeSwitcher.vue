<template>
    <div>
        <div class="flex gap-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <button class="pr-8 py-1" @click="switchMode('light')" v-if="mode == 'dark'">
                <svg class="h-5 w-5 text-yellow-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            </button>
        
            <button class="pl-8 py-1" @click="switchMode('dark')" v-if="mode == 'light'">
                <svg class="h-5 w-5 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mode: null
        }
    },
    mounted(){
        this.mode = this.$activeMode
    },
    methods:{
        /**
         * switch mode handler
         * @return void
        */
        switchMode(mode){
            this.$changeMode(mode)
            this.mode = mode
        }
    }
}
</script>