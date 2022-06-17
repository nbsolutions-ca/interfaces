
export enum HTTPStatusCode {
    /**
     * This interim response indicates that everything so far is OK and
     * that the client should continue the request, or ignore the response
     * if the request is already finished.
     */
    INFO_CONTINUE = 100,

    /**
     * This code is sent in response to an Upgrade request header from
     * the client, and indicates the protocol the server is switching to.
     */
    INFO_SWITCHING_PROTOCOL,

    /**
     * This code indicates that the server has received and is processing the request,
     * but no response is available yet.
     */
    INFO_PROCESSING,

    /**
     * This status code is primarily intended to be used with the Link header,
     * letting the user agent start preloading resources while the server prepares
     * a response.
     */
    INFO_EARLY_HINTS,

    /**
     * The request has succeeded. The meaning of the success depends on the HTTP method:
        - GET: The resource has been fetched and is transmitted in the message body.
        - HEAD: The entity headers are in the message body.
        - PUT or POST: The resource describing the result of the action is transmitted in the message body.
        - TRACE: The message body contains the request message as received by the server.
     */
    OK = 200,

    /**
     * The request has succeeded and a new resource has been created as a result.
     * This is typically the response sent after POST requests, or some PUT requests.
     */
    OK_CREATED,

    /**
     * The request has been received but not yet acted upon. It is noncommittal,
     * since there is no way in HTTP to later send an asynchronous response
     * indicating the outcome of the request. It is intended for cases where
     * another process or server handles the request, or for batch processing.
     */
    OK_ACCEPTED,

    /**
     * This response code means the returned meta-information is not exactly
     * the same as is available from the origin server, but is collected from
     * a local or a third-party copy. This is mostly used for mirrors or backups
     * of another resource. Except for that specific case, the "200 OK" response
     * is preferred to this status.
     */
    OK_NON_AUTH_INFORMATION,

    /**
     * There is no content to send for this request, but the headers may be useful.
     * The user-agent may update its cached headers for this resource with the new
     * ones.
     */
    OK_NO_CONTENT,

    /**
     * Tells the user-agent to reset the document which sent this request.
     */
    OK_RESET_CONTENT,

    /**
     * This response code is used when the Range header is sent from the client
     * to request only part of a resource.
     */
    OK_PARTIAL_CONTENT,

    /**
     * Conveys information about multiple resources, for situations where multiple
     * status codes might be appropriate.
     */
    OK_MULTI_STATUS,

    /**
     * Used inside a <dav:propstat> response element to avoid repeatedly enumerating
     * the internal members of multiple bindings to the same collection.
     */
    OK_ALREADY_REPORTED,

    /**
     * The server has fulfilled a GET request for the resource, and the response
     * is a representation of the result of one or more instance-manipulations
     * applied to the current instance.
     */
    OK_IM_USED = 226,

    /**
     * The request has more than one possible response. The user-agent or user
     * should choose one of them. (There is no standardized way of choosing one
     * of the responses, but HTML links to the possibilities are recommended so
     * the user can pick.)
     */
    REDIRECT_MULTIPLE_CHOICE = 300,

    /**
     * The URL of the requested resource has been changed permanently. The new URL
     * is given in the response.
     */
    REDIRECT_MOVED_PERMANENTLY,

    /**
     * This response code means that the URI of requested resource has been changed
     * temporarily. Further changes in the URI might be made in the future. Therefore,
     * this same URI should be used by the client in future requests.
     */
    REDIRECT_FOUND,

    /**
     * The server sent this response to direct the client to get the requested
     * resource at another URI with a GET request.
     */
    REDIRECT_SEE_OTHER,

    /**
     * This is used for caching purposes. It tells the client that the response
     * has not been modified, so the client can continue to use the same cached
     * version of the response.
     */
    REDIRECT_NOT_MOTIFIED,

    /**
     * The server sends this response to direct the client to get the requested
     * resource at another URI with same method that was used in the prior request.
     * This has the same semantics as the 302 Found HTTP response code, with the
     * exception that the user agent must not change the HTTP method used: If a
     * POST was used in the first request, a POST must be used in the second request.
     */
    REDIRECT_TEMPORARY_REDIRECT = 307,

    /**
     * This means that the resource is now permanently located at another URI,
     * specified by the Location: HTTP Response header. This has the same semantics
     * as the 301 Moved Permanently HTTP response code, with the exception that the
     * user agent must not change the HTTP method used: If a POST was used in the
     * first request, a POST must be used in the second request.
     */
    REDIRECT_PERMANENT_REDIRECT,

    /**
     * The server could not understand the request due to invalid syntax.
     */
    CERR_BAD_REQUEST         = 400,

    /**
     * Although the HTTP standard specifies "unauthorized", semantically this
     * response means "unauthenticated". That is, the client must authenticate
     * itself to get the requested response.
     */
    CERR_UNAUTHORIZED,

    /**
     * This response code is reserved for future use. The initial aim for creating
     * this code was using it for digital payment systems, however this status code
     * is used very rarely and no standard convention exists.
     */
    CERR_PAYMENT_REQUIRED,

    /**
     * The client does not have access rights to the content; that is, it is
     * unauthorized, so the server is refusing to give the requested resource.
     * Unlike 401, the client's identity is known to the server.
     */
    CERR_FORBIDDEN,

    /**
     * The server can not find the requested resource. In the browser, this means
     * the URL is not recognized. In an API, this can also mean that the endpoint
     * is valid but the resource itself does not exist. Servers may also send this
     * response instead of 403 to hide the existence of a resource from an
     * unauthorized client. This response code is probably the most famous one due
     * to its frequent occurrence on the web.
     */
    CERR_NOT_FOUND,

    /**
     * The request method is known by the server but has been disabled and cannot
     * be used. For example, an API may forbid DELETE-ing a resource. The two
     * mandatory methods, GET and HEAD, must never be disabled and should not
     * return this error code.
     */
    CERR_METHOD_NOT_ALLOWED,

    /**
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
     */
    CERR_NOT_ACCEPTABLE,

    /**
     * This is similar to 401 but authentication is needed to be done by a proxy.
     */
    CERR_PROXY_AUTHENTICATION_REQUIRED,

    /**
     * This response is sent on an idle connection by some servers, even without any
     * previous request by the client. It means that the server would like to
     * shut down this unused connection. This response is used much more since
     * some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection
     * mechanisms to speed up surfing. Also note that some servers merely shut down
     * the connection without sending this message.
     */
    CERR_REQUEST_TIMEOUT,

    /**
     * This response is sent when a request conflicts with the current state of
     * the server.
     */
    CERR_CONFLICT,

    /**
     * This response is sent when the requested content has been permanently deleted
     * from server, with no forwarding address. Clients are expected to remove their
     * caches and links to the resource. The HTTP specification intends this
     * status code to be used for "limited-time, promotional services". APIs should
     * not feel compelled to indicate resources that have been deleted with this
     * status code.
     */
    CERR_GONE,

    /**
     * Server rejected the request because the Content-Length header field is not
     * defined and the server requires it.
     */
    CERR_LENGTH_REQUIRED,

    /**
     * The client has indicated preconditions in its headers which the server
     * does not meet.
     */
    CERR_PRECONDITION_FAILED,

    /**
     * Request entity is larger than limits defined by server; the server might
     * close the connection or return an Retry-After header field.
     */
    CERR_PAYLOAD_TOO_LARGE,

    /**
     * The URI requested by the client is longer than the server is willing to
     * interpret.
     */
    CERR_URI_TOO_LONG,

    /**
     * The media format of the requested data is not supported by the server, so the
     * server is rejecting the request.
     */
    CERR_UNSUPPORTED_MEDIA_TYPE,

    /**
     * The range specified by the Range header field in the request can't be
     * fulfilled; it's possible that the range is outside the size of the target
     * URI's data.
     */
    CERR_RANGE_NOT_SATISFIABLE,

    /**
     * This response code means the expectation indicated by the Expect request
     * header field can't be met by the server.
     */
    CERR_EXPECTATION_FAILED,

    /**
     * The request was directed at a server that is not able to produce a response.
     * This can be sent by a server that is not configured to produce responses for
     * the combination of scheme and authority that are included in the request URI.
     */
    CERR_MISDIRECTED_REQUEST = 421,

    /**
     * The request was well-formed but was unable to be followed due to semantic
     * errors.
     */
    CERR_UNPROCESSABLE_ENTITY,

    /**
     * The resource that is being accessed is locked.
     */
    CERR_LOCKED,

    /**
     * The request failed due to failure of a previous request.
     */
    CERR_FAILED_DEPENDENCY,

    /**
     * Indicates that the server is unwilling to risk processing a request that
     * might be replayed.
     */
    CERR_TOO_EARLY,

    /**
     * The server refuses to perform the request using the current protocol but
     * might be willing to do so after the client upgrades to a different protocol.
     * The server sends an Upgrade header in a 426 response to indicate the required
     * protocol(s).
     */
    CERR_UPGRADE_REQUIRED,

    /**
     * The origin server requires the request to be conditional. This response is
     * intended to prevent the 'lost update' problem, where a client GETs a
     * resource's state, modifies it, and PUTs it back to the server, when meanwhile
     * a third party has modified the state on the server, leading to a conflict.
     */
    CERR_PRECONDITION_REQUIRED = 428,

    /**
     * The user has sent too many requests in a given amount of time ("rate limiting").
     */
    CERR_TOO_MANY_REQUESTS,

    /**
     * The server is unwilling to process the request because its header fields are
     * too large. The request may be resubmitted after reducing the size of the
     * request header fields.
     */
    CERR_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

    /**
     * The user-agent requested a resource that cannot legally be provided, such as
     * a web page censored by a government.
     */
    CERR_UNAVAILABLE_FOR_LEGAL_REASONS = 451,

    /**
     * The server has encountered a situation it doesn't know how to handle.
     */
    ERR_INTERNAL = 500,

    /**
     * The request method is not supported by the server and cannot be handled. The
     * only methods that servers are required to support (and therefore that must
     * not return this code) are GET and HEAD.
     */
    ERR_NOT_IMPLEMENTED,

    /**
     * This error response means that the server, while working as a gateway to get
     * a response needed to handle the request, got an invalid response.
     */
    ERR_BAD_GATEWAY,

    /**
     * The server is not ready to handle the request. Common causes are a server
     * that is down for maintenance or that is overloaded. Note that together with
     * this response, a user-friendly page explaining the problem should be sent.
     * This responses should be used for temporary conditions and the
     * Retry-After: HTTP header should, if possible, contain the estimated time
     * before the recovery of the service. The webmaster must also take care about
     * the caching-related headers that are sent along with this response, as these
     * temporary condition responses should usually not be cached.
     */
    ERR_SERVICE_UNAVAILABLE,

    /**
     * This error response is given when the server is acting as a gateway and
     * cannot get a response in time.
     */
    ERR_GATEWAY_TIMEOUT,

    /**
     * The HTTP version used in the request is not supported by the server.
     */
    ERR_VERSION_NOT_SUPPORTED,

    /**
     * The server has an internal configuration error: the chosen variant resource
     * is configured to engage in transparent content negotiation itself, and is
     * therefore not a proper end point in the negotiation process.
     */
    ERR_VARIANT_ALSO_NEGOTIATES,

    /**
     * The method could not be performed on the resource because the server is
     * unable to store the representation needed to successfully complete the request.
     */
    ERR_INSUFFICIENT_STORAGE,

    /**
     * The server detected an infinite loop while processing the request.
     */
    ERR_LOOP_DETECTED,

    /**
     * Further extensions to the request are required for the server to fulfill it.
     */
    ERR_NOT_EXTENDED = 510,

    /**
     * The 511 status code indicates that the client needs to authenticate to gain
     * network access.
     */
    ERR_NETWORK_AUTHENTICATION_REQUIRED
}
