import * as React from 'react';
import { useState, useCallback } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Carousel, { Modal, ModalGateway } from "react-images";
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import styled from '@emotion/styled'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const images = [
  {source: 'https://i.ibb.co/P53hZfr/P1510010.jpg' },
  {source: 'https://i.ibb.co/YL727Cg/P1510004.jpg' },
]



function CallAbout() {{
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


    return (
      <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>    
    )
}}

export default function FotoTenisGalery() {
  return <CallAbout />;
}


