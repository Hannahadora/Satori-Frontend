export interface IJobRole {
  id: string;
  title: string;
  type: string;
  posted: string;
  about: string;
  responsibilities: string[];
  offers: string[];
  note: string;
  applicationLink: string;
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
        id: "design-illustrator-1",
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
        applicationLink: "https://forms.gle/Q5VMGmJTqqRGJa6cA",
      },
    ],
  },
  {
    category: "Sales & marketing",
    openings: 1,
    roles: [
      {
        id: "social-media-manager-1",
        title: "Social media manager",
        type: "Remote",
        posted: "28 September, 2023",
        about:
          "At Satori Mental Health, we are developing an innovative mental health app aimed at providing accessible support resources, mood tracking and online peer communities. As our volunteer social media manager, you will play a key role in growing our online presence and fostering an engaged community of followers.",
        responsibilities: [
          "Creating and managing content calendars across platforms",
          "Developing engaging text, image and video content",
          "Running campaigns and promotions to attract followers",
          "Engaging our audience through responses and interactions",
          "Analyzing performance data and generating insights",
          "Collaborating with marketing team members",
        ],
        offers: [
          "Flexibility to set your own schedule and work remotely",
          "Opportunity to expand your skills and portfolio.",
          "Recognition through features on our website and social media",
          "Free access to the app's mental health resources",
          "Swag including t-shirts, and more",
          "Glowing letter of recommendation for future opportunities",
          "Chance to directly impact mental health access through your work",
        ],
        note: "If you are a capable social media manager passionate about mental health, we would love to have you on our team! To apply, please submit your CV and portfolio link, availability and a short intro through our online form.",
        applicationLink: "https://forms.gle/RcyssczeUkCwQqqB6",
      },
    ],
  },
  {
    category: "People",
    openings: 1,
    roles: [
      {
        id: "community-manager-1",
        title: "Community manager",
        type: "Remote",
        posted: "28 September, 2023",
        about:
          "At Satori Mental Health, we are developing an innovative mental health app aimed at providing accessible support resources, mood tracking and online peer communities. As our volunteer community manager, you will help cultivate a safe, welcoming online community for our mental health app users.",
        responsibilities: [
          "Moderating app forums, groups and chat rooms",
          "Developing community guidelines and policies",
          "Guiding sensitive conversations and mediating conflicts",
          "Identifying and preventing online abuse or unsafe behavior",
          "Engaging users through posts, questions and polls",
          "Promoting positive interactions within the community",
        ],
        offers: [
          "Flexibility to set your own schedule and work remotely",
          "Opportunity to expand your skills and portfolio.",
          "Recognition through features on our website and social media",
          "Free access to the app's mental health resources",
          "Swag including t-shirts, and more",
          "Glowing letter of recommendation for future opportunities",
          "Chance to directly impact mental health access through your work",
        ],
        note: "If you are a capable illustrator passionate about mental health, we would love to have you on our team! To apply, please submit your CV and portfolio link, availability and a short intro through our online form.",
        applicationLink: "https://forms.gle/G5qcSQMcRuc1qffq7",
      },
    ],
  },
];
