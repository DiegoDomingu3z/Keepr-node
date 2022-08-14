import mongoose from 'mongoose'
import { KeepSchema } from './Keep'
import { VaultSchema } from './Vault'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const VaultKeepSchema = new Schema({
    vaultId: { type: ObjectId, required: true, ref: 'Vault' },
    KeepId: { type: ObjectId, required: true, ref: 'Keep' }
}, { timestamps: true, toJSON: { virtuals: true } })

VaultSchema.virtual('vault', {
    localField: 'vaultId',
    foreignField: '_id',
    ref: 'Vault',
    justOne: true
})

KeepSchema.virtual('keep', {
    localField: 'KeepId',
    foreignField: '_id',
    ref: 'keep',
    justOne: true
})