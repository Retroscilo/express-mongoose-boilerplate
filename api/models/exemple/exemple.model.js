const mongoose =  require('mongoose')

const exempleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
      maxlength: 50
    },
    status: {
      type: String,
      required: false,
      enum: ['active', 'complete', 'pastdue'],
      default: 'active'
    },
    notes: String,
    due: Date,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: false
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'list',
      required: false
    }
  },
  { timestamps: true }
)

exempleSchema.index({ list: 1, name: 1 }, { unique: true })

const Item = mongoose.model('item', exempleSchema)

module.exports = {
  Item
}
