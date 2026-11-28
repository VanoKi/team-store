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
