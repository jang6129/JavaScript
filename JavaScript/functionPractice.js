const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    },
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    setFirstName: function(newFirstName) {
        this.firstName = newFirstName;
    },
    setLastName: function(newLastName) {
        this.lastName = newLastName;
    },
    birthday: function() {
        this.age += 1;
        console.log("Happy Birthday! You are now " + this.age + " years old.");
    }
};

// 객체의 메서드를 호출하는 예
person.greet(); // 출력: Hello, my name is John Doe.
console.log(person.getFullName()); // 출력: John Doe
person.setFirstName("Jane");
person.setLastName("Smith");
console.log(person.getFullName()); // 출력: Jane Smith
person.birthday(); // 출력: Happy Birthday! You are now 31 years old.
