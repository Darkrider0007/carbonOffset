import AwardProgram1 from "../../assets/Award/awards-program1.jpg";
import AwardProgram2 from "../../assets/Award/awards-program2.png";
import { Card, CardDescription } from "../ui/card";

function AwardsProgram() {
  const catagories = [
    "Star of the Universe",
    "Leader of the Universe",
    "Hero of the Universe",
    "Student of the Universe",
    "Entrepreneur of the Universe",
    "Picture of the Universe",
    "Child of the Universe",
    "Book of the Universe",
    "Researcher of the Universe",
    "Inventor of the Universe",
    "Journalist of the Universe",
    "Film of the Universe",
    "Best Peace Effort of the Universe",
  ];

  const nominationDetails = [
    "Contact details: Nominee’s name, contact address, telephone numbers, e-mail address, affiliations, SFUO membership number (UIN) etc.",
    "Nominator’s Contact details: Your name, address, telephone numbers, e-mail address, affiliations, SFUO membership number (UIN)",
    "Provide contact details for three to five referees who can support the nominee. Include each referee's name, address, phone number, email, affiliation, and SFUO membership number. Referees should be highly respected and qualified individuals familiar with the nominee's work, able to provide recommendations promptly if requested by SFUO.",
    "Any other details not covered above, that are relevant to the decision making process.",
    "Leader of the Universe Award nominations are to be accompanied by an essay on ‘Vision for Future of the World.’",
    "Include any additional relevant details not covered above to assist in the decision-making process.",
  ];

  const nominationQuestions = [
    "Who is being nominated and why, stating details of the initiative, effort, leadership role and endeavor?",
    "Why you consider this endeavor to be a prominent one and how would it promote peace on the planet?",
    "How would this award help in promotion of the effort and cause for which it is being made?",
    "Time-frames for execution, plans, and success of results obtained so far with the initiative or effort proposed for award (enclose all supporting material like project reports, press releases, grants obtained, proposals made at local, regional, national or international levels).",
    "Any other awards or recommendations etc?",
    "Proposed citation: (less than twenty words)",
    "Proposed title for award:",
    "One page synopsis for Press Release",
  ];
  return (
    <div className="flex flex-col w-full gap-6 p-4 md:p-6 bg-green-50 rounded-lg shadow-lg">
      <p className="text-sm md:text-base leading-relaxed">
        SFUO shall constitute &lsquo;Awards and Contests for Peace&rsquo; on a
        global basis that would honor and appreciate the efforts towards the
        creation of peace on the planet. Endeavors such as the protection of the
        environment, leadership in the promotion of education for inter-faith
        tolerance, peace initiatives at local, regional, national, and global
        levels, media initiatives for reporting and projecting peace projects,
        integrating families, creating interdependence, and the like would be
        recognized. All SFUO members would be entitled to make nominations for
        awards. If you are an SFUO member and would like to make a nomination,
        simply send an email to&nbsp;
        <a
          href="mailto:awards@1world1nation.org"
          className="text-blue-500 underline"
        >
          awards@1world1nation.org
        </a>
        &nbsp; quoting your UIN issued by SFUO in the following format:
      </p>

      <div className="flex flex-col lg:flex-row w-full gap-5">
        <img
          src={AwardProgram1}
          alt="placeholder"
          className="w-full lg:w-1/2 h-auto md:h-[500px] object-fill"
        />

        <div className="flex flex-col w-full lg:w-1/2 px-2 space-y-3">
          {nominationQuestions.map((question, index) => (
            <Card
              key={index}
              className="bg-[#4BAF47] rounded font-normal px-2 py-1"
            >
              <CardDescription className="text-white text-sm md:text-base">
                {question}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full gap-5">
        <img
          src={AwardProgram2}
          alt="placeholder"
          className="w-full lg:w-1/2 h-auto md:h-[500px] object-fill"
        />

        <div className="flex flex-col w-full lg:w-1/2 px-2 space-y-3 pt-2">
          {nominationDetails.map((detail, index) => (
            <Card
              key={index}
              className="bg-[#4BAF47] rounded font-normal px-2 py-1"
            >
              <CardDescription className="text-white text-sm md:text-base">
                {detail}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full space-y-4">
        <h1 className="text-xl md:text-2xl font-semibold text-green-600">
          The categories are{" "}
        </h1>
        <div className="flex flex-wrap w-full gap-4">
          {catagories.map((item, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg rounded font-normal px-2 py-2 text-center w-full sm:w-auto"
            >
              <CardDescription className="text-black text-sm md:text-base">
                {item}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AwardsProgram;
