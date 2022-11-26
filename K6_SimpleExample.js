import http from "k6/http";
import { group, check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<200"], // 95% of requests should be below this value
  },
};

const BaseUrl = "https://www.purgomalum.com/service/";
const NoProfanity = "profanity";
const Profanity = "shit";

export const GetRequestNoProfanity = (requestType) => {

  const response = http.get(BaseUrl+requestType+"?text="+NoProfanity);
  
  check(response, {
    "Response status is 200": (r) => r.status === 200,
    "Response should contain original text": (r) =>
    r.body.includes(NoProfanity),
  });
};

export const GetRequestProfanity = (requestType) => {

  const response = http.get(BaseUrl+requestType+"?text="+Profanity);

  check(response, {
    "Response status is 200": (r) => r.status === 200,
    "Response should contain filtered text": (r) =>
      r.body.includes("****"),
  });
};

export default function () {
  group("Load Test Plain Text Request", () => {
    GetRequestNoProfanity("plain");
    GetRequestProfanity("plain");
  });
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
