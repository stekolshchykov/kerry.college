module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'strapi-provider-upload-minio-ce',
            providerOptions: {
                accessKey: env('MINIO_ACCESS_KEY'),
                secretKey: env('MINIO_SECRET_KEY'),
                bucket: env('MINIO_BUCKET'),
                endPoint: env('MINIO_ENDPOINT'), // Замените MINIO_PORT на MINIO_ENDPOINT
                useSSL: env.bool('MINIO_USE_SSL', false),
                port: parseInt(env('MINIO_PORT'), 10),
                host: env('MINIO_HOST')
            },
        },
    },
});
