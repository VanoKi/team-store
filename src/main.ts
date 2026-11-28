import "./style.css";
import { getProducts } from "./api/productsApi";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

const main = document.createElement("main");
const heading = document.createElement("h1");
heading.textContent = "Каталог товаров";

const productsContainer = document.createElement("section");
productsContainer.id = "products";
productsContainer.setAttribute("aria-label", "Список товаров");

main.append(heading, productsContainer);
app.replaceChildren(main);

async function loadProducts(): Promise<void> {
  productsContainer.textContent = "Загружаем товары…";

  try {
    const products = await getProducts();
    const productList = document.createElement("ul");

    products.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.textContent = `${product.title} — $${product.price}`;
      productList.append(productItem);
    });

    productsContainer.replaceChildren(productList);
  } catch {
    productsContainer.textContent = "Не удалось загрузить товары.";
  }
}

loadProducts();
