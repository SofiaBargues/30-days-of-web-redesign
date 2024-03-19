import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
} from "../assets";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
} from "../assets";

// export const navLinks = [
//   {
//     id: "home",
//     title: "Home",
//   },
//   {
//     id: "features",
//     title: "Features",
//   },
//   {
//     id: "product",
//     title: "Product",
//   },
//   {
//     id: "clients",
//     title: "Clients",
//   },
// ];

// export const features = [
//   {
//     id: "feature-1",
//     icon: star,
//     title: "Rewards Change",
//     content:
//       "The best credit cards offer some tantalizing combinations of promotions and prizes",
//   },
//   {
//     id: "feature-2",
//     icon: shield,
//     title: "100% Secured Change",
//     content:
//       "We take proactive steps make sure your information and transactions are secure.",
//   },
//   {
//     id: "feature-3",
//     icon: send,
//     title: "Balance Transfer Change",
//     content:
//       "A balance transfer credit card can save you a lot of money in interest charges.",
//   },
// ];

// export const feedback = [
//   {
//     id: "feedback-1",
//     content: "Change.",
//     name: "Herman Jensen",
//     title: "Founder & Leader",
//     img: people01,
//   },
//   {
//     id: "feedback-2",
//     content: "Change.",
//     name: "Steve Mark",
//     title: "Founder & Leader",
//     img: people02,
//   },
//   {
//     id: "feedback-3",
//     content: "Change.",
//     name: "Kenn Gallagher",
//     title: "Founder & Leader",
//     img: people03,
//   },
// ];

export const customers = [
  {
    id: "customers-1",
    name: "Ann Birch",
    img: {
      alt: "Tailwind CSS Navbar component",
      src: "data:image/jpeg;base64,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",
    },
    rating: 4,
  },
  {
    id: "customers-1",
    name: "Ann Birch",
    img: {
      alt: "Tailwind CSS Navbar component",
      src: "data:image/jpeg;base64,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",
    },
    rating: 4,
  },
  {
    id: "customers-1",
    name: "Ann Birch",
    img: {
      alt: "Tailwind CSS Navbar component",
      src: "data:image/jpeg;base64,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",
    },
    rating: 4,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Partners",
  //       link: "https://www.hoobank.com/partners/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     {
  //       name: "Blog",
  //       link: "https://www.hoobank.com/blog/",
  //     },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
  //   ],
  // },
];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-4",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];

// export const clients = [
//   {
//     id: "client-2",
//     logo: binance,
//   },
//   { id: "client-1", logo: airbnb },
//   {
//     id: "client-3",
//     logo: coinbase,
//   },
//   {
//     id: "client-4",
//     logo: dropbox,
//   },
// ];
