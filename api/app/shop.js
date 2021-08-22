const express = require('express');
const router = express.Router();
const upload = require('./middleware/upload');
const axios = require('axios');
const Shop = require('./models/Shop');
const config = require('./config');

const createRouter = () => {
    router.get('/', async(req,res) => {
        try {
            const shops = await Shop.find();
            res.send(shops);
        } catch(e) {
            console.error(e);
        }
    });   
}
module.exports = createRouter;