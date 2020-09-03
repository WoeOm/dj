import { IDarwiniaEthBlock } from "../../util";

/// EthashProof Interface
export interface IDoubleNodeWithMerkleProof {
    dag_nodes: string[],
    proof: string[],
}

/// Receipt Proof Interface
export interface IReceiptWithProof {
    header: IDarwiniaEthBlock,
    receipt_proof: string,
    mmr_proof: string[],
}

/// Proposal Header Interface
export interface IProposalHeader {
    eth_header: IDarwiniaEthBlock,
    ethash_proof: IDoubleNodeWithMerkleProof[],
    mmr_root: string,
    mmr_proof: string[]
}

// Proposal Headers Interface
export interface IProposalHeaders {
    headers: IProposalHeader[],
}

export interface IEthereumHeaderThing {
    header: IDarwiniaEthBlock,
    mmr_root: string,
}

/// EthHeaderThing Interface
export interface IEthereumHeaderThingWithProof {
    header: IDarwiniaEthBlock,
    ethash_proof: IDoubleNodeWithMerkleProof[],
    mmr_root: string,
    mmr_proof: string[],
}
