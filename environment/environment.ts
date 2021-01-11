import dev from "./dev";
import prod from "./prod";
import {string} from "prop-types";

export default {
  ... (process.env.NODE_ENV === "production") ? prod : dev
}
