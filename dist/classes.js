"use strict";
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}.`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Acessando informações como: "${this.role}"`);
            return;
        }
        console.log("Informações restritas!");
    }
}
const jean = new User("Jean", "Admin", true);
console.log(jean);
jean.showUserName();
jean.showUserRole(true);
jean.showUserRole(false);
