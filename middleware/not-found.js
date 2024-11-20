const notFound = (req, res) => {
    console.log("pppppp");
    
    res.status(404).send('Route does not exist')
}

module.exports = notFound
