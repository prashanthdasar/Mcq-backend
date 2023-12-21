const express = require('express');
const { getAllMCQs, updateMCQ, deleteMCQ, createMCQ } = require('../controllers/mcqController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/admin/mcqs').get(getAllMCQs);

router.route('/admin/mcq/:id').putisAuthenticatedUser, authorizeRoles("admin"),(updateMCQ)

router.route('/admin/mcq/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteMCQ);

router.route('/admin/mcq/new').post(isAuthenticatedUser, authorizeRoles("admin"), createMCQ);

module.exports = router;
