"use strict";
console.log("hello world");

const linksSocialMedia = {
  github: "rafaelbenine",
  youtube: "UCEJjToJx2rQnaew_l1Kespw",
  facebook: "rafael.benine.1",
  instagram: "beninerafael",
  twitter: "@beninerafael1",
};

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMedia();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });

  //   const request = await fetch(url);
  //   const data = await request.json();
  console.log(data);
}
getGitHubProfileInfos();
