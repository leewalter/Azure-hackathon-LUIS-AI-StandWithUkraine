# Azure-hackathon-LUIS-AI-StandWithUkraine

This demo is to use Azure Cognitive LUIS AI translator to translate Ukranian language tweets by Ukraine President @ZelenskyyUa into 15 different 
and most widely used  major languages so many others in the world can read and understand the current crisis at Ukraine. 
Azure Cognitive Services Translator is very accurate, fast, developer friendly and powerful. 
Only a few lines of codes can translate Ukranian language ACCURATELY into 15 most widely used major languages in ~0.5 seconds.

<p>My Ukrainian friends told me it is VERY NATIVELY ACCURATE and much better than Google Translate. See my LinkedIn post at https://www.linkedin.com/feed/update/urn:li:activity:6906044994268860416/  Google translate has a couple mistakes inside but Azure translate is ~100% natively correct ! 

Sample code:
```
// Copyright (c) 2022, Walter Lee
// All rights reserved.

// This source code is licensed under the MIT-style license found in the
// LICENSE file in the root directory of this source tree. 

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
Sample Results:


```
[Running] node "c:\Users\cheer\Documents\Azure\ukraine-english-translator.js"
[
    {
        "translations": [
            {
                "text": "Within the framework of the constant dialogue, I had another conversation with @POTUS. On the agenda were issues of security, financial support for Ukraine and the continuation of the sanctions policy towards the Russian Federation.",
                "to": "en"
            },
            {
                "text": "在不断对话的框架内，我与@POTUS进行了另一次对话。议程上包括安全问题、对乌克兰的财政支助以及继续对俄罗斯联邦的制裁政策。",
                "to": "zh-Hans"
            },
            {
                "text": "不斷對話緊嘅框架內，我與@POTUS進行了另一次對話。 議程上包括安全問題、對烏克蘭嘅財政支助以及繼續對俄儸斯聯邦的制裁政策。",
                "to": "yue"
            },
            {
                "text": "En el marco del diálogo constante, tuve otra conversación con @POTUS. En el programa figuraban cuestiones de seguridad, apoyo financiero a Ucrania y la continuación de la política de sanciones contra la Federación de Rusia.",
                "to": "es"
            },
            {
                "text": "Nell'ambito del dialogo costante, ho avuto un'altra conversazione con @POTUS. All'ordine del giorno c'erano questioni di sicurezza, sostegno finanziario all'Ucraina e la continuazione della politica di sanzioni nei confronti della Federazione Russa.",
                "to": "it"
            },
            {
                "text": "Dans le cadre du dialogue constant, j’ai eu une autre conversation avec @POTUS. Les questions de sécurité, d’appui financier à l’Ukraine et de maintien de la politique de sanctions à l’égard de la Fédération de Russie étaient à l’ordre du jour.",
                "to": "fr"
            },
            {
                "text": "निरंतर संवाद के ढांचे के भीतर, मैंने @POTUS के साथ एक और बातचीत की। एजेंडे में सुरक्षा, यूक्रेन के लिए वित्तीय सहायता और रूसी संघ के प्रति प्रतिबंध नीति की निरंतरता के मुद्दे थे।",
                "to": "hi"
            },
            {
                "text": "في إطار الحوار المستمر ، أجريت محادثة أخرى مع @POTUS. وكان على جدول الأعمال مسائل تتعلق بالأمن والدعم المالي لأوكرانيا ومواصلة سياسة الجزاءات تجاه الاتحاد الروسي.",
                "to": "ar"
            },
            {
                "text": "В рамках постоянного диалога у меня состоялся еще один разговор с @POTUS. На повестке дня были вопросы безопасности, финансовой поддержки Украины и продолжения санкционной политики в отношении Российской Федерации.",
                "to": "ru"
            },
            {
                "text": "No âmbito do diálogo constante, tive outra conversa com @POTUS. Na ordem do dia estavam questões de segurança, de apoio financeiro à Ucrânia e da continuação da política de sanções em relação à Federação Russa.",
                "to": "pt-PT"
            },
            {
                "text": "Dalam kerangka dialog yang konstan, saya melakukan percakapan lain dengan @POTUS. Dalam agenda tersebut adalah masalah keamanan, dukungan keuangan untuk Ukraina dan kelanjutan kebijakan sanksi terhadap Federasi Rusia.",
                "to": "id"
            },
            {
                "text": "絶え間ない対話の枠組みの中で、私は@POTUSと別の会話をしました。議題は、安全保障、ウクライナへの財政支援、ロシア連邦に対する制裁政策の継続の問題であった。",
                "to": "ja"
            },
            {
                "text": "In het kader van de constante dialoog had ik nog een gesprek met @POTUS. Op de agenda stonden kwesties als veiligheid, financiële steun aan Oekraïne en de voortzetting van het sanctiebeleid ten aanzien van de Russische Federatie.",
                "to": "nl"
            },
            {
                "text": "Im Rahmen des ständigen Dialogs hatte ich ein weiteres Gespräch mit @POTUS. Auf der Tagesordnung standen Fragen der Sicherheit, der finanziellen Unterstützung der Ukraine und der Fortsetzung der Sanktionspolitik gegenüber der Russischen Föderation.",
                "to": "de"
            },
            {
                "text": "끊임없는 대화의 틀 안에서 저는 @POTUS 또 다른 대화를 나눴습니다. 의제에는 안보 문제, 우크라이나에 대한 재정적 지원, 러시아 연방에 대한 제재 정책의 지속이 있었다.",
                "to": "ko"
            }
        ]
    }
]

[Done] exited with code=0 in 0.505 seconds

```

