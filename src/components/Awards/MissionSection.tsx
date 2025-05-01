import { motion } from "framer-motion";
import { Globe, Leaf, HeartPulse, Sparkles, ArrowRight } from "lucide-react";

export const MissionSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-6 md:p-10 lg:p-12 text-gray-800 space-y-8 md:space-y-10"
            style={{
                background: "radial-gradient(circle at 20% 50%, rgba(220, 252, 231, 0.3), rgba(255, 255, 255, 0.8))",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                boxShadow: "0 10px 30px -15px rgba(5, 150, 105, 0.2)"
            }}
        >
            {/* Floating animated elements */}
            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-16 h-16 opacity-20 text-emerald-400"
            >
                <Leaf className="w-full h-full" />
            </motion.div>

            <motion.div
                animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 right-20 w-12 h-12 opacity-30 text-emerald-500"
            >
                <Sparkles className="w-full h-full" />
            </motion.div>

            {/* Main content grid (asymmetric layout) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column (animated headline) */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 6 }}
                        >
                            <Globe className="w-10 h-10 text-emerald-600" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
                            Universal Oneness
                        </h2>
                    </div>

                    <motion.p
                        whileHover={{ scale: 1.02 }}
                        className="text-xl md:text-2xl font-medium leading-relaxed p-6 rounded-2xl"
                        style={{
                            background: "rgba(255, 255, 255, 0.7)",
                            backdropFilter: "blur(8px)",
                            boxShadow: "0 5px 15px -5px rgba(5, 150, 105, 0.1)"
                        }}
                    >
                        Join a global movement creating a <span className="font-bold text-emerald-600">better future</span> for all.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 5px 20px -5px rgba(5, 150, 105, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium shadow-lg"
                    >
                        Join Our Mission <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>

                {/* Right column (interactive cards) */}
                <div className="space-y-6">
                    {/* Card 1 (floating) */}
                    <motion.div
                        whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(16, 185, 129, 0.3)" }}
                        className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm hover:border-emerald-200 transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <HeartPulse className="flex-shrink-0 w-6 h-6 mt-1 text-emerald-600" />
                            <p className="text-lg">
                                Be part of a <span className="font-semibold text-emerald-700">revolution for peace</span> through meaningful action.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 (glowing) */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100/50 relative overflow-hidden"
                    >
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-emerald-200/20 blur-xl"></div>
                        <p className="text-lg relative z-10">
                            SFUO is a non-profit building a network of global volunteers for <span className="font-medium">positive change</span>.
                        </p>
                    </motion.div>

                    {/* Card 3 (highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-2xl bg-emerald-600/10 border border-emerald-200/30 backdrop-blur-sm relative overflow-hidden group"
                    >
                        <Sparkles className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <p className="text-lg font-medium">
                            Our vision: A <span className="font-bold text-emerald-700">futurecity</span> model for global harmony.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating call-to-action at bottom */}
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="mt-10 text-center"
            >
                <p className="text-emerald-600 font-medium">Scroll to explore our mission ↓</p>
            </motion.div>
        </motion.section>
    );
};