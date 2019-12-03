const express = require('express');
const router = express.Router();
const routesController = require('./routesController')

var multer  = require('multer')

var storage = multer.diskStorage(
  {
      destination: 'public/uploads',
      filename: function ( req, file, cb ) {
        pdfName="anuncio"
          cb( null, pdfName+".pdf");
      }
  }
);

var upload = multer( { storage: storage } );

//Routes

router.get('/landing_page', routesController.index_GET);
router.get('/landing_page/login/:id', routesController.login);
router.get('/landing_page/alta_anuncio/login', routesController.alta_anuncio_GET);
router.post('/landing_page/alta_anuncio/tipo', routesController.alta_anuncio_tipo_POST);
router.post('/landing_page/alta_anuncio/anuncio', routesController.alta_anuncio_anuncio_POST);
router.post('/landing_page/alta_anuncio/archivo', routesController.alta_anuncio_archivo_POST);
router.post('/landing_page/guardar_anuncio',routesController.guardar_anuncio_POST);
router.post('/landing_page/guardar_archivo', upload.single('/pdf') ,routesController.guardar_archivo_POST);
router.post('/landing_page/cambiar_directorio',routesController.cambiar_directorio_POST);
router.post('/landing_page/cambiar_directorio2',routesController.cambiar_directorio2_POST);
router.post('/landing_page/guardar_directorio',routesController.guardar_directorio_POST);
router.post('/landing_page/eliminar_directorio',routesController.eliminar_directorio_POST);

router.get('*', (req, res) => {
  res.send('404 Page not foundddddssssddd');
});
module.exports = router;