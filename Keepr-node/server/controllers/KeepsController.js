import { keepsService } from "../services/KeepsService";
import BaseController from "../utils/BaseController";




export class KeepsController extends BaseController {
    constructor() {
        super('api/keeps')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
            .post('', this.create)
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
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const newKeep = await keepsService.create(req.body)
        } catch (error) {
            next(error)
        }
    }
}