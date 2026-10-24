let pre = document.querySelector('.buttons button.right'),
    next = document.querySelector('.buttons button.left'),
    cruntte = document.querySelector('.slide.Active'),
    img_number = 1,
    navbar = document.querySelector("nav"),
    scroll_timeout,
    nav_links = document.querySelectorAll("nav ul li.nav-item a"),
    loading_pade = document.querySelector('.loading'),
    navbar_number = 1,
    title_number = 1,
    title_number_3 = 1,
    latest_push = document.querySelector(".push"),
    prd = document.querySelector(".proudct"),
    sections = document.querySelectorAll("#Home, #Latest, #Featured"),
    ancores = document.querySelectorAll(".navbar-nav .nav-link"),
    cart_products = [];

pre.addEventListener('click', function () {

    cruntte.classList.remove('Active');

    cruntte = cruntte.nextElementSibling ?? cruntte.parentElement.querySelector('.slide');

    cruntte.classList.add('Active');

});

get_cart_products();

next.addEventListener('click', function () {

    cruntte.classList.remove('Active');

    cruntte = cruntte.previousElementSibling ?? cruntte.parentElement.querySelector('.slide:last-child');

    cruntte.classList.add('Active');

});

next.addEventListener('click', changeColor_2);
pre.addEventListener('click', changeColor_1);

nav_links.forEach(function(link) {

    link.addEventListener("click", function() {

        nav_links.forEach(function(link) {
            link.classList.remove("active_ancor");
        });

        this.classList.add("active_ancor");

    });

});

nav_links.forEach(function(link) {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        let section = document.querySelector(this.getAttribute("href"));

        let navbar_height = navbar.offsetHeight;

        window.scrollTo({
            top: section.offsetTop - navbar_height,
            behavior: "smooth"
        });

    });

});

nav_links.forEach(function(link) {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        let section = document.querySelector(this.getAttribute("href"));

        let navbar_height = navbar.offsetHeight;

        window.scrollTo({
            top: section.offsetTop - navbar_height,
            behavior: "smooth"
        });

    });

});

window.addEventListener("DOMContentLoaded", function () {
    loading_pade.classList.add('hide');

    setTimeout(function(params) {
        loading_pade.classList.add('none');
    }, 1000);
});

latest.forEach(function(latest) {

    latest_push.innerHTML += `
    <div class="product main_ mb-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 part_1">
                    <div class="item">
                        <div class="row">
                            <div class="col-lg-2">
                                <div class="item">
                                    <ul class="list-unstyled shose d-flex flex-row flex-lg-column gap-lg-3 column-gap-lg-3 row-gap-3 m-1">
                                        ${prep_img(latest.images)}
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-10 d-flex justify-content-center align-items-center">
                                <div class="item">
                                    <div class="selected_img h-100 d-flex justify-content-center align-items-center">
                                        <img src="imgs/products/${latest.images[0]}" class="img-fluid main_product_img" style="width: 60%;" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 part_2">
                    <div class="item">
                        <h2 style="color: var(--main_color);">${latest.name}</h2>

                        <p>${latest.description}</p>

                        <div class="price">
                            <div class="label me-3">
                                <h6>Price :</h6>
                            </div>

                            <div class="value">
                                <p>
                                    ${calc_price(latest.price, latest.discount)}
                                </p>
                            </div>
                        </div>

                        <div class="size d-flex">
                            <div class="label me-3 d-flex justify-content-center align-items-center">
                                <h6>Size :</h6>
                            </div>

                            <div class="value">
                                <p>
                                    <ul class="list-unstyled d-flex column-gap-2">
                                        ${prep_size(latest.sizes)}
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <button
                            class="btn btn-primary latest_cart_button"
                            data-id="${latest.id}"
                            onclick="x_8(${latest.id}, this)">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    x_9(latest.id);

});

products.forEach(function(products, index) {

    prd.innerHTML += `
        <div class="card_container col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center">
            <div class="my_card text-center">

                <p class="disc" style="${products.discount === 0 ? 'display: none;' : ''}">
                    ${products.discount * 100}%
                </p>

                <img src="imgs/products/${products.images[0]}" class="img-fluid img_list" alt="">

                <button onclick="show_product(${products.id})">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <ul class="d-flex column-gap-2 w-100 justify-content-center dots">
                    ${prep_img_2(products.images, index)}
                </ul>

                <h5>${products.name}</h5>

                ${calc_price(products.price, products.discount)}

            </div>
        </div>
    `;

});

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        let top = section.offsetTop;

        if (window.scrollY >= top - 100) {

            ancores.forEach(function (ancore) {
                ancore.classList.remove("active_ancor");
            });

            let active_ancore = document.querySelector(
                `.navbar-nav .nav-link[href="#${section.id}"]`
            );

            if (active_ancore != null) {
                active_ancore.classList.add("active_ancor");
            }

        }

    });

});