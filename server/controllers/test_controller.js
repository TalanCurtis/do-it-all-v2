module.exports = {
    testGet: (req, res, next) => {
        var myResponse = "test get endpoint hit"
        console.log(myResponse)
        res.status(200).send(myResponse)
    },
    // testGetDB: (req, res, next) => {
    //     app.get('db').testGetAll().then((responseFromDB) => {
    //         res.status(200).send(responseFromDB)
    //     })
    // }
}
