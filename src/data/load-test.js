import http from "k6/http";
import { check } from "k6";

const BASE_URL = "https://damasta-contest.vercel.app";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const home = http.get(`${BASE_URL}/`);
  const prizes = http.get(`${BASE_URL}/dora`);

  console.log(`Home status: ${home.status}`);
  console.log(`Prizes status: ${prizes.status}`);

  check(home, {
    "Home returns 200": (response) => response.status === 200,
  });

  check(prizes, {
    "Prizes returns 200": (response) => response.status === 200,
  });
}