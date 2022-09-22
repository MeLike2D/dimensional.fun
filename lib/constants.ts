import { FaDiscord, FaGithub, FaTwitter, FaReddit, FaTwitch, FaTelegramPlane, FaInstagram, FaHome, FaBars, FaBox, FaLastfm } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export const socials = [
    { url: "https://discord.gg/8R4d8RydT4", Icon: FaDiscord, title: "discord server"  },
    { url: "https://github.com/melike2d",   Icon: FaGithub,  title: "github profile"  },
    { url: "https://twitter.com/melike2d",  Icon: FaTwitter, title: "twitter profile" },
    { url: "https://reddit.com/u/melike2d", Icon: FaReddit,  title: "reddit profile"  },
    { url: "https://twitch.tv/melike2d",    Icon: FaTwitch,  title: "twitch channel"  },
    { url: "https://last.fm/user/melike2d", Icon: FaLastfm,  title: "lastfm profile"  },
]

export type Route = { href: string; name: string; Icon?: IconType }

export const routes = [
    { href: '/', name: 'home', Icon: FaHome },
    { href: '/feed', name: 'feed', Icon: FaBars },
    { href: '/projects', name: 'projects', Icon: FaBox }
];
