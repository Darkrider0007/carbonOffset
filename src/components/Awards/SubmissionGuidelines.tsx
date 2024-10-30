import { Card, CardDescription } from "../ui/card";

function SubmissionGuidelines() {
  return (
    <div className="flex flex-col w-full mx-auto gap-8 p-6 bg-green-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-800 text-center">
        Submission Guidelines
      </h2>
      <p className="text-gray-800 leading-relaxed text-lg">
        Nominations for efforts of peace for the current year Awards or Contests
        in any of the above categories must be submitted (postmarked) by{" "}
        <strong>July 31</strong> of the current year to SFUO. Each award
        nomination must be accompanied by an award nomination fee in the form of
        a check drawn on a US bank for <strong>US $50</strong>. Each contest
        entry must be accompanied by the contest entry fee in the form of a
        check drawn on a US bank for <strong>US $40</strong>. Entries not
        selected for an award will not be returned, and all entries shall become
        the property of SFUO.
      </p>
      <p className="text-gray-800 leading-relaxed text-lg">
        All contest entries must include a signed cover sheet by the contestant
        claiming the work as their original and a no-objection statement that
        allows SFUO to use their creation for peace promotion. Any submitted
        materials may be used by SFUO in its endeavors to promote peace on the
        planet. Each entry must include the name, contact information, and age
        declaration of the participant. While award nominators must be SFUO
        members, non-members are welcome to submit contest entries. If a
        contestant is an SFUO member, the contest entry fee is reduced by half
        (only <strong>$20</strong> per entry).
      </p>

      <Card className="bg-[#C9FFD1] border-l-4 border-green-500 shadow-md px-6 py-4 rounded-lg">
        <CardDescription className="text-gray-700 font-semibold whitespace-pre-line">
          Society for Universal Oneness{"\n"}
          100 Ayers Way{"\n"}
          Chapel Hill, NC 27517-2362,{"\n"}
          USA.
        </CardDescription>
      </Card>
    </div>
  );
}

export { SubmissionGuidelines };
