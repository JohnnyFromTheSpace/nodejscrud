module.exports = {
    home: (req, res, next) => {
        res.render('index', {
            title  : 'Home',
        });
    }
};
