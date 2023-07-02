export class Chose {
  constructor() {
    this.toggle = document.querySelector("#img-toggle");
  }

  show(str) {
    if (!this.toggle.classList.contains("rotate")) {
      this.toggle.classList.add("rotate");
    } else {
      this.toggle.classList.remove("rotate");
    }
  }

  onClick(cb) {
    this.toggle.addEventListener("click", cb);
  }
}
