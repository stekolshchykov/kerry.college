declare module 'useragent' {
    interface Agent {
        os: {
            toString(): string;
        };
        device: {
            toString(): string;
        };

        toAgent(): string;

        toVersion(): string;
    }

    function parse(userAgentString: string): Agent;
}