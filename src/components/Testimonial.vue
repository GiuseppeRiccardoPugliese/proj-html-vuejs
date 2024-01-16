<script>

export default {
    name: 'Testimonial',
    data() {
        return {
            testimonials: [
                { longText: 'Testo lungo 1', shortText: 'Breve 1' },
                { longText: 'Testo lungo 2', shortText: 'Breve 2' },
                // Aggiunte di altre diapositive se servono
            ],
        };
    },
}

</script>

<template>
    <!-- <div>
        <div class="carousel-container">
            <div class="carousel-inner" :style="{ transform: 'translateX(' + translateValue + 'px)' }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-slide">
                    <div class="slide-content">
                        <h2>{{ testimonial.longText }}</h2>
                        <p>{{ testimonial.shortText }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="prevSlide" class="carousel-control-prev" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </button>
        <button @click="nextSlide" class="carousel-control-next" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </button>
    </div>  -->
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
</style>