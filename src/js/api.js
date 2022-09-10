const api = 'https://discordlookup.mesavirep.xyz/'
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
    var avatar = fieldDescribe.avatar.link
    var username = fieldDescribe.tag
    document.getElementById("avatar").src = avatar;
    var $username = document.querySelector('#username'),
        username
        $username.innerHTML = username
}).catch(function() {
  console.warn("Something went wrong.");
});
