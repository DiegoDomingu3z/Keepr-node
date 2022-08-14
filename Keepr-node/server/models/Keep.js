import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const KeepSchema = new Schema({
    creatorId: { type: ObjectId, required: true, ref: 'Account' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    views: { type: Number, default: 0 },
    Kept: { type: Number, default: 0 },
}, { timestamps: true, toJSON: { virtuals: true } })

KeepSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})