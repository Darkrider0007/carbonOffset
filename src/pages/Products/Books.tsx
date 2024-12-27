import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/Products/productsBanner.jpg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";

function Books() {
  type Book = {
    title: string;
    description: string;
    image: string;
    link: string;
  };

  const books: Book[] = [
    {
      title: "Pandemic - Connector of Humanity",
      description:
        "This book discusses how the pandemic acted as a unifier, bringing humanity together and calling for a fundamental reimagining of life. It promotes creating self-sufficient communities, reducing ecological footprints, and fostering a connected global economy. With themes of reskilling and global collaboration, it envisions a world prepared for future crises by leveraging technology and collective intelligence.",
      image: "https://m.media-amazon.com/images/I/61qsSH+CjxL._SY466_.jpg",
      link: "https://www.amazon.com/Pandemic-Connector-Dr-Abhinav-Aggarwal/dp/B087SGS4PB/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
    },
    {
      title: "One World One Nation",
      description:
        "Addressing global issues like climate change, violence, and poverty, this book offers an action plan based on collective consciousness. It includes a 'declaration of interdependence,' ideas for forming a virtual government, and creating a unified global society that lives in harmony with the environment. It encourages readers to share their vision in an essay contest imagining a united world.",
      image: "https://m.media-amazon.com/images/I/61ATBaO18JL._SY466_.jpg",
      link: "https://www.amazon.com/One-World-Nation-interdependent-business/dp/B084DG18ST/?_encoding=UTF8&pd_rd_w=AcaLA&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=146-4614860-8117637&pd_rd_wg=faACf&pd_rd_r=14cc7acc-7d8c-42bc-80be-be7bd0d74000&ref_=aufs_ap_sc_dsk",
    },
    {
      title: "September 11: A Wake Up Call",
      description:
        "This book is a reflective and scientific exploration of the September 11 attacks, probing into the causes and offering solutions to prevent similar events in the future. It appeals to the reader's emotions, aiming to touch the heart and encourage deeper understanding and response to global crises.",
      image: "https://m.media-amazon.com/images/I/615w0sxejjL._SY466_.jpg",
      link: "https://www.amazon.com/September-11-Wake-Up-Call/dp/140336205X/?_encoding=UTF8&pd_rd_w=34LCA&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=146-4614860-8117637&pd_rd_wg=KE2Wl&pd_rd_r=3811a7f5-6f45-4796-9bda-4dc98de98c19&ref_=aufs_ap_sc_dsk",
    },
    {
      title: "Face to Face with Shiva",
      description:
        "This book presents a spiritual dialogue with Lord Shiva, exploring timeless questions in a straightforward manner. It aims to provide insights into life's profound mysteries, conveyed in an accessible, meaningful way, complemented by visuals from Rohan Geet Gupta.",
      image:
        "https://m.media-amazon.com/images/I/51cfwhLWHIL._SY445_SX342_.jpg",
      link: "https://www.amazon.com/Face-Shiva-Scientific-Perspective-Experience-ebook/dp/B07933RRCW/?_encoding=UTF8&pd_rd_w=yDFCZ&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=146-4614860-8117637&pd_rd_wg=voS4O&pd_rd_r=c36bcfaf-acd8-472c-9f0e-468fcba3b6dc&ref_=aufs_ap_sc_dsk",
    },
    {
      title: "Strategic Balancing Using Factual Data",
      description:
        "Focusing on market dynamics and business strategy, this book emphasizes the importance of agility in adapting to consumer demands and shifts. It advocates for timely data analysis and responsiveness, positioning businesses to better navigate disruptions and continuously reinvent themselves for long-term relevance.",
      image:
        "https://m.media-amazon.com/images/I/51TR-g75mGL._SY445_SX342_.jpg",
      link: "https://www.amazon.com/Strategic-Balancing-Using-Factual-Data-ebook/dp/B07B9SKCNZ?ref_=ast_author_dp",
    },
    {
      title: "Respect – Bring Our Compassion Together To Heal Mother Earth",
      description:
        "This book redefines how we perceive matter, urging us to see all existence as a blend of consciousness, energy, and knowledge. Challenging the notion of resources as mere commodities, it advocates for respecting and conserving Earth’s elements as integral to our survival. By shifting our mindset to honor resources, we can preserve them for future generations. Through practical steps for individuals, communities, and businesses, this guide offers actionable solutions—from reducing consumption and adopting eco-friendly practices to reshaping our future in harmony with the planet. Together, we can leave Earth cleaner and greener than we found it.",
      image:
        "https://1world1nation.org/wp-content/uploads/2024/02/Picture122.png",
      link: "#",
    },
    {
      title: "Data driven AI",
      description:
        "This upcoming book examines how cognitive enterprises—adaptable, customer-centered, and technology-driven—thrive in a volatile market. By embracing agility, self-correction, and customer focus, these organizations remain resilient, capable of rapid reinvention across people, culture, and technology to meet evolving demands. Available soon on Amazon.",
      image:
        "https://1world1nation.org/wp-content/uploads/2024/02/Picture111.png",
      link: "#",
    },
  ];

  return (
    <SmoothScroll>
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
          <h1 className="text-3xl z-20 md:text-5xl font-bold text-white">
            Products {">"} Books
          </h1>

          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={curve} className="absolute bottom-0 w-full" />
        </div>

        <div className="container mx-auto my-10 px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
            Our Books
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {books.map((book, index) => (
              <div
                key={index}
                className={`border-2 shadow-lg p-2 rounded-lg overflow-hidden flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } bg-white`}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full sm:w-1/2 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    <a
                      href={book.link}
                      className="text-green-600 hover:text-green-800 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {book.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Books;
