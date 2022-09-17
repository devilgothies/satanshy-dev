const api = 'https://discord-web-api.glitch.me/discord/user/'
const id = '484088238403878912'

'use strict';
fetch((api + id), {
  method: "GET",
  mode: "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  var avatar = fieldDescribe.url
  var username = fieldDescribe.username
  var tag = fieldDescribe.discriminator
  document.getElementById("avatar").src = avatar;
  var $username = document.querySelector('#username'),
    username
  $username.innerHTML = username + "#" + tag
}).catch(function() {
  console.warn("Something went wrong. xd");
});

// MAINTAINER INFORMATION
fetch(('https://discord-web-api.glitch.me/discord/user/' + "484088238403878912"), { method: "GET", mode: "cors"
}).then(function(r) {
  if (r.ok) { return r.json();} return Promise.reject(r);
}).then(function(dc) {
  console.log("[</>] Developed and maintained by " + dc.username + "#" + dc.discriminator);
  console.log("https://satanshy.com")
}).catch(function() { console.warn("2nd fetch");});
