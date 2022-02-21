function makeFriendsList(friends) {

  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  li1.textContent = 'Artsiom Mezin';
  li2.textContent = 'Ilia Kantor';
  li3.textContent = 'Christopher Michael';

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  return ul;

}
