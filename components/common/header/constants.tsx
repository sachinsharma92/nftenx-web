import { DiscordPrimary, OpenSeaPrimary } from "assets/icons"

export const navData = {
  navButtons: [
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Mentors',
      href: '/mentors'
    },
    {
      title: 'Programming',
      href: '/programming'
    },
    {
      title: 'Minting',
      href: '/minting'
    },
    {
      title: 'FAQs',
      href: '/faqs'
    },
  ]
}

export const socialLinks = [
  {
    title: 'Discord',
    img: <DiscordPrimary />,
    href: 'https://www.discord.com'
  },
  {
    title: 'OpenSea',
    img: <OpenSeaPrimary />,
    href: 'https://www.opensea.com'
  }
]