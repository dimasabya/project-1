export class Chose {
  constructor() {
    this.toggle = document.querySelector("#img-toggle");
  }

  show(str) {
    if (!this.toggle.classList.contains("rotate")) {
      this.toggle.classList.add("rotate");
      //   const rotate = document.querySelector(".rotate");
      //   rotate.style.transform = `rotateY(${str}deg)`;
    } else {
      this.toggle.classList.remove("rotate");
      //   this.rotate.style.transform = `rotateY(0)`;
    }
  }

  onClick(cb) {
    this.toggle.addEventListener("click", cb);
  }
}
