import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

app.innerHTML = `
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#about">Team Store</a>

      <nav class="main-nav" aria-label="Основная навигация">
        <a class="nav-link is-active" href="#about" aria-current="page">О нас</a>
        <a class="nav-link" href="#team">Команда</a>
      </nav>
    </header>

    <main>
      <section class="about-section" id="about" aria-labelledby="about-title">
        <p class="eyebrow">Командный учебный проект</p>
        <h1 id="about-title">О магазине</h1>
        <p class="about-description">
          Мы делаем онлайн-магазин для учебного задания. В каталоге будут товары
          из DummyJSON API. Их можно будет добавлять в корзину и смотреть общую
          стоимость.
        </p>
      </section>

      <section class="team-section" id="team" aria-labelledby="team-title">
        <div class="section-heading">
          <div>
            <h2 id="team-title">Участники</h2>
          </div>
        </div>

        <div class="team-grid">
          <article class="team-card">
            <h3>Имя или GitHub-логин участника 1</h3>
            <p class="team-contribution">Вклад в проект: добавить описание.</p>
          </article>

          <article class="team-card">
            <h3>Имя или GitHub-логин участника 2</h3>
            <p class="team-contribution">Вклад в проект: добавить описание.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Team Store · Учебный проект</p>
    </footer>
  </div>
`;
