export interface IJobRole {
  title: string;
  type: string;
  posted: string;
  about: string;
  responsibilities: string[];
  offers: string[];
  note: string;
}

export interface IJobData {
  category: string;
  openings: number;
  roles: IJobRole[];
}

export const jobOpenings: Array<IJobData> = [
  {
    category: "Design",
    openings: 1,
    roles: [
      {
        title: "Design Illustrator",
        type: "Remote",
        posted: "28 September, 2023",
        about:
          "At Satori Mental Health, we are developing an innovative mental health app aimed at providing accessible support resources, mood tracking and online peer communities. As our volunteer illustrator, you will play a key role in bringing this product to life visually and shaping an engaging, inclusive user experience. Your responsibilities will include:",
        responsibilities: [
          "Collaborating with UX designers and product managers to understand visual requirements.",
          "Creating custom graphic assets like app characters, icons, buttons, backgrounds.",
          "Designing animated elements and microinteractions to delight users.",
          "Developing informational illustrations and graphics for in-app mental health content.",
          "Ensuring visuals adhere to brand guidelines for colors, styles, etc.",
          "Adapting illustrations for different target audiences such as teenagers vs adults.",
          "Optimizing graphics for mobile screens and responsive use",
          "Contributing visuals across the product ecosystem including marketing sites.",
        ],
        offers: [
          "Flexibility to set your own schedule and work remotely.",
          "Opportunity to expand your skills and portfolio.",
          "Recognition through features on our website and social media.",
          "Free access to the app's mental health resources.",
          "Swag including t-shirts, and more.",
          "Glowing letter of recommendation for future opportunities",
          "Chance to directly impact mental health access through your work",
        ],
        note: "If you are a capable illustrator passionate about mental health, we would love to have you on our team! To apply, please submit your CV and portfolio link, availability and a short intro through our online form.",
      },
    ],
  },
  {
    category: "Sales & marketing",
    openings: 1,
    roles: [
      {
        title: "Social media manager",
        type: "Remote",
        posted: "28 September, 2023",
        about:
          "At Satori Mental Health, we are developing an innovative mental health app aimed at providing accessible support resources, mood tracking and online peer communities. As our volunteer social media manager, you will play a key role in growing our online presence and fostering an engaged community of followers.",
        responsibilities: [],
        offers: [],
        note: "",
      },
    ],
  },
  {
    category: "People",
    openings: 1,
    roles: [
      {
        title: "Community manager",
        type: "Remote",
        posted: "28 September, 2023",
        about:
          "At Satori Mental Health, we are developing an innovative mental health app aimed at providing accessible support resources, mood tracking and online peer communities. As our volunteer illustrator, you will play a key role in bringing this product to life visually and shaping an engaging, inclusive user experience. Your responsibilities will include:",
        responsibilities: [],
        offers: [],
        note: "",
      },
    ],
  },
];
