const axios = require('axios');

const access_token = 'ya29.a0AfB_byDaW5UgHaY_W7azpY7ScTRvRUlP3LLQoKgyvGUrFMTh2mOCq64ub6d3BvsMFVH4Ndy-__E1eo2qGOJvbpW4-Q9guIBiagXTIN7cM6TsmqKn9CxrEK9UHvK9q3xdjW2ev5Yn_veXvJAcTATFc3mJjObVgS72JjTRcFFl1AaCgYKAQQSARMSFQHsvYlsUNm5oC0QnfuV4sOLyxizGw0177'

const fetchEmail = () => {
    return new Promise((resolve , reject)=> {
        const getMessage = (ids) => {
            const email = axios.get(`https://gmail.googleapis.com/gmail/v1/users/shivamkoolwal14@gmail.com/messages/${ids[0]}` , {
                headers : {
                    'Authorization' : `Bearer ${access_token}`
                }
            })
        
            email.then(res => {
                let snip = res.data.snippet;
                snip = snip.split(' ');
                snip.forEach(term => {
                    let num = Number(term);
                    if(!isNaN(num)){
                        resolve(num);
                    }
                })
            })
            .catch(err => {
                reject(err);
            })
        }
        
        const reqEmail = (getMessage) => {
            let ids = [];
            const req = axios.get('https://gmail.googleapis.com/gmail/v1/users/shivamkoolwal14@gmail.com/messages' , {
                headers : {
                    'Authorization' : `Bearer ${access_token}`
                }
            })
        
            req.then(res => {
                ids = res.data.messages.map(emailData => {
                    return emailData.id;
                })
                getMessage(ids);
            })
            .catch(err => {
                console.log(err);
            })
        }
        
        reqEmail(getMessage);
    })
}

module.exports = {fetchEmail};


