import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({error: "Method Not Allowed"});
    }
    console.log("proxy req.body:", JSON.stringify(req.body));

    const API_URL = process.env.NEXT_PUBLIC_API_URL_FOR_HANDLER || "http://localhost:1337/api";
    const {path, method, params, data, headers} = req.body;

    if (!path || typeof path !== "string") {
        return res.status(400).json({error: "Invalid API path"});
    }

    console.log("proxy url:", `${API_URL}/${path}`);
    console.log("proxy method:", method || "GET");

    const headerParams: any = {
        url: `${API_URL}/${path}`,
        method: method || "GET",
    }

    if (headers) {
        headerParams.headers = {
            ...headers
        }
    }

    try {
        const response = await axios({
            ...headerParams,
            params: params || {},
            data: data || {},
        });

        res.status(response.status).json(response.data);
    } catch (error: any) {
        console.error("Error in proxy:", error.message);
        res.status(error.response?.status || 500).json({error: error.response?.data || "Internal Server Error"});
    }
}
