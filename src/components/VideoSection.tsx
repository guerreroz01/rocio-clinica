import { video01 } from "@/constants";
import React from "react";
import { Suspense } from "react";
import { list } from "@vercel/blob";

async function VideoComponent({ fileName }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video controls preload="none" aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
function VideoSection() {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComponent fileName="my-video.mp4" />
    </Suspense>
  );
}

export default VideoSection;
