const {CustomAPIError} = require('../error/Custom-Error')

const errorHandlerMiddlware = (err, req, res, next) => {

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json(
      {
         msg:err.message
       }
     )
  }
   return res.status().json({msg:'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddlware