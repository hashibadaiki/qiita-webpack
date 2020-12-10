import $ from "jquery";
import { add } from "./add";

console.log(add);
const puls = add(4, 5);
console.log(puls);

$("body").append(puls)

