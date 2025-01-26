import { BsShieldCheck, BsShieldX } from "react-icons/bs";
import { LuServer } from "react-icons/lu";

export const FlowServers = [
  {
    status: "severe",
    icon: BsShieldX,
    icon2: LuServer,
  },
  {
    status: "down",
    icon: BsShieldX,
    icon2: LuServer,
  },
  {
    status: "ok",
    icon: BsShieldCheck,
    icon2: LuServer,
  },
];
