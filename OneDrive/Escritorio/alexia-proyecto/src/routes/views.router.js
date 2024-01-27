import {Router} from 'express'

const  router = Router()

router.get('/', (request, response) => {
    response.render('index', {});
});

export default router