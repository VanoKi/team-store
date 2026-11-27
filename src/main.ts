import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("#app not found");
}

app.innerHTML = `
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#about" aria-label="Team Store — главная">
        <span class="brand-mark" aria-hidden="true">T</span>
        <span>team<span class="brand-accent">store</span></span>
      </a>

      <nav class="main-nav" aria-label="Основная навигация">
        <a class="nav-link is-active" href="#about" aria-current="page">О нас</a>
        <a class="nav-link" href="#team">Команда</a>
        <span class="nav-coming-soon">Каталог скоро</span>
      </nav>
    </header>

    <main>
      <section class="about-section" id="about" aria-labelledby="about-title">
        <div class="about-copy">
          <p class="eyebrow"><span class="status-dot"></span> Учебный командный проект</p>
          <h1 id="about-title">Покупки, которые<br /><span>радуют каждый день.</span></h1>
          <p class="about-description">
            Мы создаём небольшой онлайн-магазин, в котором можно изучать каталог
            товаров и собирать покупки в корзину. Этот проект — наша совместная
            практика командной разработки.
          </p>
          <a class="primary-link" href="#team">
            Познакомиться с командой
            <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div class="about-art" aria-hidden="true">
          <div class="art-orbit orbit-one"></div>
          <div class="art-orbit orbit-two"></div>
          <div class="art-card card-back"><span>ваши находки</span><i>✳</i></div>
          <div class="art-card card-front">
            <span class="card-kicker">TEAM STORE</span>
            <span class="card-illustration">✳</span>
            <span class="card-caption">Собираем<br />хорошее вместе</span>
          </div>
          <span class="floating-spark spark-one">✦</span>
          <span class="floating-spark spark-two">✳</span>
        </div>
      </section>

      <section class="team-section" id="team" aria-labelledby="team-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Люди за проектом</p>
            <h2 id="team-title">Наша команда</h2>
          </div>
          <p class="section-note">Два участника, одна общая цель<br />и много хороших идей.</p>
        </div>

        <div class="team-grid">
          <article class="team-card team-card-sun">
            <div class="avatar avatar-sun" aria-hidden="true">01</div>
            <div class="team-card-copy">
              <p class="team-role">Участник команды</p>
              <h3>Имя или GitHub-логин</h3>
              <p class="team-contribution">Кратко опишите вклад участника в проект.</p>
            </div>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>

          <article class="team-card team-card-blue">
            <div class="avatar avatar-blue" aria-hidden="true">02</div>
            <div class="team-card-copy">
              <p class="team-role">Участник команды</p>
              <h3>Имя или GitHub-логин</h3>
              <p class="team-contribution">Кратко опишите вклад участника в проект.</p>
            </div>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <a class="brand footer-brand" href="#about">
        <span class="brand-mark" aria-hidden="true">T</span>
        <span>team<span class="brand-accent">store</span></span>
      </a>
      <p>Учимся создавать вместе · 2026</p>
    </footer>
  </div>
`;
