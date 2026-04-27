"use client";

import React from "react";

export default function PromoVideo() {
  return (
    <section className="py-12 px-4 bg-kj-beige relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-black relative">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/fTtE50IgLcA?rel=0"
            title="KJ Kakehashi Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
