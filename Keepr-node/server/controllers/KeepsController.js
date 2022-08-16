import { Auth0Provider } from "@bcwdev/auth0provider";
import { keepsService } from "../services/KeepsService";
import BaseController from "../utils/BaseController";




export class KeepsController extends BaseController {
    constructor() {
        super('api/keeps')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            // .put('/:id', this.edit)
            .delete('/:id', this.remove)
    }



    async getAll(req, res, next) {
        try {
            const keep = await keepsService.getAll()
            return res.send(keep)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const keep = await keepsService.getById(req.params.id)
            return res.send(keep)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const newKeep = await keepsService.create(req.body)
            return res.send(newKeep)
        } catch (error) {
            next(error)
        }
    }


    async remove(req, res, next) {
        try {
            await keepsService.remove(req.params.id, req.userInfo.id)
            return res.send("deleted")
        } catch (error) {
            next(error)
        }
    }


    //NOTE might not need an update
    // async edit(req, res, next) {
    //     try {
    //         req.body.creatorId = req.userInfo.id
    //         const updatedKeep = await keepsService.update(req.params.id, req.body)
    //         return res.send(updatedKeep)
    //     } catch (error) {
    //         next(error)
    //     }
    // }

}