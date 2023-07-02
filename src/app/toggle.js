export class Toggle {
  constructor() {
    this.btnToggle = document.querySelector("#hamburger");
    this.navbar = document.querySelector("#navbar-toggle");
  }
  show(...inp) {
    const [str, num] = inp;
    if (this.navbar.classList.contains("show")) {
      this.navbar.classList.remove("show");
      document.body.style.overflow = this.navbar.classList.contains("show") ? "hidden" : "auto";
    } else {
      this.navbar.classList.add("show");
      const showing = document.querySelector(".show");
      document.body.style.overflow = this.navbar.classList.contains("show") ? "hidden" : "auto";
    }
  }
  onClick(cb) {
    this.btnToggle.addEventListener("click", cb);
  }
}
