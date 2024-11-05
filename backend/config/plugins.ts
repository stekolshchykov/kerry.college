module.exports = ({env}) => ({
    pagination: {
        pageSize: 1000,
        limit: 1000, // Установка лимита в 1000 записей
    },
    rest: {
        maxLimit: 1000,
        pageSize: 1000,
        limit: 1000,
    },
    upload: {
        config: {
            provider: 'strapi-provider-upload-minio-ce',
            providerOptions: {
                accessKey: "FwmBN1auqcVmrg77r5OM",
                secretKey: "zJ9ykLhP7e0LKMOotvpj2yEKSQzrTNVh1KNzvN4I",
                bucket: "kerry-college",
                endPoint: "185.237.204.37",
                useSSL: false,
                port: 9000,
                host: "185.237.204.37", // уберите :9002
            },
        },
    },
});
