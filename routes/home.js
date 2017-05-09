/**
 * Created by Administrator on 2017/5/9.
 */
exports.index = (req,res,next) => {
    res.render('index',{
        title:'我的首页'
    })
}