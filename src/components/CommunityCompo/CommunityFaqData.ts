interface communityFaqItem{
    id: number;
    question: string;
    answer: string;
  }
 const communityFaqData: communityFaqItem[]= [

    {
        id: 1,
        question: "How does the community work?",
        answer: "We have two community platforms, WhatsApp and our App. On WhatsApp, we grow a community where you can get real time updates on Satori and partake in developing Satori for the better. In our App, the Satori community is a warm and judgment-free zone that encourages open and honest conversations about mental health. Our commitment to anonymity ensures you can express yourself authentically while maintaining the privacy you desire.",
      },
    {
        id: 2,
        question: "Is my identity completely anonymous within the community?",
        answer: "Yes, we prioritize user privacy. You can engage in community discussions without using your name. We use generated avatars that we shuffle to represent user profiles.",
      },
    {
        id: 3,
        question: " Are there any community guidelines or rules I should be aware of before engaging with others?",
        answer: "Yes, we have community guidelines in place to maintain a positive and safe environment for all users. These guidelines promote respectful communication, inclusivity, and the encouragement of others.",
      },
    {
        id: 4,
        question: " Is the Satori Mental Health Community open to everyone?",
        answer: "Yes, the Satori Mental Health Community is generally open to individuals seeking mental health support, information, and interaction. It is designed to be inclusive and non-discriminatory.",
      },
    {
        id: 5,
        question: " Can I share my personal mental health experiences in the community?",
        answer: " Yes, we encourage sharing of personal mental health experiences in our community. It can help foster a sense of connection and support among members who may relate to similar struggles.",
      },
    {
        id: 6,
        question: " Are there moderators or professionals overseeing the community?",
        answer: "Yes, the Satori Mental Health Community has moderators and mental health professionals who oversee and ensure the community's safe and respectful environment. They also provide guidance and support when needed",
      },
    {
        id: 7,
        question: "Can I seek professional advice in the community? ",
        answer: "Yes, you can seek professional advice from the community. We have professional therapists available to reply to your concerns in the community. You’ll know them using the Zen master badge (the badge icon will be inserted here).",
      },
    {
        id: 8,
        question: " What are badges?",
        answer: "At Satori, due to the anonymity nature of our community, we use badges or tags to denote professional accounts. This will help you differentiate which advice are professional and individual experiences. We also have badges for different profile levels and user groups which include Seeker, Voyager, Trailblazer, Ambassador, Sage and Zen master. These profile levels represent your app usage, engagements and user groups. Our verified and certified mental health professionals have the Zen master badges, mental health advocates have the Ambassador and sage badges while other users have the seeker, voyager and the trailblazer badges. Use the app often to transit from one level to another.",
      },
 ]
 export default communityFaqData