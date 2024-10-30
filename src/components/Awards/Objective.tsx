import { Card, CardDescription } from "../ui/card";

const objectives = [
  "To encourage people and intellectuals to come forward and participate in the political process to achieve global peace and harmony.",
  "To develop and promote a universal curriculum in inter-faith tolerance, peace and harmony. To distribute this curriculum for implementation across all the schools of the world, so that people can see humanity beyond religion.",
  "To create a World free of horror by eradication of terrorism from the Universe. This would be achieved by providing adequate opportunity for education, growth and development to citizens of the universe. In addition, modern technology would be applied to issue global identification cards to everyone and subsequently track them. Basic needs of food, shelter and education shall be provided for everyone to set the base for creation of interdependence. Governments and local bodies shall be involved in achievement of these objectives.",
  "To promote the concept of One World, One Currency, One Peace Keeping Army and One Common Language as a platform for communication and global standardization of Driving practice.",
  "To promote the protection of Environment by whatever means possible - recycling, use of technology and involvement of local communities.",
  "To create and promote business enterprises in areas related to development of solar energy, wind power, hydro-power and preservation of the earth's bio-sphere.",
  "To offer education and training in the concept of 'integrated living'. This shall be done by training volunteers who can conduct classes in this area.",
  "To identify and recognize efforts of individuals, societies, organizations, business enterprises and nations, who are involved in the process of creating a better world.",
  "To develop and research into the areas of medicine, science and technology and work towards an integration of traditional healing techniques of diverse and ancient cultures with the modern to create new paradigms. To bridge the gap between the physical and the metaphysical.",
  "To identify new areas for research and development and flexibly integrate new concepts with the old to create meaningful and workable solutions for problems facing the World.",
  "To research into and create new concepts in sports and entertainment which promote cooperation, peace, love, harmony and joy.",
  "To identify and bring under one umbrella all sincere efforts and initiatives for peace, global unity, promotion of harmony, technology for peace, science for humanity and medical practice endeavors to reap the synergy of unison to mission.",
  "To take initiative in inter-action with heads of state and political forces to end wars, lift bans on supply of essential life survival drugs, achieve nuclear disarmament and seek co-operation in matters related to eradication of terrorism.",
  "To identify suitable promoters of peace in all communities and network them to initiate family exchange programs, under which family in one community can host a family from another community from across the globe. This would develop a deeper understanding and tolerance among cultures and societies.",
  "To facilitate the process of adoption and foster-parent sponsorship on a global basis. To help in identification of those in dire need of help and provide all possible care. To facilitate the process of adoption of old and infirm by volunteer network, in order to provide them an affectionate and loving environment.",
  "To identify and tap the idle resources to engage those in a meaningful manner for creating a better world, by a process of creative visualization. The unused grants of governments and scientific institutions are examples of financial resources available. Vacation times and idle hours of children, potential of unemployed masses and their brain-power are examples of physical mechanics. Untapped solar, wind, hydro and other natural forms of energy are examples of nature mechanics, among several others. All these and much more shall be converted to opportunities and inputs for growth and development, with sole objective of making the world a better place.",
];

function Objectives() {
  return (
    <div className="flex flex-col w-full gap-6 p-6 bg-green-50 rounded-lg shadow-lg">
      {objectives.map((objective, index) => (
        <Card
          key={index}
          className={`${
            index % 2 === 0 ? "bg-[#C9FFD1]" : "bg-[#E5F9E5]"
          } w-full shadow-md rounded-lg px-6 py-4 transition-transform transform hover:scale-105`}
        >
          <CardDescription className="text-gray-800 text-lg leading-relaxed">
            {objective}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}

export default Objectives;
