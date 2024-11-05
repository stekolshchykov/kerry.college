// module.exports = ({env}) => ({
//     pagination: {
//         pageSize: 1000,
//         limit: 1000, // Установка лимита в 1000 записей
//     },
//     rest: {
//         maxLimit: 1000,
//         pageSize: 1000,
//         limit: 1000,
//     },
//     // upload: {
//     //     config: {
//     //         provider: 'strapi-provider-upload-minio-ce',
//     //         providerOptions: {
//     //             accessKey: env('MINIO_ACCESS_KEY'),
//     //             secretKey: env('MINIO_SECRET_KEY'),
//     //             bucket: env('MINIO_BUCKET'),
//     //             endPoint: env('MINIO_ENDPOINT'),
//     //             port: env('MINIO_PORT'),
//     //             useSSL: env('MINIO_USE_SSL'),
//     //             host: env('MINIO_HOST'), // Удалите порт, если используется SSL
//     //         },
//     //     },
//     // },
// });

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


// export default ({ env }: { env: (envKey: string) => string }) => ({
//     upload: {
//         config: {
//             provider: 'strapi-provider-upload-ts-minio',
//             providerOptions: {
//                 accessKey: "FwmBN1auqcVmrg77r5OM",
//                 secretKey: "zJ9ykLhP7e0LKMOotvpj2yEKSQzrTNVh1KNzvN4I",
//                 bucket: "kerry-college",
//                 endPoint: "185.237.204.37",
//                 useSSL: false,
//                 port: 9002,
//                 host: "185.237.204.37", // уберите :9002
//             },
//         },
//     },
// });


// module.exports = ({env}) => ({
//     pagination: {
//         pageSize: 1000,
//         limit: 1000, // Установка лимита в 1000 записей
//     },
//     rest: {
//         maxLimit: 1000,
//         pageSize: 1000,
//         limit: 1000,
//     },
//     upload: {
//         config: {
//             provider: 'strapi-provider-upload-minio-ce',
//             providerOptions: {
//                 accessKey: env('MINIO_ACCESS_KEY'),
//                 secretKey: env('MINIO_SECRET_KEY'),
//                 bucket: env('MINIO_BUCKET'),
//                 endPoint: env('MINIO_ENDPOINT'),
//                 port: env('MINIO_PORT'),
//                 useSSL: env('MINIO_USE_SSL'),
//                 host: env('MINIO_HOST'), // Удалите порт, если используется SSL
//             },
//         },
//     },
// });
