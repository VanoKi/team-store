import "./style.css";
import { getProducts } from "./api/productsApi";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

app.innerHTML = `
  <main>
    <h1>Каталог товаров</h1>
    <section id="products" aria-label="Список товаров"></section>
  </main>
`;

const productsContainer = document.querySelector<HTMLElement>("#products");
if (!productsContainer) {
  throw new Error("Контейнер товаров #products не найден");
}

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
