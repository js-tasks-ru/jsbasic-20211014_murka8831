function showSalary(users, age) {
  let userArray = []
			let someUsers = users.filter(function(user) {
				if (user.age <= age) {
					// console.log(user.name, user.balance);
					userArray.push(user.name, user.balance);
					// userArray.push(' ');
					// console.log(userArray);
				}
			});
			// console.log(userArray);
			let result = userArray.join(', ')
			return result;
}
