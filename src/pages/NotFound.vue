<script>
export default {
    name: 'NotFound',
};
</script>

<template>
    <div class="not-found">
        <h1 class="not-found-title">Page NOT FOUND - Error 404</h1>
        <p class="not-found-description">Oops! The page you are looking for might be in another castle.</p>
        <img src="https://i.pinimg.com/originals/0c/64/9a/0c649a17ec1e5f5ca340248b4ef4e4be.gif" alt="">
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    text-align: center;
    margin: 50px;
    padding-bottom: 30px;
}

.not-found-title {
    font-size: 48px;
    color: #ff0000;
    margin-bottom: 20px;
}

.not-found-description {
    font-size: 20px;
    color: #333;
}
</style>