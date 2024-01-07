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
{
    src: "https://static.wixstatic.com/media/cd2846_f7fcdd0ececa434a80a9284add955ae4~mv2.png",
    alt: "Insomnia",
    year: 2021,
    medium: "Live Sculpture",
    tags: ["sculpt"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_78d495f599f2464fb28d9624b2085322~mv2.jpg",
    alt: "What I See",
    year: 2022,
    medium: "Stoneware Clay",
    tags: ["sculpt"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_cf1710858c0f4d65af6335c40be12b45~mv2.jpg",
    alt: "Luck",
    year: 2022,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_088b977eecda4eae9f1025b72d678917~mv2.jpg",
    alt: "Portrait",
    year: 2020,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_e5b096a936d74b52aa1c2088ca6ba1e1~mv2.jpg",
    alt: "Balancing Act",
    year: 2020,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_ed29468c933a4729aa5fdae02f167e00~mv2.jpg",
    alt: "Industry Standard",
    year: 2021,
    medium: "Stoneware Clay",
    tags: ["sculpt"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_862721d69d3046df857a14838b634608~mv2.jpg",
    alt: "Two Sides",
    year: 2022,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_c7724a5ee29d4097b6ee6e2ad6b38da0~mv2.jpg",
    alt: "Transparency",
    year: 2020,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_063aa70742c3488cafcb2f68d3924689~mv2.jpg",
    alt: "Wishful",
    year: 2021,
    medium: "Stoneware Clay",
    tags: ["sculpt"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_f69b8286b1df42f79682a1d49b87e9c0~mv2.png",
    alt: "A Rub on the Heart",
    year: 2022,
    medium: "Stoneware Clay",
    tags: ["sculpt"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_81e1cd63b9a84ad09c0b29d0847c4f9f~mv2.jpg",
    alt: "Gold",
    year: 2020,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_25e7eaba69a64396b8099f7ce1763fa1~mv2.jpg",
    alt: "Sculptor",
    year: 2020,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_61a4eb3c9cac4183aa1a6793c09f01cf~mv2.jpg",
    alt: "Daydreams",
    year: 2020,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_07e5a2a3056947439f5a3c9265ea9427~mv2.jpg",
    alt: "Drifting",
    year: 2021,
    medium: "Digital Painting",
    tags: ["paint"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_d63194f3617e48e686b95eec988b5bb1~mv2.jpg",
    alt: "From a Different View",
    year: 2021,
    medium: "Stoneware Clay",
    tags: ["sculpt"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_b472a68d8cc9484eb2f73de2c1255085~mv2.jpg",
    alt: "Falling Petals Render II",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_4f1164a956344e81b119f319f89df703~mv2.jpg",
    alt: "Falling Petals Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_d103e2de46ca4a738c10b5f22fc760fe~mv2.jpg",
    alt: "Falling Petals Render I",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_6f56a3ed4da94f38bc35f642781c08ed~mv2.jpg",
    alt: "Nightingale Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_6641ef6ad1404dae8057bdcfd05b794b~mv2.jpg",
    alt: "Soleil Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_1b2faa1328874d53b7aa8b3923f4373d~mv2.jpg",
    alt: "Falling Petals Alternate Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_9f91ca8a2aff4780ae07ebe26436bdd3~mv2.jpg",
    alt: "Sunburst Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_22e0cbf4a4174ef2b1dd68bf28db578c~mv2.jpg",
    alt: "Flutter Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_fc3a12ffb91f47308c4b23c8486166d6~mv2.jpg",
    alt: "First Love Design",
    year: 2020,
    medium: "Digital",
    tags: ["fashion"],
},
{
    src: "https://static.wixstatic.com/media/cd2846_944c1c8485a7471aa44bf2653aa5d2a7~mv2.png",
    alt: "Outside of the Tank",
    year: 2023,
    medium: "Blender 3D Render",
    tags: ["paint"],
}
]