/*
  "spells": "https://api-beta.open5e.com/spells/",
    "monsters": "https://api-beta.open5e.com/monsters/",
    "backgrounds": "https://api-beta.open5e.com/backgrounds/",
    "planes": "https://api-beta.open5e.com/planes/",
    "sections": "https://api-beta.open5e.com/sections/",
    "feats": "https://api-beta.open5e.com/feats/",
    "conditions": "https://api-beta.open5e.com/conditions/",
    "races": "https://api-beta.open5e.com/races/",
    "classes": "https://api-beta.open5e.com/classes/",
    "magicitems": "https://api-beta.open5e.com/magicitems/",
    "weapons": "https://api-beta.open5e.com/weapons/",
    "search": "https://api-beta.open5e.com/search/"
*/

const axios = require('axios');
// const admin = require("firebase-admin");

// const serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://dungeons-and-firebase.firebaseio.com"
// });


function grabRace(){
    axios({
        method: 'get',
        url: 'https://api-beta.open5e.com/races/',
        responseType: 'stream'
      })
        .then(function (response) {
          console.log(response);
        });
}






function main(){
    grabRace();
}
main();