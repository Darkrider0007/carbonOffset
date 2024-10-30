import barbara from "../../assets/Award/BarbaraThiele.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function BarbaraThieleAwards() {
  return (
    <div className="w-full mx-auto p-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-green-600 text-3xl font-semibold text-center hover:no-underline">
            {/* BARBARA THIELE – First Citizen of the United World */}
            Barbara Thiele Awards
          </AccordionTrigger>
          <AccordionContent className="pt-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mx-auto">
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <img
                  src={barbara}
                  alt="Barbara Thiele"
                  className="rounded-lg shadow-lg object-cover w-full lg:w-[400px] h-auto"
                />
              </div>
              <div className="flex-grow">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <p className="leading-relaxed text-lg text-justify mb-4">
                    Born on March 19, 1976, to Marita and Hans-Michael Thiele,
                    Barbara grew up in Werne, Germany. She was a friendly and
                    affectionate girl, who loved caring for her younger brother,
                    with whom she remained deeply connected. At school, Barbara
                    excelled, particularly in languages like Latin, English, and
                    French, though music was her true passion. She practiced the
                    violin for up to five hours daily, inspired by violinist
                    Itzhak Perlman, her role model.
                  </p>
                  <p className="leading-relaxed text-lg text-justify mb-4">
                    Her parents fondly recall the moments they attended
                    Perlman's concerts in Cologne and London with Barbara, even
                    meeting him backstage—a moment of pure joy for her. With a
                    unique love for classical music, Barbara had only a few, but
                    true friends.
                  </p>
                  <p className="leading-relaxed text-lg text-justify mb-4">
                    Barbara was never concerned with being "everyone’s darling"
                    and enjoyed spending time reading and daydreaming. She also
                    had a deep love for animals, often using her allowance to
                    buy food for a neglected cat in her neighborhood.
                  </p>
                  <p className="leading-relaxed text-lg text-justify mb-4">
                    As a figure of respect and forgiveness, Barbara led by
                    example and demonstrated unwavering values in her personal
                    and family life. She performed concerts worldwide, uniting
                    people through the language of music without seeking credit
                    or acclaim, finding fulfillment as a violinist and
                    performer.
                  </p>
                  <p className="leading-relaxed text-lg text-justify">
                    Tragically, Barbara passed away on Nov 6, 2017, following an
                    accident that left her in a coma. Her philosophy endures,
                    promoting love, respect, and forgiveness. March 19 is now
                    celebrated as the "Birth of Humanity," and Nov 6 as the "Day
                    of Forgiveness," honoring her legacy.
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default BarbaraThieleAwards;
