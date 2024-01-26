const multer  = require('multer')



function fileFilter (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
           // To accept the file pass `true`, like so:
           cb(null, true)  
    } else
        // To reject this file pass `false`, like so:
        cb(null, false)
      };


const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  });
const upload = multer({limits: 1024 * 1024 * 4, fileFilter, storage});

module.exports = upload;