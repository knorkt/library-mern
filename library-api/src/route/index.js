const express = require('express');
const router = express.Router();
const bookRoutes = require('./book.route');
// Future additions:
// const memberRoutes = require('./member.routes');
// const subscriptionRoutes = require('./subscription.routes');
// const roleRoutes = require('./role.routes');

router.use('/books', bookRoutes);
// router.use('/members', memberRoutes);
// router.use('/subscriptions', subscriptionRoutes);
// router.use('/roles', roleRoutes);

module.exports = router;