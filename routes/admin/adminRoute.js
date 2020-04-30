const express = require('express');
const router = express.Router();

const centerController = require('../../controllers/admin/isolation_centers');

router.get('/isolation-centers', centerController.Index);

router.get('/isolation-centers/:center', centerController.getIsolationCenter);

router.post('/isolation-centers', centerController.createIsolationCenter);

router.put('/isolation-centers/:center', centerController.updateIsolationCenter);

router.delete('/isolation-centers', centerController.deleteIsolationCenter);

router.post('/states', centerController.createState);


module.exports = router;