
export interface IEnvConfig {
    port: string | undefined;
    dbName: string | undefined;
    dbUser: string | undefined;
    dbPassword: string | undefined;
    dbHost: string | undefined;
    dbDialect: string | undefined;
    dbPort: string | undefined;
    secretKey?: string;
}