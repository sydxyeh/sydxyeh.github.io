export type ProjImg = {
    src: string;
    alt: string;
}

export const emptyImg = {
    src: "",
    alt: ""
}

export type Proj = {
    title: string;
    summary: string;
    description: string;
    figma: string;
    pics: ProjImg[];
}

export const projects: Proj[] = [{
    title: "iMAKE",
    summary: "Your new favorite AR-based art-sharing app",
    description: "Through the app, which is designed to take full advantage of college campuses, students and faculty can share and interact with each other's work. Users can post their art to temporary exhibitions on the app and these pieces will be shown through AR exhibits in buildings on campus. People passing by can scan the walls of classrooms and hallways to reveal the hidden artwork their peers have posted all over campus. iMAKE's goal is to make art more accessible and fully immerse people in the beauty of sharing ideas through art and appreciating campus.",
    figma: "https://www.figma.com/proto/jfH8EYTuSqudXO7CzGU5VV/Yeh%2C-Sydney-(Master)?embed_host=share&kind=proto&node-id=687-644&page-id=687%3A629&scaling=scale-down&starting-point-node-id=690%3A1629&viewport=221%2C571%2C0.16",
    pics: [
        {
            src: "https://static.wixstatic.com/media/cd2846_bd54a9ea90844b5b93dba838164dfd93~mv2.png",
            alt: "Vision"
        },
        {
            src: "https://static.wixstatic.com/media/cd2846_3f0339b3703449f5a64fc9c05b112445~mv2.png",
            alt: "Lo-Fi Wireframe"
        },
        {
            src: "https://static.wixstatic.com/media/cd2846_3cad1cdd99194cc6a3e12a71822c7ff5~mv2.png",
            alt: "Concept Research"
        },
        {
            src: "https://static.wixstatic.com/media/cd2846_e5a4b3dd2f674a788e203cd0de840d26~mv2.png",
            alt: "First Prototype"
        },
        {
            src: "https://static.wixstatic.com/media/cd2846_b60016dcf8e94de8b595dbd949962d69~mv2.png",
            alt: "Final Prototype Wireframe"
        }
    ]
}, {
    title: "Time Twister",
    summary: "A virtual vending machine of time",
    description: "Time Twister takes the intangible concept of 'time' and creates an interactive game-style vending machine of time. The quiz at the beginning functions as the 'token' and your journey is the item dispensed (hint: there are 3 journeys to explore)... Have fun!",
    figma: "https://www.figma.com/proto/ECjkWctxcUP3fOFGpRLdIN/Section-1%2C-Team-9?embed_host=share&kind=proto&node-id=443-7017&page-id=0%3A1&scaling=scale-down&starting-point-node-id=443%3A7017&viewport=1446%2C-58%2C0.14",
    pics: [{
        src: "https://static.wixstatic.com/media/cd2846_906ea90396d547dc9f5f618bfa179f31~mv2.png",
        alt: "Wireframe"
    },
{
  src: "https://static.wixstatic.com/media/cd2846_6d244207b0c845809c26ae324552f966~mv2.png",
  alt: "Flow"  
},
{
    src: "https://static.wixstatic.com/media/cd2846_ce31e92f829a4bd79c16b31ab865ec0b~mv2.png",
    alt: "Journey 1 - Curiosity"
},
{
    src: "https://static.wixstatic.com/media/cd2846_28037898f0e347e6898417ec036fe167~mv2.png",
    alt: "Journey 2 - Nostalgia"
},
{
    src: "https://static.wixstatic.com/media/cd2846_382ce6e46f184230ae11e63cd95924e2~mv2.png",
    alt: "Journey 3 - Creativity"
}]
}];