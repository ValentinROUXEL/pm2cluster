import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  insecureSkipTLSVerify: true,
  rps: 10,
  duration: '10s',
  vus: 3
};
export default function () {
  http.get('https://localhost:7257/fibonacci?max=100000000');
  sleep(1);
}