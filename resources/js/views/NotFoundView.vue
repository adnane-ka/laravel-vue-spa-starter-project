<template>
    <div class="flex h-screen">
        <div class="m-auto">
            <h2 class="text-red-400 dark:text-gray-200 text-4xl font-bold">
                404
                <br>
                {{ $tc("Not found") }}
            </h2>
    
            <router-link to="/" class="bg-gray-200 dark:bg-gray-700 text-red-400 dark:text-gray-200">{{ $tc('back') }}</router-link>
        </div>
    </div>
</template>