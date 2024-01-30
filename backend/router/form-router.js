const express = require("express");
const router = express.Router();
const formControllers = require("../controllers/form-controller")

router.route("/form").post(formControllers.form);
router.route("/formdata").post(formControllers.formData);

module.exports = router;