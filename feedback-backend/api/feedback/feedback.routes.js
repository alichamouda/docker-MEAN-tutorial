var Feedbacks = require('./feedback.controller');
var cors = require('cors')
module.exports = function(router) {
    router.post('/feedback',cors({origin:'*'}), Feedbacks.createFeedback);
    router.get('/feedback',cors({origin:'*'}), Feedbacks.getFeedbacks);
    router.get('/feedback/:message',cors({origin:'*'}), Feedbacks.getFeedback);
    router.put('/feedback/:id',cors({origin:'*'}), Feedbacks.updateFeedback);
    router.delete('/feedback/:id',cors({origin:'*'}), Feedbacks.removeFeedback);
}