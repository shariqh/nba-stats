/*
    Step 1
        - introduce the problem
            Comparing two NBA players to determine who was better in their first season
        - show/install axios
        - make first api request
        - log data to console
*/

const axios = require('axios');

let luka;

const getLuka = () => {
    axios.get('https://balldontlie.io/api/v1/players?search=doncic')
        .then(resp => {
            luka = resp.data.data[0];
            console.log(luka);
        })
};

getLuka();