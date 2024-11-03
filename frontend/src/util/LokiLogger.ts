import axios from 'axios';
import stringifySafe from 'json-stringify-safe';


export enum sourceTypeEnum {
    Website = "Website",
    MobileApp = "MobileApp"
}

export enum environmentTypeEnum {
    Production = "Production",
    Development = "Development",
}

export enum roleTypeEnum {
    Admin = "Admin",
    User = "User"
}

export enum logLevelEnum {
    Info = "Info",
    Debug = "Debug",
    Error = "Error"
}

class LokiLogger {
    private url: string;
    private job: string;
    private project: string;
    private source: sourceTypeEnum;
    private environment: environmentTypeEnum;
    private host: string;
    private role: roleTypeEnum;
    private level: logLevelEnum;

    constructor(
        url: string,
        job: string,
        project: string,
        source: sourceTypeEnum,
        environment: environmentTypeEnum,
        host: string,
        role: roleTypeEnum,
        level: logLevelEnum
    ) {
        this.url = `http://${url}`;
        this.job = job;
        this.project = project;
        this.source = source;
        this.environment = environment;
        this.host = host;
        this.role = role;
        this.level = level;
    }

    public async log(message: any, level: logLevelEnum = this.level, additionalParams: Record<string, any> = {}): Promise<void> {

        const timestamp = Math.floor(Date.now() * 1e6).toString();

        const data = {
            streams: [
                {
                    stream: {
                        job: this.job,
                        level: level,
                        project: this.project,
                        source: this.source,
                        environment: this.environment,
                        host: this.host,
                        role: this.role,
                        ...additionalParams,
                    },
                    values: [
                        [timestamp, stringifySafe(message)]
                    ]
                }
            ]
        };

        try {
            await axios.post(`${this.url}:3100/loki/api/v1/push`, data, {
                headers: {'Content-Type': 'application/json'}
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }
}

// Usage example
const logger = new LokiLogger(
    '185.237.204.37',
    'admin',
    'kerry.college',
    sourceTypeEnum.Website,
    environmentTypeEnum.Production, // Set to Staging environment
    'arnold', // IP address
    roleTypeEnum.User,
    logLevelEnum.Info
);

export default logger