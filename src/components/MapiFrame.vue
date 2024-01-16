<script>
export default {
    name: 'MapiFrame',
}
</script>

<template>
    <div class="container">
        <div class="row py-5">
            <!-- Left -->
            <div class="col-6 p-3 left_side">
                <h6 class="ms_orange_text fw-semibold">Our Contact</h6>
                <h2 class="fw-semibold">Get In A Touch</h2>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name*">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email*">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Phone*">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Comment*"
                        rows="5"></textarea>
                </div>
            </div>
            <!-- Right -->
            <div class="col-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d920036.1033637935!2d89.246866!3d25.741117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32d3195baf511%3A0xf7a3fa6c9d0592d6!2sWEB%20IT%20RANGPUR!5e0!3m2!1sit!2sus!4v1705448408190!5m2!1sit!2sus"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.left_side {
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 6%);
    border-radius: 10px;
}

.ms_orange_text {
    color: $orange;
}
</style>
