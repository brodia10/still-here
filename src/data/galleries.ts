export interface GalleryImageData {
  src: string;
  alt: string;
  aspect: [number, number];
}

export interface GallerySeries {
  intro?: string;
  images: GalleryImageData[];
}

// placeholder entries — replace src strings with real image paths in public/images/
// aspect ratios approximate the intended framing

export const galleries: Record<string, GallerySeries> = {
  work: {
    images: [
      // opens with the deer at midnight
      { src: '', alt: 'deer at midnight, full eye contact, backlit ears, absolute darkness', aspect: [3, 2] },
      { src: '', alt: 'storm on the street, two light sources at different color temperatures', aspect: [3, 2] },
      { src: '', alt: 'arched window glowing against black sky', aspect: [2, 3] },
      { src: '', alt: 'dam in snow, underexposed to midnight', aspect: [3, 2] },
      { src: '', alt: 'bare branches consuming streetlight', aspect: [2, 3] },
      { src: '', alt: 'pink clothing on factory floor', aspect: [3, 2] },
      { src: '', alt: 'open bible on pulpit', aspect: [3, 2] },
      { src: '', alt: 'cracked pavement as landscape', aspect: [3, 2] },
      { src: '', alt: 'bokeh lights through dead winter plants', aspect: [2, 3] },
      { src: '', alt: 'dumpster burning red against amber house', aspect: [3, 2] },
      { src: '', alt: 'tree shadows spreading across cracked pavement', aspect: [3, 2] },
      { src: '', alt: 'blurred bible, not document but apparition', aspect: [3, 2] },
      { src: '', alt: 'white cloth draped over church pew', aspect: [2, 3] },
      { src: '', alt: 'tiny door in absolute blackness', aspect: [3, 2] },
      { src: '', alt: 'deer grazing at night', aspect: [3, 2] },
      { src: '', alt: 'industrial corridor with motion blur', aspect: [3, 2] },
      { src: '', alt: 'branches raking a facade as shadow painting', aspect: [2, 3] },
      // closes with amber window in darkness
      { src: '', alt: 'single amber window glowing alone in absolute darkness', aspect: [3, 2] },
    ],
  },

  'god-is-indifferent': {
    intro: 'the universe is indifferent. the light is beautiful anyway.',
    images: [
      { src: '', alt: 'storm on the street, two competing color temperatures', aspect: [3, 2] },
      { src: '', alt: 'arched window glowing like a halo against black sky', aspect: [2, 3] },
      { src: '', alt: 'bare branches consuming the streetlight', aspect: [2, 3] },
      { src: '', alt: 'dumpster burning red against amber house', aspect: [3, 2] },
      { src: '', alt: 'deer grazing at midnight', aspect: [3, 2] },
      { src: '', alt: 'deer lying down in darkness', aspect: [3, 2] },
      { src: '', alt: 'deer disappearing into night', aspect: [3, 2] },
      { src: '', alt: 'deer looking back', aspect: [3, 2] },
      { src: '', alt: 'tree shadows spreading across cracked pavement', aspect: [3, 2] },
      { src: '', alt: 'kodachrome sodium warmth on a midnight street', aspect: [3, 2] },
    ],
  },

  'the-world-continued': {
    intro: 'someone was here. the world continued without them. the evidence remains.',
    images: [
      { src: '', alt: 'dam in snow, afternoon made midnight through underexposure', aspect: [3, 2] },
      { src: '', alt: 'industrial corridor with motion blur, light fighting through', aspect: [3, 2] },
      { src: '', alt: 'mattress and pillow in abandoned space', aspect: [3, 2] },
      { src: '', alt: 'pink clothing on a factory floor', aspect: [3, 2] },
      { src: '', alt: 'tiny door in absolute blackness, a threshold surrounded by void', aspect: [3, 2] },
      { src: '', alt: 'white cloth draped over church pew, shroud or wedding dress', aspect: [2, 3] },
    ],
  },

  'dear-fellow-member': {
    intro: 'we trust that our faith in you is not misplaced. — the trustee board, st. marks presbyterian church, february 1950.',
    images: [
      { src: '', alt: 'open bible on the pulpit', aspect: [3, 2] },
      { src: '', alt: 'red silk flowers still standing after years of abandonment', aspect: [2, 3] },
      { src: '', alt: 'graffiti laid over the pews', aspect: [3, 2] },
      { src: '', alt: 'blurred bible, not document but apparition', aspect: [3, 2] },
      { src: '', alt: 'armchair at the staircase holding its dignity against decay', aspect: [2, 3] },
      { src: '', alt: 'the letter from february 1950, found on the floor 75 years later', aspect: [3, 4] },
    ],
  },

  'what-the-light-chose': {
    intro: 'leave the viewer alone to wonder.',
    images: [
      { src: '', alt: 'cracked pavement as landscape', aspect: [3, 2] },
      { src: '', alt: 'branches raking a facade as shadow painting', aspect: [2, 3] },
      { src: '', alt: 'bokeh lights seen through dead winter plants', aspect: [2, 3] },
      { src: '', alt: 'recycling bin catching sodium light', aspect: [3, 2] },
      { src: '', alt: 'single object as witness at ground level', aspect: [3, 2] },
      { src: '', alt: 'detail in darkness, the thing itself and what it holds', aspect: [3, 2] },
    ],
  },
};
