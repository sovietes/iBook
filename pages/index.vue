<template>
    <TemplateHome />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
    layout: 'ibook',
    middleware: 'auth',
    async asyncData() {
        await books.index()
    }
})
</script>
