import "./style.css";
import { createProductCatalog } from "./components/productCatalog";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

const main = document.createElement("main");
main.append(createProductCatalog());
app.replaceChildren(main);
