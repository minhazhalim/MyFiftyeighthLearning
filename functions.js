const axios = require('axios');
const functions = {
     add: (number1,number2) => number1 + number2,
     isNull: () => null,
     checkValue: x => x,
     createUser: () => {
          const user = {firstName: 'Minhaz'};
          user['lastName'] = 'Halim';
          return user;
     },
     fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(error => 'error')
};
module.exports = functions;