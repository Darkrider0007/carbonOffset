import { Card, CardDescription } from "../ui/card";
import { FaCamera, FaBook, FaPalette, FaFeatherAlt } from "react-icons/fa";

const sections = [
  {
    icon: FaCamera,
    title: "Images of Life",
    description: `A photo contest where black and white or color photographs may be submitted for selection under the following categories:`,
    categories: [
      {
        title: "Relations",
        content: "Depicts human and nature relationships.",
      },
      { title: "Family", content: "An expression of emotions." },
      { title: "Connections", content: "Beyond the conception of humans." },
      {
        title: "Friends",
        content: "Relations between humans or humans and other life forms.",
      },
      { title: "Flowers", content: "Nature from buds to blooms." },
      { title: "Nature", content: "Capturing nature in its various moods." },
      { title: "People", content: "Humanity in its various hues and forms." },
      {
        title: "Events",
        content: "Significant events captured by the camera.",
      },
      { title: "Who am I", content: "In search of identity." },
      {
        title: "Life as usual",
        content: "Routine of living captured in moments.",
      },
    ],
    note: "More categories may be added later.",
  },
  {
    icon: FaBook,
    title: "Story of the Universe",
    description: `A story that is complete and focuses on themes that contribute towards peace, love, joy, harmony, or inter-faith tolerance. Awards will be given under various author age categories. Selected stories may be published by Timeless Values.`,
    categories: [
      { title: "People for People", content: "Author can be of any age." },
      { title: "Toddlers for Toddlers", content: "Authors up to 7 years." },
      { title: "Kids for Kids", content: "Authors up to 10 years." },
      { title: "Adolescents of the World", content: "Authors up to 15 years." },
      { title: "Teens of the World", content: "Authors up to 19 years." },
      { title: "Young Hope of the World", content: "Authors up to 25 years." },
      { title: "Hope of the World", content: "Authors up to 30 years." },
    ],
  },
  {
    icon: FaPalette,
    title: "Artist of the Universe",
    description: `Art forms (sketches, paintings, drawings) up to 18” x 24” can be submitted on themes that promote peace, harmony, love, and joy.`,
    categories: [
      { title: "", content: "1 to 3 years" },
      { title: "", content: "4 to 6 years" },
      { title: "", content: "7 to 9 years" },
      { title: "", content: "10 to 12 years" },
      { title: "", content: "13 to 15 years" },
      { title: "", content: "16 to 18 years" },
      { title: "", content: "19 to 21 years" },
      { title: "", content: "22 to 30 years" },
      { title: "", content: "Adults" },
      { title: "", content: "Seniors: 50+" },
      { title: "", content: "Veteran: 70+" },
    ],
  },
  {
    icon: FaFeatherAlt,
    title: "Poet of the Universe",
    description: `Entries under this category should align with themes of love, joy, harmony, and peace. Selected entries may be published by Timeless Values.`,
    categories: [],
  },
];

function ContentComponent() {
  return (
    <div className="flex flex-col w-full gap-10 mx-auto p-6 bg-green-50 rounded-lg shadow-lg">
      {sections.map((section, index) => (
        <Card key={index} className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <section.icon className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-green-800">
              {section.title}
            </h2>
          </div>
          <CardDescription className="text-gray-700 leading-relaxed">
            {section.description}
            {section.categories.length > 0 && (
              <ul className="list-disc list-inside mt-2 space-y-1">
                {section.categories.map((category, catIndex) => (
                  <li key={catIndex}>
                    {category.title && <strong>{category.title}: </strong>}
                    {category.content}
                  </li>
                ))}
              </ul>
            )}
            {section.note && <p className="mt-2">{section.note}</p>}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}

export default ContentComponent;
