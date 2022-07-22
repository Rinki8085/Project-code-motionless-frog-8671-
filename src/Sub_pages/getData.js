import axios from "axios";

export function getTodo(userName, page) {
  return axios.get(
    `https://chambray-paper-slicer.glitch.me/restaurant`
  );
}
