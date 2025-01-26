import { BsShieldCheck, BsShieldX } from "react-icons/bs";

export const ServerStatuses = [
  {
    name: "Critical",
    icon: BsShieldX,
    status: "critical",
  },
  {
    name: "High",
    icon: BsShieldX,
    status: "high",
  },
  {
    name: "Low",
    icon: BsShieldCheck,
    status: "low",
  },
];
