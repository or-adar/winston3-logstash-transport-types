import TransportStream from 'winston-tranpsort';
import {ProtocolType} from "./logstash-transport-options";

class LogstashTransport extends TransportStream {
    name: string;
    mode: ProtocolType;
    host: string;
    port: number;

    constructor(options?: LogstashTransport): LogstashTransport;
}