import { motion } from "framer-motion";
import barbara from "../../assets/Award/BarbaraThiele.png";
import { Music, Heart, BookOpen, Cat } from "lucide-react";
import { GiViolin } from "react-icons/gi";

function BarbaraThieleAwards() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto p-6 md:p-8 lg:p-12"
    >
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-center">
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Barbara Thiele Awards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-2 text-lg text-emerald-100"
          >
            First Citizen of the United World
          </motion.p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 md:p-8">
          {/* Image with decorative frame */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative flex-shrink-0 w-full lg:w-[400px]"
          >
            <div className="absolute inset-0 border-4 border-green-200 rounded-lg pointer-events-none"></div>
            <div className="absolute -inset-4 border-2 border-green-100 rounded-xl pointer-events-none"></div>
            <img
              src={barbara}
              alt="Barbara Thiele"
              className="relative z-10 rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white z-20 shadow-lg">
              <GiViolin className="w-8 h-8" />
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-800"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Music className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600" />
                <p className="text-lg">
                  Born on March 19, 1976, to Marita and Hans-Michael Thiele,
                  Barbara grew up in Werne, Germany. She was a friendly and
                  affectionate girl, who loved caring for her younger brother,
                  with whom she remained deeply connected.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600" />
                <p className="text-lg">
                  Her parents fondly recall attending Itzhak Perlman's concerts
                  with Barbara, even meeting him backstage—a moment of pure joy
                  for her. With a unique love for classical music, Barbara had
                  only a few, but true friends.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600" />
                <p className="text-lg">
                  Barbara was never concerned with being "everyone's darling"
                  and enjoyed spending time reading and daydreaming.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Cat className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600" />
                <p className="text-lg">
                  She also had a deep love for animals, often using her allowance to
                  buy food for a neglected cat in her neighborhood.
                </p>
              </div>
            </div>

            <p className="text-lg">
              As a figure of respect and forgiveness, Barbara led by example and
              demonstrated unwavering values. She performed concerts worldwide,
              uniting people through music without seeking credit or acclaim.
            </p>

            <p className="text-lg font-medium text-emerald-700">
              Tragically, Barbara passed away on Nov 6, 2017. Her philosophy endures,
              promoting love, respect, and forgiveness. March 19 is now celebrated as
              the "Birth of Humanity," and Nov 6 as the "Day of Forgiveness."
            </p>

            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <Link
                to="/barbara-thiele-legacy"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default BarbaraThieleAwards;