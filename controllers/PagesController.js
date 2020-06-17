const viewPath = ('pages');

// Path Controller
exports.contact = (req, res) => {
    res.render(`${viewPath}/contact`, {
        pageTitle: 'Contact US'
    });
};

exports.index = (req, res) => {
    res.render(`${viewPath}/`, {
        pageTitle: 'Contact US'
    });
};