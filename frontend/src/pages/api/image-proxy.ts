import {createProxyMiddleware} from "http-proxy-middleware";
import {NextApiRequest, NextApiResponse} from "next";

const URL: string = process.env.NEXT_PUBLIC_IMG_URL_FOR_HANDLER || "";

const proxy = createProxyMiddleware({
    target: URL,
    changeOrigin: true,
    pathRewrite: (path, req: any) => {
        const url = req.query.url as string;
        return url ? decodeURIComponent(url) : path;
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Устанавливаем заголовки кеширования
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=3600"); // 24 часа кеша на уровне CDN

    return proxy(req, res, (result) => {
        if (result instanceof Error) {
            console.error("Ошибка прокси:", result);
            res.status(500).json({error: "Ошибка прокси"});
        }
    });
}
