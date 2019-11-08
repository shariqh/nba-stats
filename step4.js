/*
    Step 4:
        - make additional api request for player stats for their first year through player ID
        - log paginated response
*/

const axios = require('axios');

var luka;
var lukaStats;
var dirk;
var dirkStats;

const getLuka = () => {
     return axios.get('https://balldontlie.io/api/v1/players?search=doncic');
};

const getDirk = () => {
    return axios.get('https://balldontlie.io/api/v1/players?search=nowitzki')
};

const getLukaStats = () => {
    return axios.get('https://balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=132');
};

(async () => {
    await getLuka().then(resp => {
        luka = resp.data.data[0];
    });

    await getDirk().then(resp => {
        dirk = resp.data.data[0];
    });

    await getLukaStats().then(resp => {
        lukaStats = resp.data;
        console.log(lukaStats);
    })
})();
