import {
  FaInfoCircle,
  FaCalendarAlt,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

import type { NavItem } from "@/types";

/** Primary navigation items used in the floating navbar. */
export const navItems: NavItem[] = [
  { name: "About", link: "/#about", icon: <FaInfoCircle /> },
  { name: "Events", link: "/#events", icon: <FaCalendarAlt /> },
  { name: "Team", link: "/#team", icon: <FaUsers /> },
  { name: "Contact", link: "/#contact", icon: <FaEnvelope /> },
];
