module.exports={
    checkLogin:function checkLogin(req,res,next){
        if(!req.session.user){
            req.flash('error','miss Login');
            return res.redirect('/signin');
        }
        next();
    },
    checkNotLogin:function checkNotLogin (req,res,next) {
        if(req.session.user){
            req.flash('error','login!');
            return res.redirect('back');
        }
        next();
    }
};