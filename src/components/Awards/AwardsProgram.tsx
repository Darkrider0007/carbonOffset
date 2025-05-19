import { motion } from "framer-motion";
import { Award, Mail, FileText, Users, Star, BookOpen, Camera, FlaskConical, Film, Globe } from "lucide-react";
import { FaChild } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const AwardsProgram = () => {
  const categories = [
    { name: "Star of the Universe", icon: <Star className="w-5 h-5" /> },
    { name: "Leader of the Universe", icon: <Users className="w-5 h-5" /> },
    { name: "Hero of the Universe", icon: <Award className="w-5 h-5" /> },
    { name: "Student of the Universe", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Entrepreneur of the Universe", icon: <Globe className="w-5 h-5" /> },
    { name: "Picture of the Universe", icon: <Camera className="w-5 h-5" /> },
    { name: "Child of the Universe", icon: <FaChild className="w-5 h-5" /> },
    { name: "Book of the Universe", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Researcher of the Universe", icon: <FlaskConical className="w-5 h-5" /> },
    { name: "Inventor of the Universe", icon: <FlaskConical className="w-5 h-5" /> },
    { name: "Journalist of the Universe", icon: <FileText className="w-5 h-5" /> },
    { name: "Film of the Universe", icon: <Film className="w-5 h-5" /> },
    { name: "Best Peace Effort of the Universe", icon: <Globe className="w-5 h-5" /> }
  ];

  const nominationStages = [
    {
      title: "Nomination Requirements",
      items: [
        "Nominee's contact details (name, address, phone, email, affiliations, UIN)",
        "Nominator's contact details (name, address, phone, email, affiliations, UIN)",
        "3-5 qualified referees with contact information",
        "Additional supporting materials"
      ]
    },
    {
      title: "Submission Details",
      items: [
        "Email nominations to awards@1world1nation.org",
        "Include your SFUO UIN in subject line",
        "Attach all supporting documents",
        "Leader Award requires 'Vision for Future of the World' essay"
      ]
    },
    {
      title: "Evaluation Criteria",
      items: [
        "Impact on global peace initiatives",
        "Innovation in approach",
        "Sustainability of efforts",
        "Potential for replication",
        "Demonstrated leadership"
      ]
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrentSlide(index);
    }
  };

  const tabs = [
    { name: "About", index: 0 },
    { name: "Nomination Process", index: 1 },
    { name: "Categories", index: 2 },
    { name: "Selection", index: 3 }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400">
          SFUO Global Peace Awards
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Recognizing extraordinary contributions to global peace, environmental protection, and interfaith harmony
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-green-50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.index}
              onClick={() => goToSlide(tab.index)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentSlide === tab.index
                  ? "bg-white shadow text-green-700"
                  : "text-green-600 hover:bg-green-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Carousel */}
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {/* Slide 1: About the Awards */}
          <CarouselItem>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-800">
                      About the Awards Program
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed mb-6">
                      The SFUO Global Peace Awards honor initiatives that promote peace at local, regional, national, and global levels.
                      We recognize efforts in environmental protection, education for interfaith tolerance, media initiatives for peace,
                      and projects that foster family integration and global interdependence.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <Mail className="w-5 h-5" />
                      <a
                        href="mailto:awards@1world1nation.org"
                        className="font-medium hover:underline"
                      >
                        awards@1world1nation.org
                      </a>
                    </div>
                  </CardContent>
                </div>
                <div className="bg-green-100 p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Eligibility</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Open to all SFUO members worldwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Individuals, organizations, and initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>No application fee required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Nominations accepted year-round</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </CarouselItem>

          {/* Slide 2: Nomination Process */}
          <CarouselItem>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800">
                  Nomination Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {nominationStages.map((stage, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-lg border border-green-100 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-700">
                        <span className="bg-green-100 p-2 rounded-full">{index + 1}</span>
                        {stage.title}
                      </h3>
                      <ul className="space-y-2">
                        {stage.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* Slide 3: Award Categories */}
          <CarouselItem>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-800">
                  Award Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center gap-3"
                    >
                      <div className="bg-green-100 p-2 rounded-full">
                        {category.icon}
                      </div>
                      <span className="font-medium text-sm md:text-base">{category.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          {/* Slide 4: Selection Timeline */}
          <CarouselItem>
            <Card className="border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-800">
                      Selection Process & Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">1</div>
                          <div className="w-0.5 h-12 bg-green-300 my-1"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold">Initial Screening</h4>
                          <p className="text-sm text-muted-foreground">Complete nominations reviewed for eligibility</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">2</div>
                          <div className="w-0.5 h-12 bg-green-300 my-1"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold">Committee Review</h4>
                          <p className="text-sm text-muted-foreground">Expert panel evaluates qualified nominations</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">3</div>
                        </div>
                        <div>
                          <h4 className="font-semibold">Final Selection</h4>
                          <p className="text-sm text-muted-foreground">Awardees chosen and notified</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div className="bg-green-50 p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Benefits for Awardees</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Global recognition for your peace efforts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Featured on SFUO platforms worldwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Invitation to annual Peace Summit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Opportunity for project funding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Networking with global peacemakers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
      </Carousel>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Ready to Nominate a Peacemaker?</h3>
        <a
          href="mailto:awards@1world1nation.org"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Submit a Nomination <Mail className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default AwardsProgram;