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
                accessKey: env('MINIO_ACCESS_KEY'),
                secretKey: env('MINIO_SECRET_KEY'),
                bucket: env('MINIO_BUCKET'),
                endPoint: env('MINIO_PORT'),
                useSSL:env('MINIO_USE_SSL'),
                port: env('MINIO_ACCESS_KEY'),
                host: env('MINIO_HOST')
            },
        },
    },
});
