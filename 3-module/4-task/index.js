function showSalary(users, age) {
  
  let userArray = []
  let someUsers = users.filter(function(user) {

    if (user.age <= age) {
      userArray.push(user.name, ', ', user.balance, '\n');
    }
  });
  
  let result = userArray.join('')
  return result.trim();
}
