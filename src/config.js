export default {
    s3: {
        REGION: process.env.REACT_APP_S3_REGION,
        BUCKET: process.env.REACT_APP_S3_BUCKET
    },
    apiGateway: {
        REGION: process.env.REACT_APP_API_REGION,
        URL: process.env.REACT_APP_API_URL
    },
    cognito: {
        REGION: process.env.REACT_APP_COGNITO_REGION,
        USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
        APP_CLIENT_ID: process.env.REACT_APP_COGNITO_CLIENT_ID,
        IDENTITY_POOL_ID: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID
    }
};