import { video01, videoSection } from "@/constants";
import React from "react";
import { Suspense } from "react";

async function VideoComponent({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
      <video
        className="pointer-events-none"
        autoPlay
        loop
        muted
        playsInline={true}
        key={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
function VideoSection() {
  return (
    <div className="w-full bg-black px-2">
      <div className="w-full flex flex-col-reverse md:flex-row bg-black text-gray-200 max-w-7xl mx-auto md:justify-center">
        <div className="flex-1 flex flex-col items-center py-8 ">
          <h3 className="pt-6 pb-10 text-4xl font-semibold w-96 text-center">
            {videoSection.title}
          </h3>
          <div className="">
            {videoSection.testimonials.map((element, i) => (
              <div
                key={`video-section-testimonial-${element.description.substring(
                  10
                )}-${i}`}
                className="py-4"
              >
                <p>
                  {element.stars} - {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Suspense fallback={<p>Loading video...</p>}>
          <VideoComponent videoSrc={video01} />
        </Suspense>
      </div>
    </div>
  );
}

export default VideoSection;
