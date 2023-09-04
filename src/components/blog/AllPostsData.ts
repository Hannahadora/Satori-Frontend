import image1 from '../../assets/images/dummy/AllPost3.png';
import image2 from '../../assets/images/dummy/AllPosts2.png';
import image3 from '../../assets/images/dummy/AllPost3.png';
import image4 from '../../assets/images/dummy/AllPost3.png';
import image5 from '../../assets/images/dummy/AllPosts2.png'
import image6 from '../../assets/images/dummy/AllPosts1.png';
import image7 from '../../assets/images/dummy/AllPost3.png';
import image8 from '../../assets/images/dummy/AllPost3.png';
import image9 from '../../assets/images/dummy/AllPost3.png';
import image10 from '../../assets/images/dummy/AllPost3.png';
import image11 from '../../assets/images/dummy/AllPost3.png';
import image12 from '../../assets/images/dummy/AllPost3.png';
import image13 from '../../assets/images/dummy/AllPosts1.png';
import image14 from '../../assets/images/dummy/AllPost3.png';
import image15 from '../../assets/images/dummy/AllPost3.png';
import image16 from '../../assets/images/dummy/AllPost3.png';
import image17 from '../../assets/images/dummy/AllPost3.png';
import image18 from '../../assets/images/dummy/AllPost3.png';
import image19 from '../../assets/images/dummy/AllPost3.png';
import image20 from '../../assets/images/dummy/AllPost3.png';
import image21 from '../../assets/images/dummy/AllPost3.png';
import image22 from '../../assets/images/dummy/AllPost3.png';



interface AllPostDataItems {
id: number;
img: string;
title: string;
heading: string;
content:string;
button: string;
links: string[];
}

const AllPostsData: AllPostDataItems[] =[
    {
    id: 1,
    img: image1,
    title: "Lastest Article ",
    heading: "What is Mental health and why is it important?",
    content: "Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image1,
    title: "Lastest Article ",
    heading: "What is Mental health and why is it important?",
    content: "Breaking Barriers: An eye-opening look into how mental health barriers can impact your life, and practical strategies to overcome them.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image1,
    title: "Lastest Article ",
    heading: "What is Mental health and why is it important?",
    content: " Mental health disorders can significantly impact a person's ability to function in daily life. They can affect emotional regulation, cognition, and so on.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image3,
    title: "Lastest Article ",
    heading: "10 facts on mental health",
    content: "Mental health issues can affect individuals of all ages, including children and adolescents.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image2,
    title: "Lastest Article ",
    heading: "Types of mental health disorders?",
    content: "Specific mental disorders are grouped together due to features they have in common.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },

    {
    id: 1,
    img: image13,
    title: "Lastest Article ",
    heading: "How to start a gratitude journal",
    content: "Your first step toward starting a gratitude journal is to purchase a notebook for journaling. Any notebook that suits you will do. ",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image4,
    title: "Lastest Article ",
    heading: "How does Mental health affects your life?",
    content: "Breaking Barriers: An eye-opening look into how mental health barriers can impact your life, and practical strategies to overcome them.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image3,
    title: "Lastest Article ",
    heading: "How does Mental health affects your life?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['Well being', 'Awareness', 'Understanding mental health']
    },
    {
    id: 1,
    img: image3,
    title: "Lastest Article ",
    heading: "Risk factors for mental health conditions",
    content: "Everyone is at some risk of developing a mental health disorder, regardless of age, sex, income, or ethnicity.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image3,
    title: "Lastest Article ",
    heading: "How does Mental health affects your life?",
    content: "Breaking Barriers: An eye-opening look into how mental health barriers can impact your life, and practical strategies to overcome them.",
    button: "Read Article",
    links: ['Well being', 'Awareness', 'Understanding mental health']
    },
    {
    id: 1,
    img: image3,
    title: "Lastest Article ",
    heading: "How does Mental health affects your life?",
    content: "Breaking Barriers: An eye-opening look into how mental health barriers can impact your life, and practical strategies to overcome them.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 1,
    img: image3,
    title: "Lastest Article ",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 2,
    img: image3,
    title: "Lastest Article ",
    heading: "Risk factors for mental health conditions",
    content: "Everyone is at some risk of developing a mental health disorder, regardless of age, sex, income, or ethnicity.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 2,
    img:image5,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 2,
    img:image6,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 2,
    img:image7,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 5,
    img:image8,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 3,
    img:image9,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 3,
    img:image10,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 3,
    img:image11,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 4,
    img:image12,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 4,
    img:image12,
    
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['Well being', 'Awareness', 'Understanding mental health']
    },
    {
    id: 4,
    img:image12,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
    {
    id: 4,
    img:image13,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
    {
    id: 4,
    img:image14,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
    {
    id: 5,
    img:image15,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 5,
    img:image15,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 5,
    img:image15,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },

    {
    id: 5,
    img:image15,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
    {
    id: 5,
    img:image16,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['Well being', 'Awareness', 'Understanding mental health']
    },
    
    {
    id: 6,
    img:image18,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
    {
    id: 6,
    img:image19,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
    {
    id: 6,
    img:image20,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 7,
    img:image21,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 7,
    img:image22,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 7,
    img:image17,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 7,
    img:image17,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    {
    id: 7,
    img:image17,
    title: "Lastest Article",
    heading: "Lorem, ipsum dolor sit amet adipisicing elit. Obcaecati.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolor soluta accusantium qui amet animi.",
    button: "Read Article",
    links: ['mental health', 'Well being', 'Understanding mental health']
    },
    
]
export default AllPostsData
