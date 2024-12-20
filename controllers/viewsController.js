module.exports = {
    home: (req, res) => {
        res.render('index');
    },

    form_add: (req, res) => {
        res.render('add-product');
    },

    form_edit: (req, res) => {
        res.render('edit-product');
    }
}


