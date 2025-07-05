"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Introduction: React.FC = () => {
    return (
        <section className="w-full py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Text Content */}
                    <motion.div
                        className="md:w-3/5"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-blue-400">Hi, I'm </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Ankan Saha
                            </span>
                        </h1>

                        <div className="text-xl md:text-2xl font-medium mb-6">
                            <Typewriter
                                options={{
                                    strings: [
                                        "MERN Stack Developer",
                                        "Software Engineer",
                                        "Open Source Contributor"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            A passionate MERN Stack Developer with strong skills in JavaScript, Node.js, and TypeScript.
                            I love building efficient, scalable applications and continuously explore system design,
                            backend architecture, and modern technologies. Currently working as a Software Engineer,
                            I also contribute to open-source projects and work on personal innovations like AxioDB.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-md font-medium">
                                View Projects
                            </button>
                            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors px-6 py-3 rounded-md font-medium">
                                Contact Me
                            </button>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="md:w-2/5 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/20 mt-8">
                            <Image
                                src="/Myself.png"
                                alt="Ankan Saha"
                                fill
                                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
