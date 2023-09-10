const searchBar = document.getElementById("searchField");

const getApi = (value) => {
  let api;
  if (value === "") {
    api = `https://api.github.com/users`;
  } else {
    api = `https://api.github.com/users/${value}`;
  }
  const promise = fetch(api);
  // console.log(promise);
  promise
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      let result = res;
      console.log(result);
      if (value === undefined) {
        result.map((ele) => {
          console.log(ele.events_url);
          const root = document.getElementById("root");
          const container = document.createElement("div");
          const name = document.createElement("h2");
          const image = document.createElement("img");
          const link = document.createElement("a");
          const joined = document.createElement("div")
          const bio = document.createElement("div")
          const followers = document.createElement("div")
          const following = document.createElement("div")
          const repos = document.createElement("div")
          const location = document.createElement("div")
          
          name.innerText = ele.name;
          image.src = ele.avatar_url;
          link.href = ele.html_url;
          link.innerHTML = ele.login;
          joined.innerText = ele.created_at
          bio.innerText = ele.bio
          followers.innerText = ele.followers
          following.innerText = ele.following
          repos.innerText = ele.public_repos
          location.innerText = ele.location
    
          root.appendChild();
        });
      } else {
        if (result.message === "Not Found" || value === "") {
          const Error = document.createElement("h2");
          Error.innerText = "User Not Found Please Enter valid ID";
          root.appendChild(Error);
        } else {
          const root = document.getElementById("root");
          const container = document.createElement("div");
          const name = document.createElement("h2");
          const image = document.createElement("img");
          const link = document.createElement("a");
          const joined = document.createElement("div")
          const bio = document.createElement("div")
          const followers = document.createElement("div")
          const following = document.createElement("div")
          const repos = document.createElement("div")
          const location = document.createElement("div")
          name.innerText = result.name;
          image.src = result.avatar_url;
          link.href = result.html_url;
          link.innerHTML = result.login;
          joined.innerText = result.created_at
          bio.innerText = result.bio
          followers.innerText = `followers: ${result.followers}`
          following.innerText =  `following: ${result.following}`
          repos.innerText = result.public_repos
          location.innerText = result.location
          container.appendChild(name)
          container.appendChild(image)
          container.appendChild(link)
          container.appendChild(joined)
          container.appendChild(bio)
          container.appendChild(followers)
          container.appendChild(following)
          container.appendChild(repos)
          container.appendChild(location)
          root.appendChild(container);
        }
      }
    });
};

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const value = searchBar.value;
  // console.log(value);
  getApi(value);
});
