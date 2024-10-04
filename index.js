const axios = require('axios');
const algoliasearch = require('algoliasearch');
const StoryblokClient = require('storyblok-js-client');

// Important: make sure to use a proper way to secure your Algolia token information.

const ALGOLIA_INDEX_NAME = 'storyblok-articles';

const algolia = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_ADMIN_TOKEN);
const storyblok = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
});

// define options for the API requests we will send to Storyblok.
const options = {
    starts_with: 'articles/', // exchange with the folder you want to index, can be blank if you want to index everything.
    per_page: 100, // increases the default per page limit of 25 to 100 entries per page.
    page: 1,
    version: 'draft', // change to published after developing
};

// initial get requests that is used to retrieve the total amount of pages
storyblok
    .get(`cdn/stories/`, options)
    .then(async (res) => {
        // get total based on options
        const total = res.headers.total;
        const maxPage = Math.ceil(total / options.per_page);

        // prepare necessary requests to retrieve all articles
        let contentRequests = [];
        for (let page = 1; page <= maxPage; page++) {
            contentRequests.push(
                storyblok.get(`cdn/stories/`, { ...options, page })
            );
        }

        // init storyblok articles index in algolia
        const index = algolia.initIndex(ALGOLIA_INDEX_NAME);

        axios
            .all(contentRequests)
            .then(
                axios.spread(async (...responses) => {
                    // combine all article stories into one array
                    let records = [];
                    responses.forEach((response) => {
                        let data = response.data;
                        records = records.concat(data.stories);
                    });

                    records.forEach((record) => {
                        record.objectID = record.uuid; // use Storyblok uuid as objectID in Algolia so we can auto update content.
                    });

                    // persist in Algolia
                    // Recommended Batch sizes 1.000 - 10.000 per Batch according to documentation.
                    await index
                        .saveObjects(records, {
                            autoGenerateObjectIDIfNotExist: false,
                        })
                        .wait()
                        .catch((e) => {
                            console.log(e);
                        });
                    console.log(
                        'Index stored with ' + records.length + ' Entries.'
                    );
                })
            )
            .catch((e) => {
                console.log(e);
            });
    })
    .catch((e) => {
        console.log(e);
    });
