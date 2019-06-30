const axios = require('axios');

export async function allProjects(){
    return await axios.get('https://api.github.com/users/djmikelin/repos');
}
