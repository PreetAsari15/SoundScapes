import React from "react";
import imageSrc from "../assets/images/s1.jpg";
import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Step into the past and uncover the captivating history of{" "}
        <span
          className="blue-gradient_text font-semibold
      drop-shadow"
        >
          SoundScapes
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          The SoundScapes genre originated in the mid-20th century, as composers
          began exploring the incorporation of environmental sounds and ambient
          elements into their compositions. Influenced by the pioneering work of
          composers such as John Cage, the genre challenged traditional notions
          of music by embracing the natural sounds of the world around us.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Development of genre</h3>
        <div className="mt-6 flex flex-wrap gap-12">
          Over time, SoundScapes evolved into a diverse and dynamic genre,
          encompassing a wide range of styles and techniques. From minimalist
          compositions that emphasize silence and space to immersive sound
          installations that blur the boundaries between art and environment,
          SoundScapes continues to push the boundaries of sonic experimentation
          and creative expression.
        </div>
      </div>
      <img src={imageSrc} alt="" className="w-1/1 h-1/3 object-contain" />
      <div className="py-8 flex flex-col">
        <h3 className="subhead-text">Current day...</h3>
        <div className="mt-6 flex flex-wrap gap-12">
          Today, SoundScapes remains a vibrant and ever-evolving genre,
          captivating audiences with its ability to evoke emotions, stimulate
          the imagination, and provide a unique perspective on the world we
          inhabit.
        </div>
        <div className="mt-6 flex flex-wrap gap-12">
          Whether you're a seasoned artist or an enthusiastic newcomer, there's
          always more to explore and experience in the ever-evolving landscape
          of SoundScapes. So, let your imagination soar, and let the symphony of
          sounds guide you on a path of endless fascination and inspiration.
        </div>
      </div>
        <Link to="/" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition duration-300">Back to Home</Link>
    </section>
  );
};

export default Explore;
