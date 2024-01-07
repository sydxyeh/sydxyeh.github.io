import "./Projects.scss";

import { FC, useEffect, useRef, useState } from "react";
import { Grid, Modal } from "@mui/material";
import { Proj, emptyImg, ProjImg } from "./projects";

import { ArrowBackIos, Close } from "@mui/icons-material";
import { useWindowSize } from "@uidotdev/usehooks";

interface ProjectProps {
  proj: Proj;
}

export const Project: FC<ProjectProps> = ({ proj }) => {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);

  const [scrollX, setScrollX] = useState(0);
  const [minScroll, setMinScroll] = useState(true);
  const [maxScroll, setMaxScroll] = useState(false);

  const size = useWindowSize();

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [curImg, setCurImg] = useState(emptyImg as ProjImg);
  const [curIndex, setCurIndex] = useState(0);

  // carousel images
  const scroll = (dir: string) => {
    const elem = carouselRef.current;
    if (elem) {
      if (dir === "left") {
        (elem as HTMLElement).scrollLeft -= 100;
      } else {
        (elem as HTMLElement).scrollLeft += 100;
      }
    }
  };

  const onScroll = () => {
    const elem = carouselRef.current;
    if (elem) {
      setScrollX((elem as HTMLElement).scrollLeft);
    }
  };

  const checkScroll = () => {
    const elem = innerRef.current;
    const outerelem = carouselRef.current;

    if (elem && outerelem) {
      if (scrollX === 0) {
        setMinScroll(true);
      } else {
        setMinScroll(false);
      }

      if (
        scrollX === 0 ||
        scrollX <
          (elem as HTMLElement).offsetWidth -
            (outerelem as HTMLElement).offsetWidth
      ) {
        setMaxScroll(false);
      } else {
        setMaxScroll(true);
      }
    }
  };

  useEffect(() => {
    checkScroll();
  }, [scrollX, size]);

  // modal
  const openModal = (index: number) => {
    loadImg(index);
    handleOpen();
  };

  const loadImg = (index: number) => {
    setCurIndex(index);
    setCurImg(proj.pics[index]);
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
    if (curIndex < proj.pics.length - 1) {
      loadImg(curIndex + 1);
    }
  };

  return (
    <div className="project">
      <Grid container spacing={4} className="proj-grid">
        <Grid item xs={6} md={6} className="proj-title">
          <h3>
            {proj.title} ({proj.year})
          </h3>
          <p>{proj.summary}</p>
        </Grid>
        <Grid item xs={6} md={6} className="proj-desc">
          <p>{proj.description}</p>
        </Grid>
      </Grid>
      {proj.figma && (
        <iframe className="figma" src={proj.figma} allowFullScreen></iframe>
      )}
      {proj.video && (
        <iframe className="video" src={proj.video} allowFullScreen></iframe>
      )}
      {proj.pics.length > 0 && (
        <>
          <div className="proj-process">
            <h3>The Process</h3>
            <div className="proj-slider">
              <ArrowBackIos
                className={"prev icon " + (minScroll ? "disabled" : "")}
                onClick={() => scroll("left")}
              />
              <div className="proj-imgs" ref={carouselRef} onScroll={onScroll}>
                <div className="proj-img-container" ref={innerRef}>
                  {proj.pics.map((pic, i) => (
                    <img
                      src={pic.src}
                      alt={pic.alt}
                      title={pic.alt}
                      loading="lazy"
                      key={pic.alt}
                      onClick={() => openModal(i)}
                    />
                  ))}
                </div>
              </div>
              <ArrowBackIos
                className={"next icon " + (maxScroll ? "disabled" : "")}
                onClick={() => scroll("right")}
              />
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="proj-modal"
          >
            <div className="modal-contain">
              <Close className="icon close" onClick={handleClose} />
              <ArrowBackIos
                className={"prev icon " + (curIndex === 0 ? "disabled" : "")}
                onClick={prevImg}
              />
              <div className="img-contain">
                <img
                  src={curImg.src}
                  alt={curImg.alt}
                  title={curImg.alt}
                  loading="lazy"
                  key={curImg.alt}
                />
              </div>

              <ArrowBackIos
                className={
                  "next icon " +
                  (curIndex === proj.pics.length - 1 ? "disabled" : "")
                }
                onClick={nextImg}
              />
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};
