import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { KeepSchema } from '../models/Keep';
import { ValueSchema } from '../models/Value'
import { VaultSchema } from '../models/Vault';
import { VaultKeepSchema } from '../models/VaultKeep';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Keep = mongoose.model('Keep', KeepSchema)

  Vault = mongoose.model('Vault', VaultSchema)

  VaultKeep = mongoose.model('VaultKeep', VaultKeepSchema)
}

export const dbContext = new DbContext()
