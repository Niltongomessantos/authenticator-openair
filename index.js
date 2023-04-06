const axios = require('axios')


    class auth {
        authenticator = (url, account, username, password, jumpTo) => {
            axios({
                method: "post",
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    account:  account,
                    username: username,
                    password: password,
                    jumpTo:   jumpTo
                },
            }
            )
            .then(function (response) {
            const url = response.data
            console.log(url)
        })
        }
    }
    module.exports = new auth