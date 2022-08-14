import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class KeepsService {


    async getAll() {
        const keep = await dbContext.Keep.find().populate('creator', 'name picture')
        return keep
    }

    async getById(id) {
        const keep = await dbContext.Keep.findById(id).populate('creator', 'name')
        if (id == null) {
            throw new BadRequest('Invalid Id')
        }
        return keep
    }

    async create(body) {
        const newKeep = await dbContext.Keep.create(body)
        await newKeep.populate('creator', 'name picture')
        return newKeep
    }

}


export const keepsService = new KeepsService()

