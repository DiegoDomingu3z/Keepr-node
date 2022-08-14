import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const VaultSchema = new Schema({
    creatorId: { type: ObjectId, required: true, ref: 'Account' },
    img: { type: String, required: true },
    description: { type: String, required: true },
    isPrivate: { type: Boolean, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })

VaultSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})