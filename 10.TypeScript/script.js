var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function getPermissions(role) {
    switch (role) {
        case Role.Admin:
            return "Has full access";
        case Role.User:
            return "Has limiteed access";
        case Role.Guest:
            return "Has limiteed access";
        default:
            return "Unkown Role";
    }
}
const adminPermission = getPermissions(Role.Admin);
const userPermission = getPermissions(Role.User);
const guestPermission = getPermissions(Role.Guest);
console.log(adminPermission);
console.log(userPermission);
console.log(guestPermission);
function greetUser(user) {
    return `Hello, ${user.name}. You are logged in as ${user.role}`;
}
const adminUser = {
    id: 1,
    name: "Firidun",
    role: Role.Admin,
    age: 20
};
console.log(greetUser(adminUser));
class Person {
    constructor(fin, name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        this.fin = fin;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
const todoItem = {
    title: "Hello",
    description: "Greeting",
    isCompleted: true
};
export {};
//# sourceMappingURL=script.js.map