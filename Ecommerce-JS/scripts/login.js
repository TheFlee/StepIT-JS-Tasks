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
            const remember = document.getElementById("rememberMe").checked

            if (remember) {
                localStorage.setItem("accessToken", data.accessToken)
                localStorage.setItem("refreshToken", data.refreshToken)
            }
            // window.location.href = "./index.html"
        } else {
            alert(data.error);
        }

    } catch (error) {
        console.error(error)
    }
}

loginBtn.addEventListener("click", loginUser);


const themeToggle = document.getElementById("theme")

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    const isDark = document.body.classList.contains("dark")

    localStorage.setItem("theme", isDark ? "dark" : "light")
})