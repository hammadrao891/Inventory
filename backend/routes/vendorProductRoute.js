const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/vendorProductController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/vendorproducts").get(getAllProducts);

router.route("/admin/vendorproducts").get( getAdminProducts);

router
  .route("/admin/vendorproduct/new/:id")
  .post( createProduct);

router
  .route("/admin/vendorproduct/:id")
  .put( updateProduct)
  .delete( deleteProduct);

router.route("/vendorproduct/:id").get(getProductDetails);

router.route("/review").put( createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete( deleteReview);

module.exports = router;
