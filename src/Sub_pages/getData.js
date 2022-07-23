import axios from "axios";

export function getTodo(sort,shop,page) {
  console.log("page",page)
  return axios.get(
    `https://chambray-paper-slicer.glitch.me/restaurant?${sort}=${shop}&_page=${page}&_limit=10`
  );
}

export function getFood(page){
  return axios.get(
    `https://chambray-paper-slicer.glitch.me/restaurant?_page=${page}&_limit=10`
  );
}


