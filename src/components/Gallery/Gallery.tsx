import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import { Close, West, East } from "@mui/icons-material";

import "./Gallery.scss";
import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
} from "@mui/material";
import { images, emptyImg, Image, Tag } from "./images";
import { useStore } from "../Stores/store";

function Gallery() {
  const { activeSection } = useStore();
  const [activeImages, setActiveImages] = useState([] as Image[]);

  const [cols, setCols] = useState(3);
  const [gap, setGap] = useState(40);

  const width = useWindowSize().width as number;

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [curImg, setCurImg] = useState(emptyImg as Image);
  const [curIndex, setCurIndex] = useState(0);

  // map tags to main gallery tabs
  const tagDict: { [key: string]: Tag[] } = {
    home: ["highlight"],
    design: ["ui", "graphic", "product"],
    paint: ["paint", "sculpt"],
    fashion: ["fashion"],
  };

  useEffect(() => {
    // adjust gap size
    if (width > 800) {
      setGap(60);
    } else if (width > 600) {
      setGap(40);
    } else {
      setGap(20);
    }

    // adjust num cols
    if (width > 800) {
      setCols(3);
    } else if (width > 450) {
      setCols(2);
    } else {
      setCols(1);
    }
  }, [width]);

  // get collection of images
  const sortedImages = images.sort((a, b) => b.year - a.year);

  // return if image contains relevant tag
  const containsTag = (image: Image) => {
    const tags = image.tags;

    return tags.some((t) => tagDict[activeSection].includes(t));
  };

  useEffect(() => {
    setActiveImages(sortedImages.filter((i) => containsTag(i)));
  }, [activeSection]);

  // modal
  const openModal = (index: number) => {
    loadImg(index);
    handleOpen();
  };

  const loadImg = (index: number) => {
    setCurIndex(index);
    setCurImg(activeImages[index]);
  };

  const prevImg = () => {
    console.log("prev");
    // arrow key left
    if (curIndex > 0) {
      loadImg(curIndex - 1);
    }
  };

  const nextImg = () => {
    console.log("next");
    // arrow key right
    if (curIndex < activeImages.length - 1) {
      loadImg(curIndex + 1);
    }
  };

  // not working yet :(
  const keyHandler = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.id != "modal-grid") {
      return;
    }

    const key = e.key;
    if (key === "ArrowLeft") {
      prevImg();
    } else if (key === "ArrowRight") {
      nextImg();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
  }, []);

  return (
    <div id="gallery">
      <ImageList variant="masonry" cols={cols} gap={gap}>
        {activeImages.map((item, i) => (
          <ImageListItem key={item.alt + "-" + i}>
            {item.video ? (
              <video title={item.alt}>
                <source src={item.src} type="video/mp4"></source>
              </video>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                title={item.alt}
                loading="lazy"
              />
            )}
            <ImageListItemBar
              title={item.alt}
              subtitle={item.medium + ", " + item.year}
              onClick={() => openModal(i)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id="modal"
        className={activeSection}
      >
        <Grid container spacing={2} id="modal-grid">
          <Grid item xs={7} md={6} className="img">
            {curImg.video ? (
              <video title={curImg.alt} controls>
                <source src={curImg.src} type="video/mp4"></source>
              </video>
            ) : (
              <img
                src={curImg.src}
                alt={curImg.alt}
                title={curImg.alt}
                className="modalImg"
                loading="lazy"
              />
            )}
          </Grid>
          <Grid item xs={5} md={6} className="info">
            <div id="close-container">
              <Close className="icon" id="close" onClick={handleClose} />
            </div>
            <div className="inner-info">
              <h2>{curImg.alt}</h2>
              <p>{curImg.medium + ", " + curImg.year}</p>
            </div>
            <div id="arrow-container">
              <West
                className={"icon" + (curIndex === 0 ? " disabled" : "")}
                id="prev"
                onClick={prevImg}
              />

              <East
                className={
                  "icon" +
                  (curIndex === activeImages.length - 1 ? " disabled" : "")
                }
                id="next"
                onClick={nextImg}
              />
            </div>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

export default Gallery;
