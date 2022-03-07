// CUSTOMER ERROR MIDDLEWARE
// throws a new error if someone browses to a URL that is not defined by a route
const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalURL}`);
	res.status(404);
	next(err);
};

// CUSTOM ERROR MIDDLEWARE
// statusCode checks the returned error code, if it is 200, it will change it to 500, else, it will show the status code and then deliver the error message, and if in dev, will also deliver the stack error message
const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

export { notFound, errorHandler };
