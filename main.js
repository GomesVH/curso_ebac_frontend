document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name')
    const userNameElemnt = document.querySelector('#username')
    const avatarElement = document.querySelector('#avatar')
    const reposElement = document.querySelector('#repos')
    const followersElemet = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkElement = document.querySelector('#link')

    fetch('https://api.github.com/users/GomesVH')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerHTML = json.name;
            userNameElemnt.innerHTML = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerHTML = json.public_repos;
            followersElemet.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.href = json.html_url;
        })
})