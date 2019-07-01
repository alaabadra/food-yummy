const {
    handelNotFound,
    handleFood,
    handleDrink,
    handleHomePage,
    handelStatic,
    handlesuggestion
} = require('./handler')

const router = ((request, response) => {
    endPoint = request.url;
    if (endPoint === '/') {
        handleHomePage(response);
    } else if (endPoint === '/food') {
        handleFood(response);
    } else if (endPoint === '/drink') {
        handleDrink(response)
    } else if (endPoint.includes('public')) {
        handelStatic(endPoint, response)
    } else if (endPoint === '/suggestion') {
        handlesuggestion(request, response)
    } else {
        handelNotFound(response)
    }
})

module.exports = router;