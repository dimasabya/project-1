import "./style.scss";

import { run } from "./app/app";
import { Notif } from "./app/notif";
import { Toggle } from "./app/toggle";

const notif = new Notif();
const toggle = new Toggle();

run(notif, toggle);
