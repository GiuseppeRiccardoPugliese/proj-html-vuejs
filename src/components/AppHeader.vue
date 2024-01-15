<script>

export default {
    name: 'AppHeader',
}

</script>

<template>
    <h1>Ciao sono l'header</h1>

    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'contact'}">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>
