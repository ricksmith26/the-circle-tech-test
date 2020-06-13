import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-2_Lg8Ko8Rce',
    ClientId: '619at7ck1fr9r5oarpf6vp3les'
 };

 export default new CognitoUserPool(poolData);
