import { BlockchainApi, AdminApi } from './requests';

export const Api = {
    getContractData(data) {
        return BlockchainApi.call('/api/v1/contracts/erc20/getData', 'POST', {data});
    },
    validateEmailLink(id) {
        return AdminApi.call('/api/v1/contracts/erc20/getData', 'GET', {params: { id }});
    },
    joinTheWaitlist(data) {
        return AdminApi.call('/api/v1/user/create/waitlist', 'POST', { data });
    }
}