import React from "react";
import Image from "next/image";
import profilePic from "@/public/assets/profilePic.jpg";

const About = () => {
  return (
    <div id="#about" className="w-full md:h-screen p-2 flex items-center py-8 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10 px-12">
        <div className="col-span-2 ">
          <h2 className="uppercase font-bold text-2xl tracking-widest text-primary-light mb-6">
            About Me
          </h2>
          <p className="py-2 text-lg text-gray-600">
            Hey! I&apos;m Quan Xu, base in Krempe, Germany. I&apos;m really into
            languages - the way people talk and even how computers communicate.
            I went all the way and got a master&apos;degree in Linguistics.
          </p>

          <p className="py-2 text-lg text-gray-600">
            My journey took me to different corners of the world - studying and
            working in <span className="text-primary-light">China</span>,{" "}
            <span className="text-primary-light">Japan</span>,
            <span className="text-primary-light">Germany</span> and{" "}
            <span className="text-primary-light">Singapore</span>. It was a
            rollercoaster of languages and experiences.
          </p>

          <p className="py-2 text-lg text-gray-600">
            And then there&apos;s coding - my latest passion! I joined two
            bootcamps to really understand the language of computers. It&apos;
            fascinating how coding opens up a whole new world of possibilities.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Learning to code feels like decoding a different kind of language,
            one that&apos;s all about making things happen in the digital realm.
            I get a real kick out of it - the problem-solving, the creativity,
            it&apos;s like crafting something out of thin air.
          </p>

          <p className="py-2 text-lg text-gray-600">
            Ready to see where these languages and coding skills take me next!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-6 hover:scale-105 ease-in duration-300">
          <Image src={profilePic} alt="Profile Pic" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default About;
