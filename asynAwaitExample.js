const API = "https://api.github.com/users/mahenvs"

async function fetchGitUser(){
    const data = fetch(API)
    console.log(data);
}

fetchGitUser()
