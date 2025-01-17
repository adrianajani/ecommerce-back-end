// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

// module.exports = router;


const router = require('express').Router();
const categoryRoutes = require('./api/category-routes');

router.use('/categories', categoryRoutes);

module.exports = router;