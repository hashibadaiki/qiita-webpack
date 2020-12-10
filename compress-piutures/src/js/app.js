import $ from "jquery";
import { add } from "./add";
import "../scss/style.scss";

console.log(add);
const puls = add(4, 5);
console.log(puls);

$("body").append(puls)

