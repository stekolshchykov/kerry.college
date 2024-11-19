import {createProxyMiddleware} from "http-proxy-middleware";
import {NextApiRequest, NextApiResponse} from "next";

const URL: string = process.env.NEXT_PUBLIC_IMG_URL_FOR_HANDLER || "";

const proxy = createProxyMiddleware({
    target: URL, // Сервер с изображениями
    changeOrigin: true,
    pathRewrite: (path, req: any) => {
        const url = req.query.url as string;
        return url ? decodeURIComponent(url) : path;
    },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return proxy(req, res, (result) => {
        if (result instanceof Error) {
            console.error("Ошибка прокси:", result);
            res.status(500).json({error: "Ошибка прокси"});
        }
    });
}
