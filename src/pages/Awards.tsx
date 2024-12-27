import Navbar from "../components/Navbar";
import mainbg from "../assets/services/mainbg.png";
import curve from "../assets/home/curve.png";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import AwardsProgram from "../components/Awards/AwardsProgram";
import Objectives from "../components/Awards/Objective";
import { SubmissionGuidelines } from "../components/Awards/SubmissionGuidelines";
import ContentComponent from "../components/Awards/Content";
import BarbaraThieleAwards from "../components/Awards/BarbaraThieleAwards";
import SmoothScroll from "../components/SmoothScroll";

function Awards() {
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
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="text-2xl md:text-5xl font-bold text-white z-20 px-4 md:px-0">
            Awards
          </h1>

          <img
            src={curve}
            className="absolute bottom-0 w-full"
            alt="decorative curve"
          />
        </div>
        <main className="min-h-screen  p-4 md:p-8 lg:p-16">
          <section className="bg-white shadow-lg rounded-lg p-4 md:p-8 lg:p-12 text-gray-700 space-y-4 md:space-y-6">
            <p className="text-base md:text-lg font-medium">
              The Society for Universal Oneness brings together people of the
              world in an endeavor to create a better future.
            </p>

            <p className="text-base md:text-lg">
              You are invited to join the team. Be part of a revolution for
              peace and making the planet a better place, by engaging in
              meaningful professional activity and lifestyle.
            </p>

            <p className="text-base md:text-lg">
              The Society for Universal Oneness (SFUO) is a non-profit
              organization, aiming for a global presence. SFUO is incorporated
              in North Carolina, USA, and organizes a network of global
              volunteers to create positive change. Our future vision includes
              the establishment of a <strong>futurecity</strong>, a flagship
              model for global peace and harmony, which can be replicated across
              the world.
            </p>
          </section>
          <section className="bg-white shadow-lg border-2 mt-4 rounded-lg p-4 md:p-8 lg:p-12 text-gray-700 space-y-4 md:space-y-6">
            <Tabs defaultValue="awards-program" className="w-full">
              <TabsList
                defaultValue="awards-program"
                className="flex flex-wrap gap-2"
              >
                <TabsTrigger
                  className="text-base md:text-lg px-2 py-1 md:px-4"
                  value="awards-program"
                >
                  Awards Program
                </TabsTrigger>
                <TabsTrigger
                  className="text-base md:text-lg px-2 py-1 md:px-4"
                  value="objective"
                >
                  Objective
                </TabsTrigger>
                <TabsTrigger
                  className="text-base md:text-lg px-2 py-1 md:px-4"
                  value="submission-guidelines"
                >
                  Submission Guidelines
                </TabsTrigger>
                <TabsTrigger
                  className="text-base md:text-lg px-2 py-1 md:px-4"
                  value="contest"
                >
                  Contest
                </TabsTrigger>
              </TabsList>
              <TabsContent
                className="text-base md:text-lg"
                value="awards-program"
              >
                <AwardsProgram />
              </TabsContent>
              <TabsContent className="text-base md:text-lg" value="objective">
                <Objectives />
              </TabsContent>
              <TabsContent
                className="text-base md:text-lg"
                value="submission-guidelines"
              >
                <SubmissionGuidelines />
              </TabsContent>
              <TabsContent className="text-base md:text-lg" value="contest">
                <ContentComponent />
              </TabsContent>
            </Tabs>
          </section>

          <section className="bg-white shadow-lg border-2 mt-4 rounded-lg p-4 md:p-8 lg:p-12 text-gray-700 space-y-4 md:space-y-6">
            <BarbaraThieleAwards />
          </section>
        </main>

        {/* Newsletter */}
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Awards;
