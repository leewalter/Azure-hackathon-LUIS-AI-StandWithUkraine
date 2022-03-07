// Copyright (c) 2022, Walter Lee
// All rights reserved.

// This source code is licensed under the Apache2-style license found in the
// LICENSE file in the root directory of this source tree. 

const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var subscriptionKey = "4c327b12b8954c53bea72ffbe7bf145f";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
// change to your own Azure translator region below: 
var location = "westus2";

axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'uk',
        'to': ['en', 'zh', 'yue', 'es','it', 'fr', 'hi', 'ar', 'ru', 'pt-pt', 'id', 'ja-JP', 'nl', 'de' ,  'ko-KR' ]
    },
    data: [{
        'text': 'У межах постійного діалогу провів чергову розмову з @POTUS . На порядку денному були питання безпеки, фінансової підтримки України та продовження санкційної політики щодо РФ.'
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data, null, 4));
})
