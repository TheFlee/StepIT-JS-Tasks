enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

function getPermissions(role:Role): string {
    switch(role){
        case Role.Admin:
            return "Has full access"
        case Role.User:
            return "Has limiteed access"
        case Role.Guest:
            return "Has limiteed access"
        default:
            return "Unkown Role"
    }
}

const adminPermission = getPermissions(Role.Admin)
const userPermission = getPermissions(Role.User)
const guestPermission = getPermissions(Role.Guest)

console.log(adminPermission)
console.log(userPermission)
console.log(guestPermission)

interface User {
    id: number
    name: string
    role: Role
    age?: Number
}

interface Employee extends User {
    salary: number
}

function greetUser(user: User): string {
    return `Hello, ${user.name}. You are logged in as ${user.role}`
}

const adminUser: User = {
    id: 1,
    name: "Firidun",
    role: Role.Admin,
    age: 20
}

console.log(greetUser(adminUser))

class Person {
    private fin: string
    public name: string
    protected birthDate: Date

    constructor(fin:string, name:string, birthDate:Date) {
        this.name = name
        this.birthDate = birthDate
        this.fin = fin
    }

    greet() : string {
        return `Hello, my name is ${this.name}`
    }

}

type Todo = {
    title: string
    description: string
    isCompleted: boolean
}

type PartialTodo = Partial<Todo>
type ReadonlyTodo = Readonly<Todo>

const todoItem: Todo = {
    title: "Hello",
    description: "Greeting",
    isCompleted: true
}

type Point = {
    x: number
    y: number
}

type Circle = {
    radius: number
}

type Shape = Point & Circle

