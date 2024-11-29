import axios, {AxiosInstance} from "axios";

export default function axiosApiInstance(jwt?: string): AxiosInstance {
    return axios.create({
        baseURL: "/api/proxy",
        headers: jwt ? {Authorization: `Bearer ${jwt}`} : undefined,
    });
}
