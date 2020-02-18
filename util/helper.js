exports.asyncHandler = (f) => (req,res,next) => {
    return Promise.resolve(f(req,res,next)).catch(next);
};

exports.sendResponse = (res,statusCode,data)=> {

    // Log all responses here - 
    // set up logger todo 
    return res.status(statusCode).send(data);   
};