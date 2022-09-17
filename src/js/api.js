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

'use strict';
fetch(('https://discord-web-api.glitch.me/discord/user/' + "484088238403878912"), {
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

  console.log("[</>] Developed and maintained by " + username + "#" + tag)
  console.log("https://satanshy.com")
}).catch(function() {
  console.warn("Something went wrong. xd");
});
