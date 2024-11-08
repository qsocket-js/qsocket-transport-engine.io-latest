import { Server, Socket, AttachOptions, ServerOptions } from 'engine.io-latest';

/**
 * `QSocketTransportEIOLatestServer` is a class from `engine.io-latest`, used to create a new Engine.IO server instance.
 * It manages incoming connections, allowing real-time, low-latency communication.
 *
 * @type {Server}
 */
export const QSocketTransportEIOLatestServer: typeof Server = Server;

/**
 * `QSocketTransportEIOLatestSocket` represents an individual socket connection in the Engine.IO server.
 * This class manages the interaction with a specific client, enabling data transfer.
 *
 * @type {Socket}
 */
export const QSocketTransportEIOLatestSocket: typeof Socket = Socket;

/**
 * `IQSocketTransportEIOLatestServer` is a type alias for the `Server` class from `engine.io-latest`.
 * This type represents the Engine.IO server instance used to manage connections.
 */
export type IQSocketTransportEIOLatestServer = Server;

/**
 * `IQSocketTransportEIOLatestSocket` is a type alias for the `Socket` class from `engine.io-latest`.
 * This type represents an individual client connection on the server.
 */
export type IQSocketTransportEIOLatestSocket = Socket;

/**
 * `IQSocketTransportEIOLatestAttachOptions` is a type alias for the `AttachOptions` from `engine.io-latest`.
 * This type is used to specify options when attaching the Engine.IO server to an HTTP server.
 */
export type IQSocketTransportEIOLatestAttachOptions = AttachOptions;

/**
 * `IQSocketTransportEIOLatestServerOptions` is a type alias for the `ServerOptions` from `engine.io-latest`.
 * This type represents configuration options for initializing the Engine.IO server instance.
 */
export type IQSocketTransportEIOLatestServerOptions = ServerOptions;
