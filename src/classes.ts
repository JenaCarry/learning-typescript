// Classes
class User {
  name;
  role;
  isApproved;
  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }
  showUserName(): void {
    console.log(`O nome do usuário é ${this.name}.`);
  }
  showUserRole(canShow: boolean): void {
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
