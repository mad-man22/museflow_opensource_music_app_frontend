export const getApiUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    // If running in development or local, use hostname
    return `http://${window.location.hostname}:8000`;
  }
  return "http://localhost:8000";
};

export const getStreamServiceUrl = () => {
  if (process.env.NEXT_PUBLIC_STREAM_SERVICE_URL) {
    return process.env.NEXT_PUBLIC_STREAM_SERVICE_URL.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    // If running in development or local, use hostname
    return `http://${window.location.hostname}:3001`;
  }
  return "http://localhost:3001";
};

export const API_URL = getApiUrl();
export const STREAM_SERVICE_URL = getStreamServiceUrl();
