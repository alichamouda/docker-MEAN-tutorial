var Feedbacks = require('./feedback.controller');
var cors = require('cors')
module.exports = function(router) {
    router.post('/create',cors({origin:'*'}), Feedbacks.createFeedback);
    router.get('/get',cors({origin:'*'}), Feedbacks.getFeedbacks);
    router.get('/get/:message',cors({origin:'*'}), Feedbacks.getFeedback);
    router.put('/update/:id',cors({origin:'*'}), Feedbacks.updateFeedback);
    router.delete('/remove/:id',cors({origin:'*'}), Feedbacks.removeFeedback);
}