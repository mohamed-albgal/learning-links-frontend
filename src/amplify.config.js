const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "links-uploads",
    },

    apiGateway: {
        REGION: "us-east-1",
        URL: "https://gnqce8dbcc.execute-api.us-east-1.amazonaws.com/prod",
    },

    cognito: {
        REGION: "us-east-1",
        POOLID: "us-east-1_PCaOAyqPN",
        APPCLIENTID: "66sopaan49f0n4b464ko4irg3t", 
        IDENTITYPOOLID: "us-east-1:65e40f48-99f2-447d-a801-4aad51979e96",
    },
};

export default config;



