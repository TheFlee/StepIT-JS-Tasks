const getUserData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

async function addUserDataToHTML() {
    const users = await getUserData()
    const container = document.getElementById('container')
    users.forEach(user => {
        const userCard = document.createElement('div')
        const name = document.createElement('h2')
        const email = document.createElement('p')
        const phone = document.createElement('p')
        const website = document.createElement('p')

        name.innerText = user.name
        email.innerText = user.email
        phone.innerText = user.phone
        website.innerText = user.website

        container.append(userCard)
        userCard.append(name, email, phone, website)
        
        userCard.classList.add('bg-white', 'p-4', 'rounded-xl', 'shadow')
        name.classList.add('text-xl', 'font-bold', 'mb-2')
        email.classList.add('text-gray-700', 'mb-1')
        phone.classList.add('text-gray-700', 'mb-1')
        website.classList.add('text-blue-500', 'underline')
    })
}
        
addUserDataToHTML()