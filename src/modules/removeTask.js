import { tasks } from "../index.js";

export default (index) => {
    tasks.splice(index, 1);
}