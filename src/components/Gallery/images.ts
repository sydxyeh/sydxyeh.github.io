export type Tag = "highlight" | "ui" | "graphic" | "product" | "paint" | "sculpt" | "fashion";

export type Image = {
    src: string;
    alt: string;
    year: number;
    medium: string;
    tags: Tag[];
    video?: boolean;
}

export const emptyImg = {
    src: "",
    alt: "",
    year: 0,
    medium: "",
    tags: []
}

export const images: Image[] = [{
    src: "https://static.wixstatic.com/media/cd2846_ad4c02aef75d40d3b5ca8d2f2dc7d40b~mv2.jpg",
    alt: "A Guiding Light",
    year: 2022,
    medium: "Digital Painting",
    tags: ["highlight", "paint"]
}, {
    src: "https://static.wixstatic.com/media/cd2846_1e31b0b017c049ddbc73fc61ec269df3~mv2.jpg",
    alt: "Back to the Earth",
    year: 2022,
    medium: "Stoneware Clay",
    tags: ["highlight", "sculpt"]
}, {
    src: "https://static.wixstatic.com/media/cd2846_b94608914e6a4eccbeca9dfcc85dc124~mv2.jpg",
    alt: "Chasing Red",
    year: 2020,
    medium: "Digital Painting",
    tags: ["highlight", "paint"]
}, {
    src: "https://static.wixstatic.com/media/cd2846_dd614cb6c34d4f978c4446091a4448a0~mv2.jpg",
    alt: "Dear Life",
    year: 2021,
    medium: "Graphite on Paper",
    tags: ["highlight", "paint"]
}, {
    src: "https://static.wixstatic.com/media/cd2846_0684e7210c7b418e826942d268c44865~mv2.jpg",
    alt: "A Fragile Fate",
    year: 2021,
    medium: "Digital Painting",
    tags: ["highlight", "paint"]
}, {
    src: "https://static.wixstatic.com/media/cd2846_a827681bf65643f288a609664d9a29c0~mv2.jpg",
    alt: "Illustration 4",
    year: 2020,
    medium: "Digital Painting",
    tags: ["highlight", "paint"]
}, {
    src: "https://video.wixstatic.com/video/cd2846_886d4e2158014b0eaaa82fc4357b9d88/480p/mp4/file.mp4",
    alt: "So/Sew App Video",
    year: 2022,
    medium: "Video Prototype",
    tags: ["ui"],
    video: true
}, {
    src: "https://static.wixstatic.com/media/cd2846_0a459d34a2b44959b2eff71b14091f34~mv2.png",
    alt: "CampusAct Activism & Resources App",
    year: 2022,
    medium: "App Prototype",
    tags: ["ui"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_2cb86be503fe4b2b9fcb37fc5e561858~mv2.png",
    alt: "Composition of an Artist",
    year: 2022,
    medium: "Graphic Design",
    tags: ["graphic"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_636b51ff05f641c6bb0a1401ffc32db4~mv2.jpg",
    alt: "Imago Cover Summer 2022",
    year: 2022,
    medium: "Graphic Design",
    tags: ["graphic"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_f67ea653d284402098f3d2e59fcfe294~mv2.jpg",
    alt: "Imago Cover Winter 2021",
    year: 2021,
    medium: "Graphic Design",
    tags: ["graphic"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_1f5d8c9784854e0bb07c4609373534ca~mv2.png",
    alt: "Lantern Tea Packaging",
    year: 2022,
    medium: "Digital",
    tags: ["product"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_65ad2a458e2742b7822e02f095947715~mv2.png",
    alt: "Rinc Merch Design & Poster",
    year: 2023,
    medium: "Graphic Design",
    tags: ["graphic"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_314eae33aa6f4ee7914b2bb40fbc5dd9~mv2.jpg",
    alt: "e-NABLE 3D Printed Prosthetic Hand Design",
    year: 2021,
    medium: "3D Printed Design",
    tags: ["product"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_5d14e97a76644ccfbda673fa459fb59c~mv2.jpg",
    alt: "Spirit",
    year: 2022,
    medium: "Digital Painting",
    tags: ["paint"],
},
// {
//     src: "",
//     alt: "",
//     year: 2022,
//     medium: "",
//     tags: ["ui"],
// },
// {
//     src: "",
//     alt: "",
//     year: 2022,
//     medium: "",
//     tags: ["ui"],
// }
]