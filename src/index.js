import "./style.scss";

import { run } from "./app/app";
import { Notif } from "./app/notif";
import { Toggle } from "./app/toggle";
import { Chose } from "./app/chose";

const notif = new Notif();
const toggle = new Toggle();
const choseTogle = new Chose();

run(notif, toggle, choseTogle);
