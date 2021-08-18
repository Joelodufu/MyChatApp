const express = require('express')
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({names:'Joellee'})
});

module.exports= router;