import { BlockchainApi } from './requests';

export const Api = {
    getContractData(data) {
        return BlockchainApi.call('/api/v1/contracts/erc20/getData', 'POST', {data});
    }
}