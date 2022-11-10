<template>
    <h2 class="text-red-400 dark:text-gray-200 text-4xl font-bold">
        {{ $tc("That's a component example") }}
    </h2>
</template>

<script>
export default {
    created(){
        this.$exampleHelper()
    }
}
</script>