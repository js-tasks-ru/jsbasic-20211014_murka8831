function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let friend of friends) {
      let li = document.createElement('li');
      li.innerHTML = friend.firstName + ' ' + friend.lastName;
      ul.append(li);
  }

  ul.setAttribute('style', 'list-style:none;');
  return ul; 
}
