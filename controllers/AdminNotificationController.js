const AdminNotification = require('../models/AdminNotification');

// Create a new admin notification
exports.createAdminNotification = async (req, res) => {
  try {
    const adminNotification = new AdminNotification(req.body);
    await adminNotification.save();
    res.status(201).send(adminNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all notifications for a Admin
exports.getAdminNotificationsByAdminId = async (req, res) => {
  try {
    const adminNotification = await AdminNotification.find({ Admin_id: req.params.adminId });
    res.status(200).send(adminNotification);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete a Admin notification by ID
exports.deleteAdminNotificationById = async (req, res) => {
  try {
    const adminNotification = await AdminNotification.findByIdAndDelete(req.params.id);
    if (!adminNotification) {
      return res.status(404).send();
    }
    res.status(200).send(adminNotification);
  } catch (error) {
    res.status(500).send(error);
  }
};
