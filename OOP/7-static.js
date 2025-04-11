// static methods

// class Users {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   static compareByAge(a, b){
//     return a.age - b.age
//   }
// }

// const user1 = new Users("Mickey", 32)
// const user2 = new Users("Prince", 22)
// const user3 = new Users("Dora", 42)

// const users = [user1, user2, user3];
// users.sort(Users.compareByAge)
// console.log(users)

// static properties 

class Users {
  static id = 1
  constructor(name, age){
    this.name = name;
    this.age = age
    this.id = Users.id++
  }
}

const user1 = new Users("Mickey", 32)
const user2 = new Users("Prince", 22)
const user3 = new Users("Dora", 42)
const users = [user1, user2, user3];

console.log(users)