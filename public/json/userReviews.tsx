import user_icon_1 from '../../src/assets/images/dummy/user_1.png'
import user_icon_2 from '../../src/assets/images/dummy/user_2.png'
import user_icon_3 from '../../src/assets/images/dummy/user_3.png'

export interface IReview {
  icon: string
  name: string
  msg: string
  role: string
}

export const usersReviews: Array<IReview> = [
  {
    icon: user_icon_1,
    name: "Chisom Maduabuchi",
    role: "Mental health enthusiast",
    msg: "Satori made me realise that mental health doesn’t have to be daunting. The educational content is presented in a way that’s easy to grasp, and the community’s support is uplifting. It has made me become  a mental health enthusiast.",
  },
  {
    icon: user_icon_2,
    name: "Jane Chuka",
    role: "Community member",
    msg: "As someone who dreaded discussions about mental health, Satori pleasantly surprised me! It’s incredible how this app made me feel comfortable and curious about the subject. The community’s positivity is contagious. Thank you, Satori, for changing my mindset.",
  },
  {
    icon: user_icon_3,
    name: "Emily China",
    role: "Mental health advocate",
    msg: "Satori is an invaluable resource for mental health education. Its engaging content and insights have made mental health accessible and relatable to users. As a mental health educator, I'm impressed by the positive impact Satori has on its community, promoting growth and self-awareness",
  },
];