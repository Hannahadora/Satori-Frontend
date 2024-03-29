import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);

const modalEaseInAndOut = (modalRef: any, isOpen: Boolean) => {
    if (isOpen) {
        gsap.fromTo(modalRef.current, {
            x: '-100%',
            opacity: 0,
        }, {
            duration: 0.5,
            x: 0,
            opacity: 1,
            ease: 'slow(0.5, 0.5, false)',
        });
    } else {
        gsap.to(modalRef.current, {
            duration: 0.5,
            x: '-100%',
            opacity: 0,
            ease: 'slow(0.5, 0.5, false)',
        });
    }
}

const easeIn = (ref: any) => {
    gsap.fromTo(ref.current, {
        x: '-100%',
        opacity: 0,
    }, {
        duration: 0.8,
        x: 0,
        opacity: 1,
        ease: 'slow(0.7, 0.7, false)',
    });
}

const slideDown = (ref: any) => {
    gsap.fromTo(ref.current, {
        y: '-100%',
        opacity: 0,
    }, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: 'slow(0.7, 0.7, false)',
    });
}
const zoomOut = (ref: any) => {
    gsap.fromTo(ref.current,
        { duration: 0.3, scale: 0.2, opacity: 0 },
        { duration: 0.3, scale: 1, opacity: 1 }
    );
}

const spinCircle = (ref: React.RefObject<HTMLElement>, duration: any) => {
    gsap.to(ref.current, {
        duration: duration,
        rotate: 360,
        repeat: -1,
        ease: "none",
    });
}


const typingAnimation = (ref: React.RefObject<HTMLElement>, typedText: string) => {
    let index = 0;

    gsap.to(ref.current, {
        text: {
            value: typedText,
            delimiter: "",
            padSpace: true,
        },
        duration: 100, // Animation duration in seconds
        onUpdate: () => {
            index++;
        },
        onComplete: () => {
            // Animation complete
        },
    });
}


    export {
        modalEaseInAndOut,
        easeIn,
        slideDown,
        zoomOut,
        spinCircle,
        typingAnimation
    }