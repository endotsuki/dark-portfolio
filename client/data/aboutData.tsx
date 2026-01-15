import { IconDeviceMobile, IconMail, IconMapPin2 } from "@tabler/icons-react";
import { Icon } from "iconza";

export const journey1 = `I'm a passionate full-stack developer and designer with over 5 years of experience creating digital experiences that matter. My journey began with curiosity about how things work on the web, and it has evolved into a deep expertise in modern technologies.`;
export const journey2 = `I specialize in React, Node.js, and cloud technologies, but what sets me apart is my ability to bridge the gap between design and development. I don't just build applications I craft experiences that users love and businesses depend on.`;
export const journey3 = `When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through talks and mentoring.`;

export const personalInfos = [
  {
    icon: IconMapPin2,
    handle: "San Francisco, CA",
    platform: "Location",
    link: "https://www.google.com/maps?q=San+Francisco,CA",
  },
  {
    icon: IconMail,
    handle: "maosocheathek@gmail.com",
    platform: "Email",
    link: "mailto:maosocheathek@gmail.com",
  },
  {
    icon: IconDeviceMobile,
    handle: "+1 (555) 123-4567",
    platform: "Phone",
    link: "tel:+15551234567",
  },
];

export const education = [
  {
    degree: "Associate Degree",
    school: "Passerelles Numériques Cambodia (PNC)",
    logo: "/pnc.png",
    field: "Web Development",
    years: "2022 - 2024",
  },
  {
    degree: "Baccalaureate (Bac II)",
    school: "Kampong Thom High School",
    logo: "kpt-school.png",
    field: "General Education",
    years: "2021 - 2022",
  },
];

export const socials = [
  {
    icon: <Icon name="GitHub Light" size={23} />,
    handle: "/johndoe",
    platform: "GitHub",
    link: "https://github.com/johndoe",
  },
  {
    icon: <Icon name="LinkedIn" size={23} />,
    handle: "/in/johndoe",
    platform: "LinkedIn",
    link: "https://linkedin.com/in/johndoe",
  },
  {
    icon: <Icon name="Telegram" size={23} />,
    handle: "@johndoe",
    platform: "Telegram",
    link: "https://t.me/johndoe",
  },
  {
    icon: <Icon name="BehanceFill" size={23} />,
    handle: "/so_cheat",
    platform: "Behance",
    link: "https://behance.net/so_cheat",
  },
];
