import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="customPadding bg-[#F2F2F2]">
      <div className="container mx-auto px-28">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="CustomH3">Light, Fast & Powerful</h3>
            <p className="CustomParagraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-full"
              src={`${process.env.NEXT_PUBLIC_URL}/img/SoftHustlers.gif`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
