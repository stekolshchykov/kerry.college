import axios, { AxiosInstance } from "axios";

export default function axiosApiInstance(jwt?: string): AxiosInstance {
    const URL: string = process.env.NEXT_PUBLIC_API_URL_FOR_HANDLER || "http://localhost:1337/api";

    return axios.create({
        baseURL: URL,
        headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
    });
}
