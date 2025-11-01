// register.html
const registerNameInput = document.getElementById("registerNameInput")
const registerLastNameInput = document.getElementById("registerLastNameInput")
const registerEmailInput = document.getElementById("registerEmailInput")
const registerPasswordInput = document.getElementById("registerPasswordInput")
const registerBtn = document.getElementById("registerBtn")

const registerUser = async () => {
    try {
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                firstname: registerNameInput.value,
                lastname: registerLastNameInput.value,
                email: registerEmailInput.value,
                password: registerPasswordInput.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

registerBtn?.addEventListener("click", registerUser);


// login.html
const loginEmailInput = document.getElementById("loginEmailInput")
const loginPasswordInput = document.getElementById("loginPasswordInput")
const loginBtn = document.getElementById("loginBtn")

const loginUser = async () => {
    try {
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: loginEmailInput.value,
                password: loginPasswordInput.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json()
        console.log(data)

        if (res.ok) {
            window.location.href = "./index.html"
        } else {
            alert(data.error)
        }

    } catch (error) {
        console.error(error)
    }
}

loginBtn?.addEventListener("click", loginUser);

// index.html (homepage)

// Load Products
const productContainer = document.getElementById("productContainer")

const loadProducts = async () => {
    try {
        const res = await fetch("https://ilkinibadov.com/api/v1/products")
        const json = await res.json()
        
        const products = json.products
        console.log(products)

        products.forEach(product => {
            const title = product.title
            const price = product.price
            const imageUrl = product.images[0]
            const currency = product.currency

            const productCard = document.createElement("div")
            const styleString = "w-[270px] h-[320px] flex flex-col justify-center group"
            const styleKeywords = styleString.split(" ")
            styleKeywords.forEach(style => productCard.classList.add(style))
            productCard.innerHTML = `
                <div class="w-[270px] h-[250px] overflow-hidden bg-[#F5F5F5] mb-4 relative rounded-sm">
                    <img src="${imageUrl}" alt="${title}" class="w-full h-full object-contain">
                    <button class="absolute w-full h-10 bottom-0 left-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        Add to Basket
                    </button>
                </div>
                <h3 class="poppins mb-2">${title}</h3>
                <p class="poppins-semibold text-[18px] text-[#DB4444]">${currency} ${price}</p>`
            productContainer.append(productCard)
        })

    } catch (error) {
        console.error(error)
    }
}

window.addEventListener("load", loadProducts)