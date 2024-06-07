const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: dzdosjf3e,
  api_key: 65846581915761,
  api_secret: fvLoX0_Y_7BbjooJVSR4JlWRDuc
})

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})


module.exports = router;
