# Azure-hackathon-LUIS-AI-StandWithUkraine

This demo is to use Azure Cognitive LUIS AI translator to translate Ukranian language tweets by Ukraine President @ZelenskyyUa into 15 different 
and most widely used  major languages so many others in the world can read and understand the current crisis at Ukraine. 
Azure Cognitive Services Translator is very accurate, fast, developer friendly and powerful. 
Only a few lines of codes can translate Ukranian language ACCURATELY into 15 most widely used major languages in ~0.5 seconds.

Sample code:
```
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

// change to your own Azure translator key below: 
var subscriptionKey = "4xxxxxxxxxxxxxxxxxxxxxxxxxxxxx5f";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
// change to your own Azure translator region below: 
var location = "eastus2";

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
   
 // add sample Ukranian language tweet by Ukraine President @ZelenskyyUa below.
 // After you got Twitter API access, then can read directly from the API, translate and then retweet so more can read the truth about Ukraine ! 
    data: [{
        'text': 'У межах постійного діалогу провів чергову розмову з @POTUS . На порядку денному були питання безпеки, фінансової підтримки України та продовження санкційної політики щодо РФ.'
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data, null, 4));
})

```
