export const run = (notif, toggle) => {
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
};
