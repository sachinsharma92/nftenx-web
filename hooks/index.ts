import { METAMASK_CONSTANTS } from 'constants/globalConstants';
import { useState, useEffect } from 'react';
import { Api } from 'services/api';
import { storage } from 'utils/storage';
import { useRouter } from 'next/router'

export const useIsMemberUser = () => {
    const [isMember, setIsMember] = useState(false);
      const router = useRouter();

    const getAddress = () => storage.get(METAMASK_CONSTANTS.ADDRESS);
    const getIsMember = async () => {
        if(getAddress()) {
            const response = await Api.getTokenBalance(getAddress());
            if(response.success){
                setIsMember(!!+response.data.data.message);
            }
        }
    }

    useEffect(() => {
        getIsMember();
    }, []);

    useEffect(()=>{
        if(isMember) {
            router.push('/member');
        }
    }, [isMember])

    return [isMember, getIsMember]
};