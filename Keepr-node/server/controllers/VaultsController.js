import { Auth0Provider } from "@bcwdev/auth0provider";
import { vaultsService } from "../services/VaultsService";
import BaseController from "../utils/BaseController";






export class VaultsController extends BaseController {
    constructor() {
        super('api/vaults')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .delete('/:id', this.removeVault)


    }

    async getAll(req, res, next) {
        try {
            const vaults = await vaultsService.getAll()
            return res.send(vaults)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const vault = await vaultsService.getById(req.params.id)
            return res.send(vault)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const newVault = await vaultsService.create(req.body)
            return res.send(newVault)
        } catch (error) {
            next(error)
        }
    }

    async removeVault(req, res, next) {
        try {
            const vault = await vaultsService.removeVault(req.params.id)
            return res.send(vault)
        } catch (error) {
            next(error)
        }
    }

}