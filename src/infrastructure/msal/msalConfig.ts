import { Configuration,PublicClientApplication } from '@azure/msal-browser';
import {URL} from "../../shared/urlConstants";

const msalConfig:Configuration  = window.location.href.indexOf('localhost') > 0 ? {
    auth: {
        clientId: '9cc948ec-d47c-4093-8009-10135e5c2647',  //dxc - Test
        redirectUri: 'http://localhost:8084'
    }
}: {
    auth: {
        clientId: '99e3a32d-6bc4-413d-8e38-e4a8fc9067d5',  //Global LS
        redirectUri: URL.CLIENT
    }
}
const msalRequest = {
    scopes: [
        'user.read',
        'User.ReadBasic.All'
    ]
}

const pca = new PublicClientApplication(msalConfig);

export {
    pca,
    msalRequest
};
