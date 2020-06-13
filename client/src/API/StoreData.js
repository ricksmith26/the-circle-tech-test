const axios = require('axios').default;

const storeData = (quizData) => {

    const apiEndpoint = window.awsAPI.apiEndpoint + "?quizId=" + quizData.quizId;
    console.log(apiEndpoint, quizData);

    axios.post(apiEndpoint, { quizData })
       .then(res => {
         console.log(res);
         console.log(res.data);
       });
}

exports.storeData = storeData;