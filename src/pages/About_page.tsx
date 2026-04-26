function AboutPage() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Welcome to the HamsaDex</p>
        <h1>A simple Pokémon explorer</h1>
        <p>
          HamsaDex is a small Pokédex-style web application built for my React
          assignment. It uses real data from PokéAPI and lets users browse
          Pokémon, move between pages, and open a detailed profile for each one.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-box">
          <h2>What HamsaDex does</h2>
          <ul>
            <li>Loads Pokémon data from PokéAPI</li>
            <li>Shows Pokémon cards in a responsive layout</li>
            <li>Uses pagination so the page is not overcrowded</li>
            <li>Lets users click a Pokémon to see more information</li>
            <li>Displays types, abilities, height, weight and base stats</li>
            <li>Uses different pages for Home, Pokédex, Details and About</li>
          </ul>
        </div>

        <div className="info-box">
          <h2>How it was built</h2>
          <ul>
            <li>React for building reusable components</li>
            <li>TypeScript for safer code</li>
            <li>Vite for fast development</li>
            <li>React Router for page navigation</li>
            <li>CSS for the custom HamsaDex design</li>
            <li>GitHub Pages for hosting the finished website</li>
          </ul>
        </div>
      </div>

      <div className="contact-card">
        <div>
          <p className="eyebrow">Project idea</p>
          <h2>Built by Hamsa Abdullah Sheikhdon</h2>
          <p>
            The design of HamsaDex is inspired by modern game menus, with a dark
            background, bright highlights and simple cards. The project helped
            me practise API fetching, routing, pagination and component-based
            frontend development.
          </p>
        </div>

        <a href="/#/pokedex" className="linkedin-button">
          Explore HamsaDex
        </a>
      </div>
    </section>
  );
}

export default AboutPage;