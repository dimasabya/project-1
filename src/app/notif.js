export class Notif {
  constructor() {
    this.btnLogin = document.querySelector("#login");
    this.btnStart = document.querySelector("#start");

    this.btnLogin.addEventListener("click", () => {
      this.onClick(this.btnLogin.id);
    });

    this.btnStart.addEventListener("click", () => {
      this.onClick(this.btnStart.id);
    });
  }

  setNotif(str) {
    console.log(str);
  }
  onClick(cb) {
    if (cb === "login") {
      console.log("belum bisa login");
    } else if (cb === "start") {
      console.log("belum bisa mulai");
    }
  }
}
