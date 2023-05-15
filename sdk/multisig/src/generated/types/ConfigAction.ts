/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { Member, memberBeet } from './Member'
import { Period, periodBeet } from './Period'
/**
 * This type is used to derive the {@link ConfigAction} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link ConfigAction} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type ConfigActionRecord = {
  AddMember: { newMember: Member }
  RemoveMember: { oldMember: web3.PublicKey }
  ChangeThreshold: { newThreshold: number }
  SetTimeLock: { newTimeLock: number }
  AddSpendingLimit: {
    createKey: web3.PublicKey
    vaultIndex: number
    mint: web3.PublicKey
    amount: beet.bignum
    period: Period
    members: web3.PublicKey[]
    destinations: web3.PublicKey[]
  }
  RemoveSpendingLimit: { spendingLimit: web3.PublicKey }
}

/**
 * Union type respresenting the ConfigAction data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isConfigAction*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type ConfigAction = beet.DataEnumKeyAsKind<ConfigActionRecord>

export const isConfigActionAddMember = (
  x: ConfigAction
): x is ConfigAction & { __kind: 'AddMember' } => x.__kind === 'AddMember'
export const isConfigActionRemoveMember = (
  x: ConfigAction
): x is ConfigAction & { __kind: 'RemoveMember' } => x.__kind === 'RemoveMember'
export const isConfigActionChangeThreshold = (
  x: ConfigAction
): x is ConfigAction & { __kind: 'ChangeThreshold' } =>
  x.__kind === 'ChangeThreshold'
export const isConfigActionSetTimeLock = (
  x: ConfigAction
): x is ConfigAction & { __kind: 'SetTimeLock' } => x.__kind === 'SetTimeLock'
export const isConfigActionAddSpendingLimit = (
  x: ConfigAction
): x is ConfigAction & { __kind: 'AddSpendingLimit' } =>
  x.__kind === 'AddSpendingLimit'
export const isConfigActionRemoveSpendingLimit = (
  x: ConfigAction
): x is ConfigAction & { __kind: 'RemoveSpendingLimit' } =>
  x.__kind === 'RemoveSpendingLimit'

/**
 * @category userTypes
 * @category generated
 */
export const configActionBeet = beet.dataEnum<ConfigActionRecord>([
  [
    'AddMember',
    new beet.BeetArgsStruct<ConfigActionRecord['AddMember']>(
      [['newMember', memberBeet]],
      'ConfigActionRecord["AddMember"]'
    ),
  ],

  [
    'RemoveMember',
    new beet.BeetArgsStruct<ConfigActionRecord['RemoveMember']>(
      [['oldMember', beetSolana.publicKey]],
      'ConfigActionRecord["RemoveMember"]'
    ),
  ],

  [
    'ChangeThreshold',
    new beet.BeetArgsStruct<ConfigActionRecord['ChangeThreshold']>(
      [['newThreshold', beet.u16]],
      'ConfigActionRecord["ChangeThreshold"]'
    ),
  ],

  [
    'SetTimeLock',
    new beet.BeetArgsStruct<ConfigActionRecord['SetTimeLock']>(
      [['newTimeLock', beet.u32]],
      'ConfigActionRecord["SetTimeLock"]'
    ),
  ],

  [
    'AddSpendingLimit',
    new beet.FixableBeetArgsStruct<ConfigActionRecord['AddSpendingLimit']>(
      [
        ['createKey', beetSolana.publicKey],
        ['vaultIndex', beet.u8],
        ['mint', beetSolana.publicKey],
        ['amount', beet.u64],
        ['period', periodBeet],
        ['members', beet.array(beetSolana.publicKey)],
        ['destinations', beet.array(beetSolana.publicKey)],
      ],
      'ConfigActionRecord["AddSpendingLimit"]'
    ),
  ],

  [
    'RemoveSpendingLimit',
    new beet.BeetArgsStruct<ConfigActionRecord['RemoveSpendingLimit']>(
      [['spendingLimit', beetSolana.publicKey]],
      'ConfigActionRecord["RemoveSpendingLimit"]'
    ),
  ],
]) as beet.FixableBeet<ConfigAction, ConfigAction>
