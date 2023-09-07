import latest from '../../assets/images/dummy/latest.png';
import smallimg from '../../assets/images/dummy/smallimg.png';
import fullimg from '../../assets/images/dummy/fullimg.png';
import lastimg from '../../assets/images/dummy/lastimg.png';

interface LatestsArticlesDataItems {
    id: number;
    latest: string;
    title: string;
    heading: string;
    intro: string;
    firstContent: string;
    secondContent: string;
    thirdContent: string;
    fourthContent: string;
    lastContent: string;
    secondSubtitle: string;
    subtitle: string;
    installbtn: string;
    links: string[];
    smallimg: string;
    fullimg: string;
    lastimg: string;
    lastcontent: string;
  }


    const LatestsArticlesData: LatestsArticlesDataItems[] =[
        {
        id: 1,
        latest: latest,
        title: "Lastest Article ",
        heading: "What is Mental health and why is it important?",
        intro: "Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community",
        subtitle: "What is Mental health?",
        firstContent: "Lorem ipsum dolor sit amet consectetur. Vel ut tristique in erat et ornare aliquam nisl volutpat. In at amet quam lectus. Tincidunt in vitae habitant vivamus augue nam enim amet. Accumsan et massa natoque tortor tempus vitae ultrices ullamcorper. Adipiscing sodales mi et amet in. At lorem quisque donec sit vitae est elementum enim sodales. Platea arcu eleifend sapien eget in sit sapien etiam nulla. Vel urna eget ultricies purus tincidunt sem sit turpis. Nibh mollis eget massa praesent urna. Dui nec ultrices blandit eu. Lacus dictum blandit sollicitudin rhoncus nulla urna eu malesuada. Placerat in arcu libero et viverra vitae venenatis at elementum. Purus consequat suscipit blandit cursus ut lobortis blandit nunc ac. Scelerisque neque nibh quisque sit semper porta. ",
        smallimg: smallimg,
        secondContent: "Donec enim magnis condimentum adipiscing egestas mauris quis pellentesque eros. Enim commodo at diam enim egestas etiam pulvinar. Ut auctor elit faucibus viverra pulvinar. Amet mus aenean eu nullam turpis. Euismod cursus a neque sed leo et viverra bibendum. Non odio neque mauris id accumsan iaculis amet vulputate. Tortor eget ipsum bibendum vivamus consequat erat. Tellus eros faucibus lectus hac a non. Aliquam sit tellus id in vivamus risus volutpat. Vitae quisque id amet in aliquam. Ante morbi nullam imperdiet magna in. Placerat adipiscing euismod turpis ultrices convallis nec lectus fermentum laoreet. Laoreet suspendisse cursus amet viverra placerat ut est. Id egestas arcu amet diam enim scelerisque. Pharetra sit pretium ut diam et pellentesque. ",
        thirdContent: "Donec enim magnis condimentum adipiscing egestas mauris quis pellentesque eros. Enim commodo at diam enim eges placerat ut est. Id egestas arcu amet diam enim scelerisque. Pharetra sit pretium ut diam et pellentesque. ",
        fourthContent: "Quisque scelerisque cursus leo vitae purus. Magna elementum sapien euismod magna quis porttitor ac facilisis. Donec fermentum augue mauris et. Nulla leo mauris lacus tortor sagittis lorem quis. Phasellus sollicitudin pretium vel gravida fames integer diam massa aliquet. Amet ullamcorper aliquet pellentesque id massa venenatis suspendisse orci. Vel cursus sed urna et vulputate. Eu pretium enim mauris turpis pharetra ut. Mauris libero egestas amet vitae dictum sit. Viverra eget eu sed dictum. Erat id potenti duis vitae sapien neque ut leo sed. Vel dictum id nisl enim sapien tempor massa vel dui. Sit massa placerat sed sed rhoncus. Quis sit in dui ultricies nullam a lobortis lorem consequat. Eu ipsum diam aliquam id sit lacus lectus scelerisque. Duis amet lacus neque et vulputate ornare cum. Augue auctor ut vulputate maecenas nulla pellentesque nunc. Id orci ornare bibendum tortor ultrices pulvinar egestas. Viverra purus pharetra nec sit ut posuere. Nec nec sed vitae dignissim malesuada vitae pellentesque.",
        fullimg: fullimg,
        secondSubtitle: "Why is it important?",
        lastContent: "Quisque scelerisque cursus leo vitae purus. Magna elementum sapien euismod magna quis porttitor ac facilisis. Donec fermentum augue mauris et. Nulla leo mauris lacus tortor sagittis lorem quis. Phasellus sollicitudin pretium vel gravida fames integer diam massa aliquet. Amet ullamcorper aliquet pellentesque id massa venenatis suspendisse orci. Vel cursus sed urna et vulputate. Eu pretium enim mauris turpis pharetra ut. Mauris libero egestas amet vitae dictum sit. Viverra eget eu sed dictum. Erat id potenti duis vitae sapien neque ut leo sed. Vel dictum id nisl enim sapien tempor massa vel dui. Sit massa placerat sed sed rhoncus. Quis sit in dui ultricies nullam a lobortis lorem consequat. Eu ipsum diam aliquam id sit lacus lectus scelerisque. Duis amet lacus neque et vulputate ornare cum. Augue auctor ut vulputate maecenas nulla pellentesque nunc. Id orci ornare bibendum tortor ultrices pulvinar egestas. Viverra purus pharetra nec sit ut posuere. Nec nec sed vitae dignissim malesuada vitae pellentesque.",
        lastimg: lastimg,
        lastcontent: "Lorem ipsum dolor sit amet consectetur. Vel ut tristique in erat et ornare aliquam nisl volutpat. In at amet quam lectus. Tincidunt in vitae habitant vivamus augue nam enim amet. Accumsan et massa natoque tortor tempus vitae ultrices ullamcorper. Adipiscing sodales mi et amet in. At lorem quisque donec sit vitae est elementum enim sodales. Platea arcu eleifend sapien eget in sit sapien etiam nulla. Vel urna eget ultricies purus tincidunt sem sit turpis. Nibh mollis eget massa praesent urna. Dui nec ultrices blandit eu. Lacus dictum blandit sollicitudin rhoncus nulla urna eu malesuada. Placerat in arcu libero et viverra vitae venenatis at elementum. Purus consequat suscipit blandit cursus ut lobortis blandit nunc ac. Scelerisque neque nibh quisque sit semper porta. ",
        links: ['mental health', 'Well being', 'Understanding mental health'],
        installbtn: "install"

        },

    ]
    export default LatestsArticlesData