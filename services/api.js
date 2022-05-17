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
    },
    getMentors() {
        return AdminApi.call(`/api/v1/mentor`, 'GET');
    },
    getEvents(type = '') {
        return AdminApi.call(`/api/v1/event?type=${type}`, 'GET');
    },
    postSuccess(invitationId, txnHash='') {
        return AdminApi.call(`/api/v1/invitation/${invitationId}/on-complete`, 'POST', { data: { txnHash } });
    },
    getCategories() {
        return AdminApi.call(`/api/v1/category`, 'GET');
    },
    getArticles(categoryId = '') {
        return AdminApi.call(`/api/v1/content-hub?category=${categoryId}`, 'GET');
    }
}