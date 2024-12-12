
'use client';
import { useState } from 'react';
import { PiGreaterThan } from "react-icons/pi";
import Image from 'next/image';

const Slider = ({ slides }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="flex overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[1.25rem] relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`relative flex-shrink-0 transition-all duration-500 ${
            hoverIndex === index ? 'flex-[2]' : 'flex-[1]'
          } rounded-lg`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-between p-4 text-white">
          <span className="text-lg md:text-xl overflow-hidden text-ellipsis whitespace-nowrap">{slide.title}</span>
            {hoverIndex === index && (
              <span className="text-xl bg-white rounded-full absolute top-5 p-1 right-5">
                <PiGreaterThan size={16} color="black" />
              </span>
            )}
          </div>

          {/* Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
