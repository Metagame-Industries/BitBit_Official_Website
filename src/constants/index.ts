import { access, immortality, influence, ownership } from '@/assets/expectations'
import { airbnb, binance, coinbase, dropbox, telegram, whitepaper, x } from '../assets'

export const navLinks: {
  id: string
  title: string
}[] = [
  // {
  //   id: 'home',
  //   title: 'Home',
  // },
  // {
  //   id: 'expectations',
  //   title: 'Expectations',
  // },
  // {
  //   id: 'features',
  //   title: 'Features',
  // },
  // {
  //   id: 'roadmap',
  //   title: 'Roadmap',
  // },
]

export const features = [
  {
    id: 'feature-1',
    icon: access,
    title: 'Access',
    content: 'Inscriptions are tickets to the BitRealms virtual world',
  },
  {
    id: 'feature-2',
    icon: ownership,
    title: 'Ownership',
    content: 'Players can participate in and own each game through inscriptions.',
  },
  {
    id: 'feature-3',
    icon: immortality,
    title: 'Immortality',
    content: `The gaming platform will be eternally online, existing forever alongside 
    the Bitcoin blockchain.`,
  },
  {
    id: 'feature-4',
    icon: influence,
    title: 'Influence',
    content: `Early participants on the gaming platform will have a full say in the 
    future development of the platform.`,
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    number: 1,
    content: [
      `BitRealms platform officially launches`,
      `First game 'Bit Treasure' goes live`,
      `Fair launch of first game inscription`,
    ],
    // name: 'Herman Jensen',
    title: 'March 2024',
    // img: people01,
  },
  {
    id: 'feedback-2',
    number: 2,
    content: [
      `New inscriptions for multiple games`,
      `Multiple games go live`,
      `BitRealms token (inscription) airdrop begins`,
      `Implementation of dividend mechanism`,
      `Community governance plan launches`,
    ],
    // name: 'Steve Mark',
    title: 'April 2024',
    // img: people02,
  },
  {
    id: 'feedback-3',
    number: 3,
    content: [
      `Development of a game prop trading market based on the BRC-420`,
      `Launch the Bitcoin Layer 2 game chain`,
    ],
    // name: 'Kenn Gallagher',
    title: 'Q2 2024',
    // img: people03,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'USERS WORLDWIDE',
    value: '1 Million+',
  },
  {
    id: 'stats-2',
    title: 'GAMES',
    value: '100+',
  },
  {
    id: 'stats-3',
    title: 'INSCRIPTION COMMUNITIES',
    value: '100+',
  },
]

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: x,
    link: 'https://twitter.com/BitRealms_web3',
  },
  {
    id: 'social-media-2',
    icon: telegram,
    link: 'https://t.me/+mB1YE6AN6uFkYjEx',
  },
  {
    id: 'social-media-3',
    icon: whitepaper,
    link: 'https://bitbitbitbit.notion.site/',
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
]
