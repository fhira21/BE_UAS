const express = require('express');
const router = express.Router();
const AdminNotificationController = require('../controllers/AdminNotificationController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

// Create a new admin notification
router.post('/', isAuthenticated, isAdmin, AdminNotificationController.createAdminNotification);

// Get all notifications for a admin
router.get('/admin/:adminId', isAuthenticated, isAdmin, AdminNotificationController.getAdminNotificationsByAdminId);

// Delete a admin notification by ID
router.delete('/:id', isAuthenticated, isAdmin, AdminNotificationController.deleteAdminNotificationById);

module.exports = router;
