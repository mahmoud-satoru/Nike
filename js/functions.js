function changeColor_1() {

    let color = getComputedStyle(document.documentElement)
        .getPropertyValue('--main_color');

    if (color === '#CB0216') {

        document.documentElement.style.setProperty('--main_color', '#0E7AD7');

    } else if (color === '#0E7AD7') {

        document.documentElement.style.setProperty('--main_color', '#EC9720');

    } else {

        document.documentElement.style.setProperty('--main_color', '#CB0216');

    }

}

function changeColor_2() {

    let color = getComputedStyle(document.documentElement)
        .getPropertyValue('--main_color');

    if (color === '#CB0216') {

        document.documentElement.style.setProperty('--main_color', '#EC9720');

    } else if (color === '#EC9720') {

        document.documentElement.style.setProperty('--main_color', '#0E7AD7');

    } else {

        document.documentElement.style.setProperty('--main_color', '#CB0216');

    }

}

window.addEventListener("scroll", function () {

    navbar.classList.add("scrolling");

    clearTimeout(scroll_timeout);

    scroll_timeout = setTimeout(function () {
        navbar.classList.remove("scrolling");
    }, 1000);

});

function next_img_2() {
    title_number++;

    if (title_number > 3) {
        title_number = 1;
    }

    document.querySelector(".title img").src =
        `imgs/header/title/${title_number}.png`;
}

function previous_img_2() {
    title_number--;

    if (title_number < 1) {
        title_number = 3;
    }

    document.querySelector(".title img").src =
        `imgs/header/title/${title_number}.png`;
}

function next_img() {
    navbar_number++;

    if (navbar_number > 3) {
        navbar_number = 1;
    }

    document.querySelector(".navbar-brand img").src =
        `imgs/header/${navbar_number}.png`;
}

function previous_img() {
    navbar_number--;

    if (navbar_number < 1) {
        navbar_number = 3;
    }

    document.querySelector(".navbar-brand img").src =
        `imgs/header/${navbar_number}.png`;
}

function prep_img(img_list) {

    let li_elments = "";

    img_list.forEach(function(img) {

        li_elments += `
            <li>
                <img
                    src="imgs/products/${img}"
                    class="img-fluid"
                    alt=""
                    onclick="change_latest_img('${img}', this)"
                >
            </li>
        `;

    });

    return li_elments;

}

function calc_price(price, discount) {

    if (discount == 0) {
        return `
            <span>${price} <sup>$</sup></span>
        `;
    }

    let discount_price = price - (price * discount);

    return `
        <span class="text-danger text-decoration-line-through">${price} <sup>$</sup></span>
        <span>${discount_price.toFixed(2)} <sup>$</sup></span>
    `;
}

function prep_size(size_list) {

    let li_elements = "";

    size_list.forEach(function(size, index) {

        li_elements += `
            <li 
                class="sizes rounded ${index == 0 ? "size_select" : ""}"
                onclick="change_size(this)"
            >
                ${size}
            </li>
        `;

    });

    return li_elements;
}

function next_img_3() {
    title_number_3++;

    if (title_number_3 > 3) {
        title_number_3 = 1;
    }

    document.querySelector(".title_2 img").src =
        `imgs/header/title/${title_number_3}.png`;
}

function previous_img_3() {
    title_number_3--;

    if (title_number_3 < 1) {
        title_number_3 = 3;
    }

    document.querySelector(".title_2 img").src =
        `imgs/header/title/${title_number_3}.png`;
}

function prep_img_2(img_list, card_index) {

    let li_elm = "";

    img_list.forEach(function(img, index) {

        li_elm += `
            <li
                class="${index === 0 ? 'active_li' : ''}"
                onclick="ch_img('${img}', ${card_index}, this)"
            ></li>
        `;

    });

    return li_elm;
}

function ch_img(the_img, card_index, element) {
    let cards = document.querySelectorAll(".my_card");

    let card = cards[card_index];

    card.querySelector(".img_list").src = `./imgs/products/${the_img}`;

    let dots = card.querySelectorAll(".dots li");

    dots.forEach(function(dot) {
        dot.classList.remove("active_li");
    });

    element.classList.add("active_li");

}

function change_latest_img(img, element) {

    let product = element.closest(".product");

    let main_img = product.querySelector(".main_product_img");

    main_img.src = `imgs/products/${img}`;

}

function change_size(element) {

    let product = element.closest(".product");

    if (product == null) {
        product = element.closest("#pop_proudcts");
    }

    let sizes = product.querySelectorAll(".sizes");

    sizes.forEach(function(size) {
        size.classList.remove("size_select");
    });

    element.classList.add("size_select");
}

function show_product(id) {
    let product = products.find(function(item) {
        return item.id == id;
    });

    if (!product) return;

    let popup = document.getElementById("pop_proudcts");
    let popup_box = popup.querySelector(".container");

    popup.querySelector(".pop_name").textContent = product.name;

    popup.querySelector(".main_pop_img").src =
        `imgs/products/${product.images[0]}`;

    popup.querySelector(".pop_price").innerHTML =
        `${product.price} <sup>$</sup>`;

    let old_price = popup.querySelector(".prece");

    if (product.discount > 0) {

        old_price.innerHTML = `${product.price} <sup>$</sup>`;
        old_price.style.display = "block";

        popup.querySelector(".pop_price").innerHTML =
            `${(product.price - product.price * product.discount).toFixed(2)} <sup>$</sup>`;

    } else {

        old_price.style.display = "none";

    }

    popup.querySelector(".pop_description").textContent =
        product.description || "";

    let imgs = "";

    product.images.forEach(function(img) {

        imgs += `
            <img
                class="ittemso"
                src="imgs/products/${img}"
                onclick="change_pop_img('${img}')"
                alt="shoe"
            >
        `;

    });

    popup.querySelector(".imgss").innerHTML = imgs;

    let sizes = "";

    product.sizes.forEach(function(size, index) {

        sizes += `
            <li
                class="sizes rounded ${index == 0 ? "size_select" : ""}"
                onclick="change_size(this)"
            >
                ${size}
            </li>
        `;

    });

    popup.querySelector(".pop_sizes").innerHTML = sizes;

    let colors = "";

    if (product.colors) {

        product.colors.forEach(function(color, index) {

            colors += `
                <li
                    class="colors ${index == 0 ? "color_select" : ""}"
                    style="background-color: ${color}"
                    onclick="change_color(this)"
                ></li>
            `;

        });

    }

    popup.querySelector(".pop_colors").innerHTML = colors;

    let add_button = popup.querySelector(".btn-danger, .btn-warning");

    if (add_button != null) {
        add_button.setAttribute("onclick", `add_to_cart(${product.id})`);
    }

    update_cart_button(product.id);

    popup.classList.remove("hide");
    popup.style.display = "flex";

    setTimeout(function() {
        popup.classList.add("show");
    }, 10);

    popup.onclick = function() {
        close_product();
    };

    popup_box.onclick = function(e) {
        e.stopPropagation();
    };
}

function change_pop_img(img) {
    document.querySelector(".main_pop_img").src =
        `imgs/products/${img}`;
}

function close_product() {

    let popup = document.getElementById("pop_proudcts");

    popup.style.opacity = "0";
    popup.style.transition = "opacity 1.5s";

    setTimeout(function() {
        popup.style.display = "none";
        popup.style.opacity = "1";
    }, 1500);

}

function openPopup_9() {

    let cart = document.getElementById("cart");

    x_7();

    cart.style.display = "flex";

    setTimeout(function() {
        cart.style.opacity = "1";
    }, 10);

}

function closeCart() {

    let cart = document.getElementById("cart");

    cart.style.opacity = "0";

    setTimeout(function() {
        cart.style.display = "none";
    }, 500);

}

function openPopup() {

    let popup = document.getElementById("popup");

    popup.style.display = "flex";

    setTimeout(function() {
        popup.style.opacity = "1";
    }, 10);

}

function closePopup() {

    let popup = document.getElementById("popup");

    popup.style.opacity = "0";

    setTimeout(function() {
        popup.style.display = "none";
    }, 500);

}

function update_localStorage() {
    localStorage.setItem("my_cart", JSON.stringify(cart_products));
}

function get_cart_products() {

    let data = localStorage.getItem("my_cart");

    if (data != null) {
        cart_products = JSON.parse(data);
    } else {
        cart_products = [];
    }

}

function change_color(element) {

    let product = element.closest("#pop_proudcts");

    let colors = product.querySelectorAll(".pop_colors .colors");

    colors.forEach(function(color) {
        color.classList.remove("color_select");
    });

    element.classList.add("color_select");
}
function x_7() {
    let container = document.querySelector(".cart_container");
    let text = "";

    if (cart_products.length == 0) {
        container.innerHTML = `
            <h3 class="text-center w-100">Your Cart Is Empty</h3>
        `;
        return;
    }

    cart_products.forEach(function(item) {
        let price = item.price - (item.price * item.discount);

        text += `
            <div class="ccardd">

                <img
                    class="img-fluid"
                    src="imgs/products/${item.image}"
                    alt="${item.name}"
                >

                <h2>${item.name}</h2>

                <div class="price">
                    <div class="label me-3">
                        <h6>Price :</h6>
                    </div>

                    <div class="value">
                        <p>
                            ${item.discount > 0 ? `
                                <span class="text-danger text-decoration-line-through">
                                    ${item.price} <sup>$</sup>
                                </span>
                            ` : ""}

                            <span>
                                ${price.toFixed(2)}<sup>$</sup>
                            </span>
                        </p>
                    </div>
                </div>

                <div class="size d-flex m-2">

                    <div class="label me-3 d-flex justify-content-center align-items-center">
                        <h6>Size :</h6>
                    </div>

                    <div class="value">
                        <p>${item.size}</p>
                    </div>

                </div>

                <div class="size d-flex m-2">

                    <div class="label me-3 d-flex justify-content-center align-items-center">
                        <h6>Color :</h6>
                    </div>

                    <div class="value d-flex align-items-center">
                        <span
                            style="
                                display: inline-block;
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                background-color: ${item.color};
                                border: 1px solid #777;
                            "
                        ></span>
                    </div>

                </div>

                <button
                    class="btn btn-danger w-100"
                    onclick="remove_from_cart(${item.id})"
                >
                    Remove
                </button>

            </div>
        `;
    });

    container.innerHTML = text;
}

function add_to_cart(id) {

    let product = products.find(function(item) {
        return item.id == id;
    });

    if (product == null) {
        return;
    }

    let popup = document.getElementById("pop_proudcts");

    let selected_size = popup.querySelector(".size_select");
    let selected_color = popup.querySelector(".color_select");

    if (selected_size == null || selected_color == null) {
        alert("Please select a size and a color");
        return;
    }

    let exists = cart_products.find(function(item) {
        return item.id == id;
    });

    if (exists) {
        return;
    }

    let cart_item = {
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        discount: product.discount,
        size: selected_size.textContent.trim(),
        color: selected_color.style.backgroundColor
    };

    cart_products.push(cart_item);

    update_localStorage();

    update_cart_button(id);
    x_7();
    x_9(id);
}

function update_cart_button(id) {

    let popup = document.getElementById("pop_proudcts");

    let button = popup.querySelector(".btn-danger, .btn-warning");

    if (button == null) {
        return;
    }

    let exists = cart_products.find(function(item) {
        return item.id == id;
    });

    if (exists) {

        button.classList.remove("btn-danger");
        button.classList.add("btn-warning");

        button.textContent = "Remove From Cart";

        button.setAttribute("onclick", `remove_from_cart(${id})`);

    } else {

        button.classList.remove("btn-warning");
        button.classList.add("btn-danger");

        button.textContent = "Add To Cart";

        button.setAttribute("onclick", `add_to_cart(${id})`);

    }

}

function remove_from_cart(id) {

    cart_products = cart_products.filter(function(item) {
        return item.id != id;
    });

    update_localStorage();
    update_cart_button(id);
    x_7();
    x_9(id);
}

function x_8(id, button) {

    let product = products.find(function(item) {
        return item.id == id;
    });

    if (product == null) {
        return;
    }

    let parent = button.closest(".product");

    let selected_size = parent.querySelector(".size_select");

    if (selected_size == null) {
        alert("Please select a size");
        return;
    }

    let exists = cart_products.find(function(item) {
        return item.id == id;
    });

    if (exists) {
        remove_from_cart(id);
        return;
    }

    let cart_item = {
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        discount: product.discount,
        size: selected_size.textContent.trim(),
        color: product.colors && product.colors.length > 0
            ? product.colors[0]
            : ""
    };

    cart_products.push(cart_item);

    update_localStorage();
    x_7();
    x_9(id);
}

function x_9(id) {

    let buttons = document.querySelectorAll(".latest_cart_button");

    buttons.forEach(function(button) {

        if (button.dataset.id == id) {

            let exists = cart_products.find(function(item) {
                return item.id == id;
            });

            if (exists) {

                button.classList.remove("btn-primary");
                button.classList.add("btn-warning");

                button.textContent = "Remove From Cart";

            } else {

                button.classList.remove("btn-warning");
                button.classList.add("btn-primary");

                button.textContent = "Add To Cart";

            }

        }

    });

}