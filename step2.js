/*
    Step 2:
        - make second api request
        - log to console
*/

const axios = require('axios');

let luka;
let dirk;

const getLuka = () => {
    axios.get('https://balldontlie.io/api/v1/players?search=doncic')
        .then(resp => {
            luka = resp.data.data[0];
            console.log(luka);
        })
};

const getDirk = () => {
    axios.get('https://balldontlie.io/api/v1/players?search=nowitzki')
        .then(resp => {
            dirk = resp.data.data[0];
            console.log(dirk);
        })
};

getLuka();
getDirk();