import { DiscordSecondary, InstaSecondary, TwitterSecondary } from "assets/icons";

export const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/phtWQDjv';

export const socialLinks = [
  {
    image: <InstaSecondary />,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com'
  },
  {
    image: <DiscordSecondary />,
    href: DISCORD_LINK
  },
  {
    image: <TwitterSecondary />,
    href: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://www.twitter.com'
  },
]