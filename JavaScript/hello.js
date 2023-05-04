const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'gaming', 'hiking'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

// 객체의 속성에 접근하기
console.log(person.firstName); // 출력: John
console.log(person['lastName']); // 출력: Doe

// 객체의 메소드(함수) 호출하기
console.log(person.fullName()); // 출력: John Doe

// 중첩된 객체에 접근하기
console.log(person.address.street); // 출력: 123 Main St

// 객체에 새로운 속성 추가하기
person.email = 'john.doe@example.com';
console.log(person.email); // 출력: john.doe@example.com

delete person.address;

person['a'] = 'b';

console.log(person.a);