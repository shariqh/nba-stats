/*
    Step 5:
        - go through paginated responses
        - collect points to array
*/

const axios = require('axios');

let luka;
let lukaStats = [];
let dirk;
let dirkStats = [];
let pageNumber;

const getLuka = () => {
     return axios.get('https://balldontlie.io/api/v1/players?search=doncic');
};

const getDirk = () => {
    return axios.get('https://balldontlie.io/api/v1/players?search=nowitzki')
};

const getLukaStats = (pageNumber) => {
    return axios.get(`https://balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=132&page=${pageNumber}`);
};

const getDirkStats = (pageNumber) => {
    return axios.get(`https://balldontlie.io/api/v1/stats?seasons[]=1998&player_ids[]=346&page=${pageNumber}`);
};

(async () => {
    await getLuka().then(resp => {
        luka = resp.data.data[0];
    });

    await getDirk().then(resp => {
        dirk = resp.data.data[0];
    });

    await getLukaStats(pageNumber).then(async resp => {
        const pages = resp.data.meta.total_pages;
        let currentPage = resp.data.meta.current_page;
        while (currentPage <= pages) {
            await getLukaStats(currentPage).then(r => {
                lukaStats = lukaStats.concat(r.data.data);
                currentPage += 1;
            })
        }
    });

    await getDirkStats(pageNumber).then(async resp => {
        const pages = resp.data.meta.total_pages;
        let currentPage = resp.data.meta.current_page;
        while (currentPage <= pages) {
            await getDirkStats(currentPage).then(r => {
                dirkStats = dirkStats.concat(r.data.data);
                currentPage += 1;
            })
        }
    });
})();
