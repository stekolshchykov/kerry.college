declare module 'geoip-lite' {
    interface GeoData {
        range: [number, number];
        country: string;
        region: string;
        city: string;
        ll: [number, number];
        metro: number;
    }

    function lookup(ip: string): GeoData | null;
}