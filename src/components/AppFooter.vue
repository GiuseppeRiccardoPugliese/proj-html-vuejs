<script>

export default {
    name: 'AppFooter',
}

</script>

<template>
    <footer>
        <div class="container">
            <ul class="row text-center row-cols-md-2 text-md-start row-cols-xl-4">
                <li class="d-flex flex-column align-items-center mb-4 align-items-md-start">
                    <img src="../assets/logo.png" alt="logo">
                    <p>War should never be entered upon until every agency of peace has failed not to be good</p>
                    <div class="d-flex">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-google-plus-g"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </li>
                <li class=" mb-5">
                    <h2>Emergy Link.</h2>

                    <div class="mb-3">Organic Food Shop</div>
                    <div class="mb-3">Our Term & Condition</div>
                    <div class="mb-3">Gogrin Faq Section</div>
                    <div class="mb-3">Our Team Member</div>
                    <div class="mb-3">Our Latest News Feed</div>

                </li>
                <li class="d-flex flex-column align-items-center mb-5 align-items-md-start">
                    <h2>Our Latest Blog.</h2>

                    <div class="mb-3 d-md-flex">
                        <img src="../assets/blo1-70x70.jpg" alt="" class="me-2 mb-2">
                        <div>Where I live, I am surrounded by fresh, organic food, so I eat really well.
                            <br> December 17, 2022
                        </div>
                    </div>
                    <div class="mb-3 d-md-flex">
                        <img src="../assets/blo2-70x70.jpg" alt="" class="me-2">
                        <div>Where I live, I am surrounded by fresh, organic food, so I eat really well.
                            <br>December 17, 2022
                        </div>
                    </div>

                </li>
                <li>
                    <h2>Our Gallery.</h2>

                    <div class="row row-cols-3">
                        <div>
                            <img src="../assets/blo2-70x70.jpg" alt="" class="mb-2">
                        </div>
                        <div>
                            <img src="../assets/blo9-70x70.jpg" alt="" class="mb-2">
                        </div>
                        <div>
                            <img src="../assets/blo8-70x70.jpg" alt="" class="mb-2">
                        </div>
                        <div>
                            <img src="../assets/blo7-70x70.jpg" alt="" class="mb-2">
                        </div>
                        <div>
                            <img src="../assets/blo4-70x70.jpg" alt="" class="mb-2">
                        </div>
                        <div>
                            <img src="../assets/blo3-70x70.jpg" alt="" class="mb-2">
                        </div>



                    </div>
                </li>
            </ul>


        </div>
        <div id="info" class="d-flex align-items-center">
            <div
                class="container d-flex align-items-center flex-column justify-content-center flex-lg-row justify-content-lg-between">
                <div>
                    <div class="d-flex align-items-center me-4">
                        <div>Copyright © gogrin all rights reserved.</div>
                    </div>
                </div>
                <div class="d-flex">
                    <ul class="d-flex">
                        <li class="me-2">Service</li>
                        <li class="me-2">Pricing Table</li>
                        <li class="me-2">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    padding: 50px 0 0 0;
    color: white;
    background-image: url(../assets/footer-bg.jpg);
}

li {
    list-style-type: none;
}

.fa-brands {
    color: white;
    background-color: #1c7e76;
    font-size: 20px;
    padding: 11px 14px;
    border-radius: 5px;
    margin-right: 15px;
}

#info {
    background-color: #1c7e76;
    height: 80px;
}
</style>
