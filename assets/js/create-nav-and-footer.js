function createNavbar () {
    container = document.getElementById("navbar-container")
    container.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Electrillo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-dark" href="#mission">Mission</a>
            </li>
            <li class="nav-item" id="cta-nav">
            <a class="nav-link" href="questions.html">EValuator</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
}

function createFooter () {
    container = document.getElementById("footer-container")
    container.innerHTML = `
    <footer class="flex-wrap fixed-bottom d-none d-md-flex justify-content-between align-items-center py-3 mb-4 border-top">
      <div class="col-4 d-flex align-items-center">
        <span class="text-muted footer-text ms-3 ms-md-5">©2022 Electrillo </span>
      </div>
      <div class="col-4 justify-content-center d-flex">
        <ul class="list-group list-unstyled list-group-horizontal-md" id="footer-links">
          <li class="ms-3"><a class="text-muted" href="index.html">Home</a></li>
          <li class="ms-3"><a class="text-muted" href="#mission">Our Mission</a></li>
          <li class="ms-3"><a class="text-muted" href="team.html">Our Team</a></li>
          <li class="ms-3" id="footer-cta"><a class="footer-link" href="questions.html">Start Here</a></li>
        </ul>
      </div>
      <div class="col-4 justify-content-center d-flex">
        <ul class="nav list-unstyled">
          <li class="mx-3"><a class="text-muted" href="#"><i class="fab fa-twitter"></i></a></li>
          <li class="mx-3"><a class="text-muted" href="#"></a><i class="fab fa-facebook"></i></li>
          <li class="mx-3"><a class="text-muted" href="#"></a><i class="fab fa-linkedin"></i></li>
        </ul>
      </div>
    </footer>
    `
}

createNavbar()
createFooter()