const express = require("express");
const {
  createReqInventory,
  getSingleRequest,
  getAllRequest,
  deleteRequest,
  updateRequest,
  myRequests,
} = require("../controllers/reqInventoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/reqInventory/new").post( createReqInventory);
router.route("/reqInventory/:id").get( getSingleRequest);
router.route("/requests/me/:id").get( myRequests);

router
  .route("/admin/requests")
  .get( getAllRequest);

router
  .route("/admin/request/:id")
  .put( updateRequest)
  .delete( deleteRequest);

module.exports = router;
