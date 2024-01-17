<script>
export default {
    name: 'MapiFrame',
    data() {
        return {
            formFields: {
                name: '',
                email: '',
                phone: '',
                comment: '',
            },
            fieldErrors: {
                name: '',
                email: '',
                phone: '',
                comment: '',
            },
        };
    },
    methods: {
        //Verifica se il campo e' vuoto e che non sia un numero, ovvero verifica della validita' del numero
        NumberField(field) {
            if (this.formFields[field] === '' || isNaN(this.formFields[field])) {
                this.formFields[field] = null;
            }
        },
        handleSubmit() {
            // Verifica la validità dei campi del modulo
            const isValid = this.validateForm();
        },
        validateForm() {
            let isValid = true;

            // Verifica la validità di ciascun campo
            for (const field in this.formFields) {
                if (!this.formFields[field].trim()) {
                    this.fieldErrors[field] = '* This field is required';
                    isValid = false;
                } else {
                    this.fieldErrors[field] = '';
                }
            }

            return isValid;
        },
    },
}
</script>

<template>
    <div class="container">
        <div class="row py-5">
            <!-- Left -->
            <div class="col-6 p-3 left_side">
                <h6 class="ms_orange_text fw-semibold">Our Contact</h6>
                <h2 class="fw-semibold">Get In A Touch</h2>
                <form action="" novalidate>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input v-model.trim="formFields.name" type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Name*" required />
                        <span class="error-message" v-if="fieldErrors.name">{{ fieldErrors.name }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input v-model.trim="formFields.email" type="email" class="form-control"
                            id="exampleFormControlInput1" placeholder="Email*" required />
                        <span class="error-message" v-if="fieldErrors.email">{{ fieldErrors.email }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <!-- Utilizziamo una stringa per v-model e convertiamo in numero quando necessario -->
                        <input v-model="formFields.phone" type="tel" class="form-control" id="exampleFormControlInput1"
                            placeholder="Phone*" @input="NumberField('phone')" required />
                        <span class="error-message" v-if="fieldErrors.phone">{{ fieldErrors.phone }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea v-model.trim="formFields.comment" class="form-control" id="exampleFormControlTextarea1"
                            placeholder="Your Comment*" rows="5" required></textarea>
                        <span class="error-message" v-if="fieldErrors.comment">{{ fieldErrors.comment }}</span>
                    </div>
                    <div class="col-auto">
                        <button @click="handleSubmit" type="button" class="btn mb-3 px-4 py-3">Send Message</button>
                    </div>
                </form>
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

.error-message {
    color: red;
}

button {
    background-color: $orange;
    color: white;
    font-weight: bold;
    border-radius: 0;
}

button:hover {
    background-color: $green;
}

.ms_orange_text {
    color: $orange;
}
</style>
