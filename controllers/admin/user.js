const bcrypt = require('bcryptjs');

const User = require('../../models/user');

exports.userLogin = (req, res, next) => {
    
    res.render('admin/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.isLoggedIn,
    });
};

exports.postUserLogin = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username})
    .then(user => {

        if(!user) {
            res.redirect('/admin/login');
        }

       return bcrypt.compare(password, user.password)
       .then(isValidPassword => {

            if(isValidPassword)
                return res.redirect('/statictic');
                
            return res.redirect('/admin/login');    
       })
       .catch(err =>{});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getSignup = (req, res, next) => {
    
    res.render('admin/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: req.isLoggedIn,
    });
};

exports.postSignup = (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirm_password;

    User.findOne({username: username})
    .then(user => {

        if(user) {
            return redirect('/admin/signup');
        }

        const passwordHash = bcrypt.hash(password, 12);

        return passwordHash.then(passwordHashed => {
            const newUser = new User({
                username: username,
                password: password,
            });
    
            return newUser.save()
        })
        .then(result => {
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err);
    });
};


