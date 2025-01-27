const errHandler=(err,req,res,next)=>{
    res.status(err.status || 500 ).json({message:err.message || 'Internal Server error'})
}

module.exports=errHandler