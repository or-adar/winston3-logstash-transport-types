import TransportStream from "winston-transport";
import {SocketType} from "dgram";

export type ProtocolType = SocketType | "tcp" | "tcp4" | "tcp6";

export interface LogstashTransportOptions extends TransportStream.TransportStreamOptions {
    mode?: ProtocolType,
    localhost?: string,
    host?: string,
    port?: number,
    applicationName?: string,
    appName?: string,
    pid?: number,
    silent?: boolean,
    maxConnectRetries?: number,
    timeoutConnectRetries?: number,
    sslEnable?: boolean,
    sslKey?: string,
    sslCert?: string,
    sslCA?: string,
    sslPassPhrase?: string,
    rejectUnauthorized?: boolean,
    label?: string,
    trailingLineFeed?: boolean,
    trailingLineFeedChar?: string,
}