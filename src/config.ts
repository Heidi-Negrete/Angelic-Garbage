import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "http://www.angelicgarbage.com",
  author: "Heidi Negrete",
  desc: "A humble blog of assorted technical, mathematical, and creative garbage.",
  title: "Angelic Garbage",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Heidi-Negrete",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/heidi_negrete",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/894664709461143602",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@angelicgarbage",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/Angelic-Garbage",
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/angelicgarbage/about",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/AngelicGarbage/",
    linkTitle: `${SITE.title} on Steam`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:heidinegrete@pm.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
