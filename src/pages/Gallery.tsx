import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";

const Gallery = () => {
  return (
    <div>
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
        <h1 className="text-5xl font-bold text-white">
          Carbon Footprint Offset
        </h1>

        <img src={curve} className="absolute bottom-0 w-full" />
      </div>
    </div>
  );
};

export default Gallery;
