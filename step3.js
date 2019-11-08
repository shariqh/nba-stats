/*
    Step 3:
        - refactor api requests
        - assign to responses to variables
*/

const axios = require('axios');

let luka;
let dirk;

const getLuka = () => {
     return axios.get('https://balldontlie.io/api/v1/players?search=doncic');
};

const getDirk = () => {
    return axios.get('https://balldontlie.io/api/v1/players?search=nowitzki')
};

const compare = async () => {
    luka = await getLuka();
    luka = luka.data.data[0];

    await getDirk().then(resp => {
        dirk = resp.data.data[0];
    });

    console.log(luka);
    console.log(dirk);
};

compare();