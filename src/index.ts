import { Server as HttpServer } from 'http';
import { Server, Socket, AttachOptions, ServerOptions } from 'engine.io-latest';

/**
 * Creates a new Engine.IO server instance attached to an existing HTTP server.
 *
 * @param httpServer - An existing HTTP server to attach the Engine.IO server to.
 * @param options - Optional configuration options for the Engine.IO server.
 * @returns A new `Server` instance attached to the specified HTTP server.
 */
function engine(httpServer: HttpServer, options?: ServerOptions & AttachOptions): Server;

/**
 * Creates a new standalone Engine.IO server instance with specified options.
 *
 * @param options - Configuration options for the Engine.IO server.
 * @returns A new `Server` instance.
 */
function engine(options?: ServerOptions & AttachOptions): Server;

/**
 * Implementation of the `engine` function, creating a `Server` instance based on provided arguments.
 *
 * @param arg1 - Either an HTTP server or options for the Engine.IO server.
 * @param arg2 - Optional configuration options if `arg1` is an HTTP server.
 * @returns A new `Server` instance.
 */
function engine(arg1?: unknown, arg2?: ServerOptions & AttachOptions): Server {
	if (arg1 instanceof HttpServer) {
		const server = new Server(arg2);
		server.attach(arg1, arg2);
		return server;
	} else {
		return new Server(arg1 as ServerOptions & AttachOptions);
	}
}

export default engine;

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
