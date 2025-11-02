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

registerBtn.addEventListener("click", registerUser);