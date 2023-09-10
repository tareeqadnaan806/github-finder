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
    .then((data) => {
      console.log(data);
      if (data.message === "Not Found" || value === "") {
        const Error = document.createElement("h2");
        Error.innerText = "User Not Found Please Enter valid ID";
        root.appendChild(Error);
      } else {
        const root = document.getElementById("root");
        root.innerHTML = `
        <section>
          <div class="heading">
            <div class="left">
            <img src="${data.avatar_url}" alt="">
              <div class="profile">
                <div>${data.name}</div>
                <div>${data.login}</div>
              </div>
            </div>
            <div class="right">
              <div>Joined: ${data.created_at.slice(0, 10)}</div>
              <div>${data.location}</div>
            </div>
          </div>
        </section>

        <section>
          <p class="bios">${data.bio}</p>
        </section>

        <section class="asdf">
          <div class="repos">
            <p>Repos</p>
            <p>${data.public_repos}</p>
          </div>
          <div class="folloers">
            <p>Followers</p>
            <p>${data.followers}</p>
          </div>
          <div class="following">
            <p>Following</p>
            <p>${data.following}</p>
          </div>
        </section>
          `;
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
