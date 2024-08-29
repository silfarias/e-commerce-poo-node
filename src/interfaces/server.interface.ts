
export interface IServer {
    middlewares(): void;
    router(): void;
    listen(): void;
}