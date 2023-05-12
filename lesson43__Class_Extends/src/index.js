class User {
    constructor(name, role, password){
        if (name === undefined || name.trim().length === 0){
            alert ('Invalid name!')
        } else {
            this.name = name
        }

        if (role !== 'admin' && role !== 'user') {
            alert('User role is invalid')
        } else {
            this.role = role
        }

        if (password === undefined || password.trim().length === 0){
            alert('Incorrect password!')
        } else {
            this.password = password
        }
        this.isLogged = false
    }

    getName() {
        console.log(this.name); 
    }

    getRole() {
        console.log(this.role);
    }

    logIn(enterPassword) {  
        if (enterPassword !== this.password){
            console.log("Incorrect password");
        } else {
            return (!this.isLogged ? this.isLogged = true : console.log("You are already logged!"))
        }
    }

    logOut() {
        return (this.isLogged ? this.isLogged = false : console.log("You are not logged!"))
    }

    changeName(enterPassword, newName) {
        if (enterPassword !== this.password){
            console.log("Incorrect password");
        } else if (newName === undefined || newName.trim().length === 0){
            console.log("New name is incorrect!");
        } else {
            this.name = newName
        }

    }

    changePassword(newPassword) {
        if (newPassword === undefined || newPassword.trim().length === 0){
            console.log("Incorrect new password");
        } else if (newPassword.trim() === this.password){
            console.log("New password can't be like old password");
        } else if (!this.isLogged){
            console.log("You are not loggedIn!")
        } else {
            this.password = newPassword
        }
    }
}

const simpleUser = new User('Andrew Tate', 'user', '123')
simpleUser.logOut()
simpleUser.changeName('123','Tate Andrew')
simpleUser.changePassword('123456')
console.log(simpleUser);

class Admin extends User{
    constructor(name, password){
        super(name, 'admin', password)
        this.users = []
    }

    addUser(newUserName, newUserPassword) {
        const newUser = new User(newUserName, 'user', newUserPassword)
        this.users.push(newUser)
    }

    removeUser(userName) {
        const userIndex = this.users.findIndex(user => user.name === userName)

        if (userIndex === -1) {
            console.log('User not found!');
        } else {
            this.users.splice(userIndex, 1)
        }
    }

    changeUserRole(userName, role) {
        const userIndex = this.users.findIndex(user => user.name === userName)

        if (userIndex === -1) {
            console.log('User not found!');
        } else if (role !== 'admin' && role !== 'user'){
            console.log('User role is invalid')
        } else {
            this.users[userIndex].role = role
        }
    }

    getAllusers() {
        console.log(this.users);
    }

    removeAllUsers() {
        this.users = []
        console.log('All users have been deleted!');
    }
}

const admin = new Admin('Ihor', '123')

admin.addUser('Andryxa Ruchnik', 'ruchnick123')
admin.addUser('Lyoxa Cherevyk', 'qwerty')
admin.addUser('Vova Gusak', 'pernatuy')
admin.removeUser('Vova Gusak')
admin.changeUserRole('Andryxa Ruchnik', 'admin')
admin.getAllusers()
admin.removeAllUsers()
console.log(admin.users);