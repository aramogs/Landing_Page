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

router.get('/', routesController.index_GET);
router.get('/login/:id', routesController.login);
router.get('/alta_anuncio/login', routesController.alta_anuncio_GET);
router.post('/alta_anuncio/tipo', routesController.alta_anuncio_tipo_POST);
router.post('/alta_anuncio/anuncio', routesController.alta_anuncio_anuncio_POST);
router.post('/alta_anuncio/archivo', routesController.alta_anuncio_archivo_POST);
router.post('/guardar_anuncio',routesController.guardar_anuncio_POST);
router.post('/guardar_archivo', upload.single('pdf') ,routesController.guardar_archivo_POST);
router.post('/cambiar_directorio',routesController.cambiar_directorio_POST);
router.post('/cambiar_directorio2',routesController.cambiar_directorio2_POST);
router.post('/guardar_directorio',routesController.guardar_directorio_POST);
router.post('/eliminar_directorio',routesController.eliminar_directorio_POST);

router.get('*', (req, res) => {
  res.send('404 Page not found');
});
module.exports = router;