// Верните контекст у setTimeout. Сделать это 2-мя способами
const user = {
    name: "John Smith",
    sayHi: function () {
        alert(this.name)
    },
    timeoutSayHi: function () {
        setTimeout(() => user.sayHi(), 1000);
    }
};
user.sayHi();
user.timeoutSayHi()


const user_two = {
    name: "Tom Cat",
    sayHi: function () {
        alert(`${this.name}`)
    },
    timeoutSayHi: function () {
        setTimeout(this.sayHi, 1000);
    }
};
user_two.sayHi();

bindAll(user_two);
user_two.timeoutSayHi();

function bindAll(user) {
    for (let key in user) {
        if (typeof user[key] == 'function') {
            user[key] = user[key].bind(user);
        }
    }
}
