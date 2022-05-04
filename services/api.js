import { BlockchainApi, AdminApi, MetamaskApi } from './requests';

export const Api = {
    getContractData(data) {
        return BlockchainApi.call('/api/v1/contracts/erc20/getData', 'POST', {data});
    },
    validateEmailLink(id) {
        return AdminApi.call(`/api/v1/invitation/${id}`, 'GET');
    },
    joinTheWaitlist(data) {
        return AdminApi.call('/api/v1/user/create/waitlist', 'POST', { data });
    },
    getTransactionReceipt(txhash) {
        return MetamaskApi.call('/api', 'GET', {
            params: {
                module:'transaction',
                action: 'getstatus',
                txhash,
                apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY
            } });
    },
    updateInvite(id, data) {
        return AdminApi.call(`/api/v1/invitation/${id}`, 'PUT', { data });
    }
}