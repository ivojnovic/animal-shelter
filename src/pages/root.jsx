// Image by
// https://pixabay.com/illustrations/cat-dog-cute-art-abstract-2489842/

export default function Root() {
  return (
    <div className="header">
      <div className="profile">
        <img src="/profile1.jpg" alt=""></img>
      </div>

      <div class="nav-menu">
        <ul>
          <li>
            <a href="#about">O nama</a>
          </li>
          <li>
            <a href="#list">Popis</a>
          </li>
          <li>
            <a href="#donation">Donacije</a>
          </li>
          <li>
            <a href="#news">Novosti</a>
          </li>
          <li>
            <a href="#admin">ADMIN PANEL</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
