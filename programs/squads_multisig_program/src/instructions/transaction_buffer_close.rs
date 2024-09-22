use anchor_lang::prelude::*;

use crate::errors::*;
use crate::state::*;

#[derive(Accounts)]
pub struct TransactionBufferClose<'info> {
    #[account(
        mut,
        seeds = [SEED_PREFIX, SEED_MULTISIG, multisig.create_key.as_ref()],
        bump = multisig.bump,
    )]
    pub multisig: Account<'info, Multisig>,

    #[account(
        mut,
        // Rent gets returned to the creator
        close = creator,
        // Only the creator can close the buffer
        constraint = transaction_buffer.creator == creator.key() @ MultisigError::Unauthorized,
        // Account can be closed anytime by the creator, regardless of the
        // current multisig transaction index
        seeds = [
            SEED_PREFIX,
            multisig.key().as_ref(),
            SEED_TRANSACTION_BUFFER,
            &transaction_buffer.transaction_index.to_le_bytes(),
        ],
        bump
    )]
    pub transaction_buffer: Account<'info, TransactionBuffer>,

    /// The member of the multisig that created the TransactionBuffer.
    pub creator: Signer<'info>,
}

impl TransactionBufferClose<'_> {
    fn validate(&self) -> Result<()> {
        let Self {
            multisig, creator, ..
        } = self;

        // creator is still a member in the multisig
        require!(
            multisig.is_member(creator.key()).is_some(),
            MultisigError::NotAMember
        );

        Ok(())
    }

    /// Create a new vault transaction.
    #[access_control(ctx.accounts.validate())]
    pub fn transaction_buffer_close(ctx: Context<Self>) -> Result<()> {
        Ok(())
    }
}
