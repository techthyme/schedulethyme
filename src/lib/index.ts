interface ErrorWithConfig {
  config?: {
    headers?: {
      Authorization?: string;
      "Request-Id"?: string;
      "Content-Type"?: string;
      Origin?: string;
    };
    method?: string;
    code?: string;
    url?: string;
  };
  message?: string;
  status?: string | number;
}

function isErrorWithConfig(error: unknown): error is ErrorWithConfig {
  return typeof error === 'object' && error !== null;
}

export const errorLogger = (msg: string, error: unknown) => {
  const err = isErrorWithConfig(error) ? error : {};

  const fullToken = err?.config?.headers?.Authorization?.replace("Bearer ", "");
  const shortenedToken = fullToken
    ? `${fullToken.slice(0, 5)}...${fullToken.slice(-5)}`
    : "N/A";

  const method = err?.config?.method?.toUpperCase() || "UNKNOWN_METHOD";
  const code = err?.config?.code || "";
  const url = `${err?.config?.url || ""}`;
  const requestId = err?.config?.headers?.["Request-Id"] || "";
  const contentType = err?.config?.headers?.["Content-Type"] || "";
  const origin = err?.config?.headers?.["Origin"] || "";

  console.error(
    `${msg} ${err.message || 'Unknown error'} (Status: ${err.status || 'Unknown'})\n` +
      `→ Code: ${code}\n` +
      `→ Request: ${method} ${url}\n` +
      `→ Token: ${shortenedToken}\n` +
      `→ Content-Type: ${contentType}\n` +
      `→ Request-Id: ${requestId}\n` +
      `→ Origin: ${origin}\n`,
  );
};
