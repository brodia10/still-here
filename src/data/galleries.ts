export type ImageSize = 'full' | 'large' | 'medium' | 'small';
export type ImageAlign = 'left' | 'center' | 'right';

export interface GalleryImageData {
  src: string;
  alt: string;
  aspect: [number, number];
  size?: ImageSize;
  align?: ImageAlign;
  breath?: string;
}

export interface GallerySeries {
  intro?: string;
  images: GalleryImageData[];
}

export const galleries: Record<string, GallerySeries> = {
  work: {
    images: [
      // — god is indifferent and the streetlights are beautiful —
      { src: '/images/god-is-indifferent/deer-cracked-pavement.jpg', alt: 'deer stepping off curb onto cracked pavement, caught in light against total darkness', aspect: [4, 3], size: 'full', breath: 'god is indifferent and the streetlights are beautiful' },
      { src: '/images/god-is-indifferent/storm-pano.jpg', alt: 'storm on the street, two color temperatures fighting, rain on everything', aspect: [11, 5], size: 'medium' },
      { src: '/images/god-is-indifferent/deer-grazing.jpg', alt: 'deer grazing at midnight, neighborhood behind, still here while the city sleeps', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/storm-dark-house.jpg', alt: 'house barely visible through rain and darkness, amber light bottom left', aspect: [4, 3], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/deer-looking-back.jpg', alt: 'deer looking back, backlit by house windows, the animal aware of you', aspect: [3, 2], size: 'large' },

      // — the world continued without them —
      { src: '/images/the-world-continued/tiny-door-blackness.jpg', alt: 'tiny door in absolute blackness, a threshold, a possibility, surrounded by void', aspect: [3, 2], size: 'full', breath: 'the world continued without them' },
      { src: '/images/the-world-continued/dam-snow.jpg', alt: 'dam in snow, afternoon made midnight through underexposure', aspect: [2, 3], size: 'medium', align: 'right' },
      { src: '/images/the-world-continued/mattress-pillow.jpg', alt: 'mattress and pillow on factory floor, graffiti walls, someone slept here', aspect: [3, 2], size: 'full' },
      { src: '/images/the-world-continued/floor-wires-cloth.jpg', alt: 'wires and cloth on broken floor, the residue of presence', aspect: [3, 2], size: 'medium', align: 'left' },
      { src: '/images/the-world-continued/abandoned-through-darkness.jpg', alt: 'abandoned building seen through darkness, light struggling through a strip', aspect: [3, 2], size: 'medium' },
      { src: '/images/the-world-continued/debris-lot.jpg', alt: 'debris lot, graffiti, bare trees, everything left behind', aspect: [3, 2], size: 'large' },

      // — dear fellow member —
      { src: '/images/dear-fellow-member/abandoned-church-cross.jpg', alt: 'abandoned church interior, cross glowing in the dark', aspect: [2, 3], size: 'full', breath: 'dear fellow member' },
      { src: '/images/dear-fellow-member/cathedral-dark.jpg', alt: 'cathedral interior in darkness, faith and absence', aspect: [3, 2], size: 'large' },
      { src: '/images/dear-fellow-member/church-stained-glass.jpg', alt: 'stained glass in abandoned church, color persisting', aspect: [3, 2], size: 'medium' },
      { src: '/images/dear-fellow-member/empty-cathedral.jpg', alt: 'empty cathedral, faith asked for and not returned', aspect: [2, 3], size: 'medium', align: 'right' },

      // — what the light chose —
      { src: '/images/what-the-light-chose/cracked-pavement.jpg', alt: 'cracked pavement as landscape, what the ground remembers', aspect: [2, 3], size: 'medium', align: 'left', breath: 'what the light chose' },
      { src: '/images/what-the-light-chose/bokeh-lights.jpg', alt: 'bokeh lights dissolving through branches, warmth out of focus', aspect: [2, 3], size: 'small', align: 'right' },
      { src: '/images/what-the-light-chose/bokeh-night-trees.jpg', alt: 'bokeh through dead winter branches', aspect: [3, 4], size: 'small' },

      // — closing —
      { src: '/images/god-is-indifferent/deer-disappearing.jpg', alt: 'deer sideways in total darkness, barely visible, disappearing', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/storm-two-lights.jpg', alt: 'storm on the street, the two lights still fighting', aspect: [11, 5], size: 'medium' },
      { src: '/images/work/amber-window-glow.jpg', alt: 'single amber window glowing alone in absolute darkness', aspect: [9, 16], size: 'medium' },
    ],
  },

  'god-is-indifferent': {
    intro: 'the universe is indifferent. the light is beautiful anyway.',
    images: [
      { src: '/images/god-is-indifferent/storm-two-lights.jpg', alt: 'storm on the street, two light sources at different color temperatures fighting each other', aspect: [11, 5], size: 'large' },
      { src: '/images/god-is-indifferent/deer-cracked-pavement.jpg', alt: 'deer stepping off curb onto cracked pavement, still here', aspect: [4, 3], size: 'full' },
      { src: '/images/god-is-indifferent/storm-dark-house.jpg', alt: 'house barely visible through rain and darkness', aspect: [4, 3], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/deer-grazing.jpg', alt: 'deer grazing at midnight, neighborhood behind', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/storm-pano.jpg', alt: 'storm panoramic, rain catching both lights', aspect: [11, 5], size: 'medium' },
      { src: '/images/god-is-indifferent/deer-looking-back.jpg', alt: 'deer looking back, backlit by house windows', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/foggy-streetlights.jpg', alt: 'streetlights in fog, two light sources competing', aspect: [2, 3], size: 'medium', align: 'right' },
      { src: '/images/god-is-indifferent/deer-disappearing.jpg', alt: 'deer disappearing into total darkness', aspect: [3, 2], size: 'medium' },
      { src: '/images/god-is-indifferent/rain-streetlight.jpg', alt: 'streetlight in the rain, sodium warmth on a midnight street', aspect: [1, 1], size: 'small', align: 'right' },
    ],
  },

  'the-world-continued': {
    intro: 'someone was here. the world continued without them. the evidence remains.',
    images: [
      { src: '/images/the-world-continued/tiny-door-blackness.jpg', alt: 'tiny door in absolute blackness, a threshold surrounded by void', aspect: [3, 2], size: 'full' },
      { src: '/images/the-world-continued/dam-snow.jpg', alt: 'dam in snow, afternoon made midnight through underexposure', aspect: [2, 3], size: 'medium', align: 'right' },
      { src: '/images/the-world-continued/abandoned-through-darkness.jpg', alt: 'abandoned building seen through darkness, light strip at bottom', aspect: [3, 2], size: 'large' },
      { src: '/images/the-world-continued/mattress-pillow.jpg', alt: 'mattress and pillow on factory floor, graffiti walls, someone slept here', aspect: [3, 2], size: 'full' },
      { src: '/images/the-world-continued/floor-wires-cloth.jpg', alt: 'wires and cloth on broken floor, the residue of presence', aspect: [3, 2], size: 'medium', align: 'left' },
      { src: '/images/the-world-continued/debris-lot.jpg', alt: 'debris lot, graffiti, bare trees, everything left behind', aspect: [3, 2], size: 'large' },
    ],
  },

  'dear-fellow-member': {
    intro: 'we trust that our faith in you is not misplaced. — the trustee board, st. marks presbyterian church, february 1950.',
    images: [
      { src: '/images/dear-fellow-member/abandoned-church-cross.jpg', alt: 'abandoned church interior with glowing cross', aspect: [2, 3], size: 'full' },
      { src: '/images/dear-fellow-member/cathedral-dark.jpg', alt: 'cathedral interior in darkness', aspect: [3, 2], size: 'large' },
      { src: '/images/dear-fellow-member/church-stained-glass.jpg', alt: 'dark church with stained glass windows, color persisting', aspect: [3, 2], size: 'medium' },
      { src: '/images/dear-fellow-member/empty-cathedral.jpg', alt: 'empty cathedral, faith asked for and not returned', aspect: [2, 3], size: 'medium', align: 'right' },
      { src: '/images/dear-fellow-member/church-ruins.jpg', alt: 'church ruins, what remains after abandonment', aspect: [3, 2], size: 'large' },
    ],
  },

  'what-the-light-chose': {
    intro: 'leave the viewer alone to wonder.',
    images: [
      { src: '/images/what-the-light-chose/cracked-pavement.jpg', alt: 'cracked pavement as landscape', aspect: [2, 3], size: 'medium', align: 'left' },
      { src: '/images/what-the-light-chose/bokeh-lights.jpg', alt: 'bokeh lights dissolving, warmth out of focus', aspect: [2, 3], size: 'large' },
      { src: '/images/what-the-light-chose/bokeh-night-trees.jpg', alt: 'bokeh through dead winter branches', aspect: [3, 4], size: 'medium', align: 'right' },
      { src: '/images/what-the-light-chose/bokeh-green.jpg', alt: 'green light through plants, what the light chose', aspect: [2, 3], size: 'small' },
    ],
  },
};
