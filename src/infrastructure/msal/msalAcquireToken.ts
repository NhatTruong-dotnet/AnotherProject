import {pca, msalRequest} from './msalConfig';
import { Client } from "@microsoft/microsoft-graph-client";

const login = async function () {

    // console.log('Begin login');
    // Login
    try {
        // Use MSAL to login
        const authResult = await pca.loginPopup(msalRequest);

        let account = authResult.account
        let token = authResult.accessToken

        const authProvider = {
            getAccessToken: async () => {
                return token;
            }
        };

        const graphClient = Client.initWithMiddleware({ authProvider });

        //user info
        let result = await graphClient
            .api('/me')
            .select('id,displayName,mail,userPrincipalName')
            .get();

        //manager info
        let result2 = {}
        try {
            result2 = await graphClient
                .api(`/users/${result.id}/manager`)
                .select('id,displayName,mail,userPrincipalName')
                .get();
        } catch (error) {
            result2 = { id: "", displayName: "", mail: "", userPrincipalName: "" }
        }

        //finally
        return {
            err: false,
            data: {
                token,
                account,
                user: result,
                manager: result2
            }
        }
    } catch (error) {
        return {
            err: false,
            data: error
        }
    }
}
 
const logout = async () => {
    const authResult = await pca.logout()
    return authResult
}
export {
    login,
    logout
}
