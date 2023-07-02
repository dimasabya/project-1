export const run = (notif, toggle, choseToggle) => {
  notif.onClick = (cb) => {
    if (cb === "login") {
      notif.setNotif(alert("belum bisa login"));
    } else {
      notif.setNotif(alert("belum bisa mulai"));
    }
  };

  toggle.onClick(() => {
    toggle.show("block", 0);
  });

  choseToggle.onClick(() => {
    choseToggle.show(180);
  });
};
