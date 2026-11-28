import "./style.css";
import { getProducts } from "./api/productsApi";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

app.innerHTML = `
  <main>
    <h1>Каталог товаров</h1>
    <section id="products" aria-label="Список товаров">
      <p>Загружаем товары…</p>
    </section>
  </main>
`;

const productsContainer = document.querySelector<HTMLElement>("#products");
if (!productsContainer) {
  throw new Error("Контейнер товаров #products не найден");
}
productsContainer.textContent = "Загружаем товары…";
async function loadProducts(): Promise<void> {
  productsContainer.textContent = "Загружаем товары…";

  try {
    const products = await getProducts();

    productsContainer.innerHTML = products
      .map((product) => `<p>${product.title} — $${product.price}</p>`)
      .join("");
  } catch {
    productsContainer.textContent = "Не удалось загрузить товары.";
  }
}

loadProducts();
