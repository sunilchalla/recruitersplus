import { toast } from "react-toastify";

// Fetch.js
/**
 * https://javascript.plainenglish.io/the-ultimate-javascript-fetch-api-cheatsheet-e60b98c8cdbe
 */

const API_HOST = "http://bookingservices-env.eba-z3vieews.us-east-1.elasticbeanstalk.com";

async function request(url, params, method = "GET", resType = "json") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  function objectToQueryString(obj) {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  }

  if (params) {
    if (method === "GET") {
      // eslint-disable-next-line no-param-reassign
      url += `?${objectToQueryString(params)}`;
    } else {
      options.body = JSON.stringify(params);
    }
  }

  function generateErrorResponse(message, code) {
    const response = {
      status: "error",
      message,
    };
    return code ? { ...response, code } : response;
  }

  try {
    const response = await fetch(API_HOST + url, options);
    const result = resType === "json" ? await response.json() : response;

    if (response.status >= 400) {
      const msg =
        typeof result === "string"
          ? result
          : "The server responded with an unexpected status.";
      return generateErrorResponse(msg);
    }

    // handle errors that return with a 200 status
    if (result.message_type === "error") {
      const msg =
        response.reason ||
        result.reason ||
        "An error occurred fetching resources.";
      const { code } = result;

      return generateErrorResponse(msg, code);
    }

    return result;
  } catch (e) {
    return generateErrorResponse("An error occurred fetching resources.");
  }
}

function get(url, params) {
  return request(url, params);
}

function post(url, params) {
  return request(url, params, "POST");
}

function update(url, params) {
  return request(url, params, "PUT");
}

function remove(url, params) {
  return request(url, params, "DELETE");
}

function getFile(url, params) {
  return request(url, params, "GET", "file");
}

const Fetch = {
  get,
  post,
  update,
  remove,
  getFile,
};

export default Fetch;
