/// <reference types="dist/module" />
/// <reference types="node/http" />
import type { IncomingMessage } from 'http';
export interface Test {
    req: IncomingMessage;
}
