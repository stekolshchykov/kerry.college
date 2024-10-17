import logger, {logLevelEnum} from "@/util/LokiLogger";
import {GetServerSidePropsContext, PreviewData} from "next";
import {NextApiRequestCookies} from "next/dist/server/api-utils";
import {IncomingMessage} from "node:http";
import {ParsedUrlQuery} from "node:querystring";
import useragent from "useragent";

class GSSPL {

    log = (req: IncomingMessage & {
        cookies: NextApiRequestCookies
    }, context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {

        // Получаем IP-адрес
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        // Получаем данные о геолокации с помощью geoip-lite
        // const geo = lookup(`${ip}`);

        // Разбираем user-agent для информации о браузере и устройстве
        const agent = useragent.parse(`${req.headers['user-agent']}`);

        // Получаем текущий URL страницы
        const currentPage = context.resolvedUrl;

        // Создаем объект для логирования
        const logObject = {
            ip: ip,
            // geo: geo,
            browser: agent.toAgent(),
            os: agent.os.toString(),
            device: agent.device.toString(),
            currentPage: currentPage,
            timestamp: new Date().toISOString(),
        };

        logger.log(logObject, logLevelEnum.Info, {})
    }

}

const gsspl = new GSSPL();
export default gsspl;