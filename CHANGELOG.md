# Changelog

## 1.0.0 (2023-11-07)


### Features

* **add_member:** implement the instruction ([6e984c6](https://github.com/Squads-Protocol/v4/commit/6e984c698231453ed0d8e9251e80670f46158306))
* **add_vault:** remove the field and instructions ([38a2e93](https://github.com/Squads-Protocol/v4/commit/38a2e9390666d56e246ec8848b8ed70e5074e9aa))
* **additional_signers:** add additional_signers to transactions ([0acf74b](https://github.com/Squads-Protocol/v4/commit/0acf74bfbe2626fcdd42484e483ff9e2eb3eca21))
* **args:** expose fields ([cca54bf](https://github.com/Squads-Protocol/v4/commit/cca54bf0a29c9327da9bedd06aa6f60a88cf7ab3))
* **batch_add_transaction:** only creator of the batch can add txs to it ([c43d180](https://github.com/Squads-Protocol/v4/commit/c43d180cb7fb1d0d975aa798bb69a31e1d415bc2))
* **batchAddTransaction:** Update params to be more friendly with the UI ([4c753af](https://github.com/Squads-Protocol/v4/commit/4c753af59c3a2a7b1ed4e9f207f32ef991d5c31f))
* **batch:** implement ixs, sdk and tests ([4b98ee9](https://github.com/Squads-Protocol/v4/commit/4b98ee9aa2c7d009cfb6ab9f32293c446a06a0e0))
* **config_transaction_approve:** sdk and tests ([060fcde](https://github.com/Squads-Protocol/v4/commit/060fcde85dbb0b5e6cbf8d92b6203064581cc3c1))
* **config_transaction_cancel,vault_transaction_cancel:** program instructions, sdk, tests ([e3ea80a](https://github.com/Squads-Protocol/v4/commit/e3ea80ac6c05a88690f77bfad8796fc562e212d8))
* **config_transaction_create:** implement sdk and tests ([2aa94ab](https://github.com/Squads-Protocol/v4/commit/2aa94abda95cdc4ddb020692748706fce06a7b1a))
* **config_transaction_execute:** sdk and tests ([730905d](https://github.com/Squads-Protocol/v4/commit/730905db0342967328dd9084ac86b1468274e372))
* **config_transaction_reject:** sdk and tests ([7213b3f](https://github.com/Squads-Protocol/v4/commit/7213b3fe7220a662664f4075f743e9fdc7a5e0b2))
* **ConfigAction:** add ConfigAction::SetTimeLock and ConfigAction::AddVault ([66b93fa](https://github.com/Squads-Protocol/v4/commit/66b93fa6ee75ab8a3954bbbf97ab0ea0d85ba0f7))
* **cpi:** expose SmallVec and implement AnchorSerialize for TransactionMessage ([6519d82](https://github.com/Squads-Protocol/v4/commit/6519d82782e395032ec5b77e54669a6c30f99224))
* **create:** Implement create instruction ([e1a2f1a](https://github.com/Squads-Protocol/v4/commit/e1a2f1a191e6be9c5545190a0a0e15066cf76ef8))
* **create:** use bitmap for Permissions ([8ea8c1e](https://github.com/Squads-Protocol/v4/commit/8ea8c1e8d85f4508f55066b89d385447176b36df))
* **events:** remove anchor events ([b91e3a5](https://github.com/Squads-Protocol/v4/commit/b91e3a5abec4a79456b122bd384caa2e49ad0719))
* **execute:** prevent reentrancy into batch_execute_transaction ([81006e2](https://github.com/Squads-Protocol/v4/commit/81006e283740d96f8a12b30a6a9748d324620f95))
* **indexing:** add instruction logs for indexing ([c874d6a](https://github.com/Squads-Protocol/v4/commit/c874d6a4048e4ef3f990c40135864c587bd0fe99))
* **instructions:** add rent_payer account ([0f5dba5](https://github.com/Squads-Protocol/v4/commit/0f5dba50f952f9bfc153b3fc558755e23ab83525))
* **multisig_add_member,multisig_remove_member:** implement ixs and refactor code to use invariants ([9e72b52](https://github.com/Squads-Protocol/v4/commit/9e72b52f5f2c3a16f89c0bf77be080756c7f24fe))
* **multisig_add_member:** use opional accounts ([5f98a23](https://github.com/Squads-Protocol/v4/commit/5f98a237703873aec3146038d60eda6e023f09f0))
* **multisig_add_vault:** implement ix, sdk and tests ([e0229a4](https://github.com/Squads-Protocol/v4/commit/e0229a412f04ee137aa92bebca14b6f799ad69a0))
* **multisig_change_threshold:** expose instruction ([b43d431](https://github.com/Squads-Protocol/v4/commit/b43d43129ffd42fc71e5993350fc786e9db01e57))
* **multisig_create:** add test for missing createKey signature ([67b9eac](https://github.com/Squads-Protocol/v4/commit/67b9eac9621b60372812b37a7a30f52513a9942a))
* **multisig_create:** make create_key a signer ([fe1fc5b](https://github.com/Squads-Protocol/v4/commit/fe1fc5b8349640e07c1868219e02d2551d08f315))
* **multisig_create:** make createKey a signer ([0d52185](https://github.com/Squads-Protocol/v4/commit/0d52185f3c0ba285757dfa40e548c929c18f9b5a))
* **multisig_create:** remove allow_external_execute ([7158f2c](https://github.com/Squads-Protocol/v4/commit/7158f2cd022156b6688d62251269562519ca281d))
* **multisig_create:** remove the 'signer' requirements from create_key ([54fb68f](https://github.com/Squads-Protocol/v4/commit/54fb68f506ee724b4b4ac4106fdf3b6358ac0c58))
* **multisig_set_time_lock, multisig_set_config_authority:** implement ixs and sdk ([76c1d5a](https://github.com/Squads-Protocol/v4/commit/76c1d5a84faa95e556871d0ed3a5ec55aa999e10))
* **multisig:** make sure no members have unknown permissions ([4089d5d](https://github.com/Squads-Protocol/v4/commit/4089d5d1e2dd3f70980f84d2893876ca89ef44e3))
* **multisig:** prevent 'no proposers' and 'no executors' states ([b858edb](https://github.com/Squads-Protocol/v4/commit/b858edbe52fc90bfbb5b78574691cf5e3a4c8a4b))
* **permissions:** make `mask` public ([c8f1606](https://github.com/Squads-Protocol/v4/commit/c8f1606dda9e914b67daead04f9f5500af9f360d))
* **program,sdk:** rename program crate and create rust sdk crate ([ff2f6a3](https://github.com/Squads-Protocol/v4/commit/ff2f6a3e5cacac47b4c2d3209773481e55ba78b1))
* **proposal_create:** fail when creating proposal for stale transaction ([e732411](https://github.com/Squads-Protocol/v4/commit/e732411978c5ea4f2af90e0f1390b32f8853f860))
* **proposal_create:** only members with either Initiate or Vote permissions can create proposals ([3906ce9](https://github.com/Squads-Protocol/v4/commit/3906ce916a36aa26ebfdc984bd0ea3f055080d0c))
* **proposals:** stale config proposals can't be executed, vault and batch proposals - can ([dcc07dc](https://github.com/Squads-Protocol/v4/commit/dcc07dcce96d0a9986a503fce8a7193d1dad76b8))
* **pub-instructions:** expose  module ([ebd99fa](https://github.com/Squads-Protocol/v4/commit/ebd99faddc8cbf014fc8250e93b853d394342d43))
* **scripts:** add publish ([0dc187c](https://github.com/Squads-Protocol/v4/commit/0dc187cd58648927f72750c6a6faf8ab5d3cd3e9))
* **sdk-rs:** add  to config_transaction_execute ([a0cfb8e](https://github.com/Squads-Protocol/v4/commit/a0cfb8e0454608cea174d4224da3adc7e166ba51))
* **sdk-rs:** add client::vault_transaction_execute ([1924abc](https://github.com/Squads-Protocol/v4/commit/1924abc7a401c841a04d92033f8f9707fcf7692a))
* **sdk-rs:** add config_transaction_execute ([370a5f7](https://github.com/Squads-Protocol/v4/commit/370a5f76641fc30c563f71411511dc65f0fc9e01))
* **sdk-rs:** add get_multisig ([e5dfcee](https://github.com/Squads-Protocol/v4/commit/e5dfcee142c16d9255c92157d092d79568179b19))
* **sdk-rs:** add get_spending_limit ([8f97564](https://github.com/Squads-Protocol/v4/commit/8f975641d476dd6e83c283f1301f7793c2814700))
* **sdk-rs:** add multisig_create ([04482cb](https://github.com/Squads-Protocol/v4/commit/04482cb0d0c4ad13d39d411cb33cfb8ebf1bbd97))
* **sdk-rs:** add pda module ([b06e6b1](https://github.com/Squads-Protocol/v4/commit/b06e6b108b423e9c453249b520ee48e9344f3157))
* **sdk-rs:** add VaultTransactionMessageExt ([b588d63](https://github.com/Squads-Protocol/v4/commit/b588d63eaf0e51a2877f969bc52f7f109a6d1cce))
* **sdk-rs:** proposal_create, proposal_approve ([3dc5979](https://github.com/Squads-Protocol/v4/commit/3dc59798539de2e2b069432ff5873b87dc23a9ef))
* **sdk-rs:** spending_limit_use, vault_transaction_create ([87ba4a2](https://github.com/Squads-Protocol/v4/commit/87ba4a2e7458847a23b92740de4edd66403285cf))
* **sdk:** add transactionExecute instruction ([551c11e](https://github.com/Squads-Protocol/v4/commit/551c11ebe735ae34ddb54ef3040d77e1abdf305b))
* **sdk:** allow instruction program IDs to be loaded from ALTs ([370209c](https://github.com/Squads-Protocol/v4/commit/370209c299693eb0027e015456807b1f5cc2d4df))
* **sdk:** bump the canary version ([f6c3c53](https://github.com/Squads-Protocol/v4/commit/f6c3c53416901498e05d6e2844b69dc0dfbf981f))
* **sdk:** bump the canary version before release ([828db93](https://github.com/Squads-Protocol/v4/commit/828db938a8f24b29c8edbb0d78985df36deaed39))
* **sdk:** bump version ([403591c](https://github.com/Squads-Protocol/v4/commit/403591c7a7acd6f2192a4f01ef3d7990ac7b076b))
* **sdk:** bump version ([85ad511](https://github.com/Squads-Protocol/v4/commit/85ad511e0aef14dffd1fefd0f9f8f56da422a82a))
* **sdk:** export isConfigActionX utils ([f009fc2](https://github.com/Squads-Protocol/v4/commit/f009fc21ba42699d848ef7b22345af1c90050b40))
* **sdk:** expose instructions.vaultTransactionCreate ([76d6ae9](https://github.com/Squads-Protocol/v4/commit/76d6ae94ef964f4452989634d99a1e37887e24e4))
* **sdk:** implement getAvailableMemoSize util ([96a1b18](https://github.com/Squads-Protocol/v4/commit/96a1b1891cfb1b2f37262b6082d213cd014a4a29))
* **sdk:** use classic TokenProgram for SpendingLimits by default ([dd0f478](https://github.com/Squads-Protocol/v4/commit/dd0f47855c0c516d410e88362c648db8c393fb2a))
* **sdk:** use lookup tables for vault_transaction_execute and batch_execute_transaction transactions ([3f80faf](https://github.com/Squads-Protocol/v4/commit/3f80fafefb31d53936488da495f4573142658ff1))
* **setup:** add sdk ([0fc3fb9](https://github.com/Squads-Protocol/v4/commit/0fc3fb99023304d5d415739926feeaa8d7518eee))
* **setup:** test scripts and typescript config ([4da5a77](https://github.com/Squads-Protocol/v4/commit/4da5a77ed040bbdab585fcafa8a93617f0751ad8))
* **spending_limits:** add SpendingLimit account ([88e3486](https://github.com/Squads-Protocol/v4/commit/88e34861aa2ad08d73c55ee5a2f11438a2be61c6))
* **spending_limits:** implement AddSpendingLimit ([a3c6f4b](https://github.com/Squads-Protocol/v4/commit/a3c6f4ba7b1098b600f9575b6cdf999cb8b76eb3))
* **spending_limits:** implement RemoveSpendingLimit for autonomous multisigs ([ce140d6](https://github.com/Squads-Protocol/v4/commit/ce140d682642d98666b5154656e2ec11d26e8933))
* **spending_limits:** spending_limit_use ([98c4043](https://github.com/Squads-Protocol/v4/commit/98c404323e8dddac5f3f2f5c661fe342befaa500))
* **spending_limit:** verify members are non-empty and contain no duplicates ([13240af](https://github.com/Squads-Protocol/v4/commit/13240af738f5cade003691724f45bc2da59cfd9e))
* **SpendingLimits:** add/remove spending limit for controlled multisig ([ba0f95c](https://github.com/Squads-Protocol/v4/commit/ba0f95c8f7037db476b421fb8be0528aa3573597))
* **SQ-002:** add sanity checks in realloc_if_needed ([fecbb0e](https://github.com/Squads-Protocol/v4/commit/fecbb0eaa703fac65b3c656a0d085ac2f6cc4b96))
* **SQ-003:** sanity checks in create_account ([698cc22](https://github.com/Squads-Protocol/v4/commit/698cc2234d2dfc13efa5fbdd2aa6f03d53d1f9ad))
* **SQ-005:** check SpendingLimit members at the moment of creation ([ac1b2f0](https://github.com/Squads-Protocol/v4/commit/ac1b2f0b816e4106dddae037316b21547788d4d3))
* **time_lock:** set MAX_TIME_LOCK to 3 month ([720ca8c](https://github.com/Squads-Protocol/v4/commit/720ca8c3b238240825bcad8f10b1cb3a482f3af1))
* **transaction_approve:** implement instruction, test and sdk ([55bfeb6](https://github.com/Squads-Protocol/v4/commit/55bfeb61cf37dc80f31a90048a99f34a5dda6482))
* **transaction_create:** implement the instruction, tests and sdk ([581e260](https://github.com/Squads-Protocol/v4/commit/581e2603a2cce4f704d2795c6f7fd87c18e4dfa0))
* **transaction_execute:** implement instruction ([9b88ea2](https://github.com/Squads-Protocol/v4/commit/9b88ea293bafd6c59a0c78d791c4d8c574b76a4f))
* **transaction_execute:** implement sdk ([b827fa9](https://github.com/Squads-Protocol/v4/commit/b827fa9fa224399a897e07cb46afe0a9eb3947ec))
* **transaction_execute:** implement tests ([9066724](https://github.com/Squads-Protocol/v4/commit/9066724938eefc45732ad247bfb50394d42f0f58))
* **transaction_execute:** prevent reentrancy ([401eb6c](https://github.com/Squads-Protocol/v4/commit/401eb6c3471d25e7ff13415ffc8cf205427c6ea0))
* **transaction_reject:** instruction, sdk and tests ([ceef604](https://github.com/Squads-Protocol/v4/commit/ceef604bdee063faa073bca074fd9a04311dbcc1))
* **vault_transaction_execute,batch_execute_transaction:** enforce ms accounts readonly in CPI instead of reentrancy checks ([e09f9a9](https://github.com/Squads-Protocol/v4/commit/e09f9a92b8ccf3f07bb275ee7ec80a7a2e4a787c))
* **vault_transaction_message:** validate ix account indices ([e115a40](https://github.com/Squads-Protocol/v4/commit/e115a4047e64c97f6cc5d22021ff390403bf59e1))


### Bug Fixes

* **clippy:** using clippy-preview ([b3b73f9](https://github.com/Squads-Protocol/v4/commit/b3b73f9a659755a0b53c0032c5cc974c23f5a694))
* **dependencies:** add 'assert' as an explicit dependency ([0dc187c](https://github.com/Squads-Protocol/v4/commit/0dc187cd58648927f72750c6a6faf8ab5d3cd3e9))
* **executable_transaction_message:** correctlyresolve accounts from ALTs ([e722fd1](https://github.com/Squads-Protocol/v4/commit/e722fd111b33fb1d2591fb49954225881d27e70c))
* **executable_transaction_message:** determine writable status from tx message rather than loaded account_info ([c3d2177](https://github.com/Squads-Protocol/v4/commit/c3d2177fe260c5eb4511c775feaeffa784a6fa75))
* **execution:** persist Proposal status before CPI ([c2e81e1](https://github.com/Squads-Protocol/v4/commit/c2e81e1748d9980c164b124880af7417a01b48ed))
* **execution:** prevent reentrancy attacks with cancelling proposal during execution ([8416203](https://github.com/Squads-Protocol/v4/commit/8416203ccb3128ea996baaf6500b908d212be50c))
* **lint:** clippy and ci ([e7f48dc](https://github.com/Squads-Protocol/v4/commit/e7f48dc3aa9637c0ee4d1c546eb416787f5a83bc))
* **ms-create:** remove .to_account_info() ([cd0b77c](https://github.com/Squads-Protocol/v4/commit/cd0b77c7a040d12b14af3480a4f23efbda8ea8c8))
* **notes:** more notes ([56feb4e](https://github.com/Squads-Protocol/v4/commit/56feb4e959e9e736cde8372bd1df6b1fe5c037f4))
* **notes:** placeholder ([af25542](https://github.com/Squads-Protocol/v4/commit/af25542f1bfce5e8b6178a65601bfcd685c6d452))
* **pda:** getTransactionPda index ([7223072](https://github.com/Squads-Protocol/v4/commit/722307294007d1bed31dbf5c38e0a9d0c46c75f1))
* **proposal_create:** make multisig account non-writable ([4b9784d](https://github.com/Squads-Protocol/v4/commit/4b9784df378ec628871a5e97aa1834375f839819))
* **realloc_if_needed:** make sure to reallocate at least size to fit new members ([5640af0](https://github.com/Squads-Protocol/v4/commit/5640af0cd681148a435c68549b338eb219be0021))
* **sdk-rs:** deserialization in get_multisig ([9535a22](https://github.com/Squads-Protocol/v4/commit/9535a2274a43604fbc374a41591890ed69c57294))
* **sdk:** generate ([5409a21](https://github.com/Squads-Protocol/v4/commit/5409a21f62b2fe4a1b771238bde81f74941ac009))
* **sdk:** generate idl ([93b3ecf](https://github.com/Squads-Protocol/v4/commit/93b3ecf7bd6b4e916ba6ae0f70c5841fd48cea06))
* **small-vec:** removed nested ? ([aede18d](https://github.com/Squads-Protocol/v4/commit/aede18d4af21a2436e26d0e5845dd22db8e8168e))
* **spending_limits:** check that spending limit is owned by right multisig before deleting ([cf34989](https://github.com/Squads-Protocol/v4/commit/cf349898befab373b8a14c4bb4bc56e73929e94d))
* **tests:** add more slack to isCloseTo ([b24b9db](https://github.com/Squads-Protocol/v4/commit/b24b9dbb0c1f948033c590368d9dd33d855bb6f8))
* **toolchain:** removing caching check ([1b9b2b0](https://github.com/Squads-Protocol/v4/commit/1b9b2b08d549f640521f75ac8a876f54777254b5))
* **vault_transaction_execute:** static_accounts subtraction overflow ([2ddacd2](https://github.com/Squads-Protocol/v4/commit/2ddacd28915528e6c85054de7b90407e40adffc9))
* **wip:** added some structs ([0ac185d](https://github.com/Squads-Protocol/v4/commit/0ac185d93b88b3e0dd0cdf6c5136a54ccd9e6270))
* **workflow:** added semver ([e7a2a23](https://github.com/Squads-Protocol/v4/commit/e7a2a239fc649de4b1aafa2d29f56f7465be6712))