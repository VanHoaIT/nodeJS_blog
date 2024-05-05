class NewControllers {
    // GET /news
    index(req, res) {
        res.render('news');
    }
    //GET /news/:slug
    show(req, res) {
        res.send('hello News');
    }
}

module.exports = new NewControllers();
