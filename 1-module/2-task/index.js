function print(text) {
  console.log(text);
}

function isValid(name) {
HEAD
  if (name && !name.includes(' ') && name.length >= 4) {
    return true;
  } else {
    return false;
}

  return !!name && !name.includes(' ') && name.length >= 4;
c3603b6dea5f24e49af6f1f0eb7b7b8f8daf2e2c
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello();