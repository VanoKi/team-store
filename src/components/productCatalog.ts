import { getProducts } from "../api/productsApi";

export const createProductCatalog = (): HTMLElement => {
  const catalog = document.createElement("section");
  catalog.setAttribute("aria-labelledby", "catalog-title");

  const heading = document.createElement("h1");
  heading.id = "catalog-title";
  heading.textContent = "Каталог товаров";

  const productsContainer = document.createElement("section");
  productsContainer.setAttribute("aria-label", "Список товаров");

  catalog.append(heading, productsContainer);

  void loadProducts(productsContainer);

  return catalog;
};

const loadProducts = async (container: HTMLElement): Promise<void> => {
  container.textContent = "Загружаем товары…";

  try {
    const products = await getProducts();
    const productList = document.createElement("ul");

    products.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.textContent = `${product.title} — $${product.price}`;
      productList.append(productItem);
    });

    container.replaceChildren(productList);
  } catch {
    container.textContent = "Не удалось загрузить товары.";
  }
};
