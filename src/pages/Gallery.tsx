import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SmoothScroll from "../components/SmoothScroll";

const sampleImages = [
  "https://1world1nation.org/wp-content/uploads/2023/09/HRM-550x380.png",
  "https://1world1nation.org/wp-content/uploads/2023/09/UmaSankar-550x380.png",
  "https://1world1nation.org/wp-content/uploads/2024/05/IMG_7663-370x270.jpeg",
  "https://1world1nation.org/wp-content/uploads/2024/05/Screenshot-2024-05-27-at-9.49.26%E2%80%AFPM-370x270.png",
  "https://1world1nation.org/wp-content/uploads/2024/05/IMG_7691-370x270.jpeg",
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: true,
  };

  return (
    <SmoothScroll>
      <div className=" min-h-screen">
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative"
        >
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Carbon Footprint Offset
          </h1>
          <img src={curve} className="absolute bottom-0 w-full" alt="Curve" />
        </div>

        <main className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">
            Image Gallery
          </h2>

          {/* Carousel Section */}
          <Carousel
            plugins={[Autoplay(autoplayOptions)]}
            className="w-full max-w-4xl mx-auto mb-12"
          >
            <CarouselContent>
              {sampleImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-3">
                    <Card
                      className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer rounded-lg overflow-hidden bg-green-100"
                      onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <CardContent className="flex aspect-video items-center justify-center p-1">
                        <img
                          src={image}
                          alt={`Sample ${index + 1}`}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Grid Gallery Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {sampleImages.map((image, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer rounded-lg overflow-hidden bg-green-100"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <img
                    src={image}
                    alt={`Sample ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 rounded-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* Image Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={sampleImages.map((src) => ({ src }))}
            index={photoIndex}
            className="rounded-lg shadow-lg"
          />
        )}

        {/* Newsletter */}
        <Newsletter />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Gallery;
