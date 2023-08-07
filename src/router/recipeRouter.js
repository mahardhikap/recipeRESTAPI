const {showRecipeOnly, postRecipeOnly, putRecipeByIdOnly, delRecipeByIdOnly, sortedRecipe, searchedRecipe, showRecipeById, showRecipeByUser} = require('../controller/recipeController')
const app = require('express')
const router = app.Router()
const {protect} = require('../middleware/jwt')
const upload = require('../middleware/multer')


router.get('/recipe', showRecipeOnly)
router.post('/recipe', protect, upload.single('image'), postRecipeOnly)
router.put('/recipe/:id', protect, upload.single('image'), putRecipeByIdOnly)
router.delete('/recipe/:id', protect, delRecipeByIdOnly)
router.get('/recipe/sorted', sortedRecipe)
router.get('/recipe/searched', searchedRecipe)
router.get('/recipe/id/:id', showRecipeById)
router.get('/recipe/user/:id', showRecipeByUser)



module.exports = router