import "./style.css";
import { getProducts } from "./api/productsApi";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

app.textContent = "Team Store";
