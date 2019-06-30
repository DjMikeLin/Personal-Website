const axios = require('axios');

export function result(){
    axios.get('https://api.github.com/users/djmikelin/repos')
        .then(res => {            
            console.log("success");
            return res;
        });
}
