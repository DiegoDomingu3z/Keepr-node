import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"




class VaultsService {


    async getAll() {
        const vaults = await dbContext.Vault.find().populate('creator')
        return vaults
    }
    async getById(id) {
        const vault = await dbContext.Vault.findById(id).populate('creator')
        return vault
    }
    async create(body) {
        const newVault = await dbContext.Vault.create(body)
        await newVault.populate('creator')
        return newVault
    }

    async removeVault(id) {
        const vault = await dbContext.Vault.findById(id).populate('creator')
        if (vault?.creatorId?.toString()) {
            throw new BadRequest("forbidden")
        }

    }

}



export const vaultsService = new VaultsService()