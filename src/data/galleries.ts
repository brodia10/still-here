export type ImageSize = 'full' | 'large' | 'medium' | 'small';
export type ImageAlign = 'left' | 'center' | 'right';

export interface GalleryImageData {
  src: string;
  alt: string;
  aspect: [number, number];
  size?: ImageSize;
  align?: ImageAlign;
  bleed?: boolean;
  breath?: string;
}

export interface GallerySeries {
  intro?: string;
  images: GalleryImageData[];
}

export const galleries: Record<string, GallerySeries> = {
  work: {
    images: [
      { src: '/images/god-is-indifferent/blossoms-house-night.jpg', alt: 'blossoms against house at night, life persisting in darkness', aspect: [3, 2], size: 'large' },

      // — god is indifferent and the streetlights are beautiful —
      { src: '/images/god-is-indifferent/deer-cracked-pavement.jpg', alt: 'deer stepping off curb onto cracked pavement, caught in light against total darkness', aspect: [4, 3], size: 'full', breath: 'god is indifferent and the streetlights are beautiful' },
      { src: '/images/god-is-indifferent/storm-pano.jpg', alt: 'storm on the street, two color temperatures fighting, rain on everything', aspect: [11, 5], bleed: true },
      { src: '/images/god-is-indifferent/ghost-car-streetlight.jpg', alt: 'ghost car blurring past streetlight, the world moving while the light stays still', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/ivy-trunk-window.jpg', alt: 'ivy clinging to bark, window glowing warm behind it, tenderness against darkness', aspect: [3, 2], size: 'medium', align: 'right' },
      { src: '/images/god-is-indifferent/dark-yard-scattered-light.jpg', alt: 'dark yard with scattered light points, the neighborhood holding its breath', aspect: [3, 2], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/amber-window-evergreen.jpg', alt: 'amber window through evergreen silhouettes, warmth persisting', aspect: [3, 2], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/storm-dark-house.jpg', alt: 'house barely visible through rain and darkness, amber light bottom left', aspect: [4, 3], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/light-streaks-void.jpg', alt: 'light streaks and distant streetlights against total void', aspect: [2, 1], bleed: true },

      // — the world continued without them —
      { src: '/images/the-world-continued/tiny-door-blackness.jpg', alt: 'tiny door in absolute blackness, a threshold, a possibility, surrounded by void', aspect: [3, 2], size: 'full', breath: 'the world continued without them' },
      { src: '/images/the-world-continued/dam-snow.jpg', alt: 'dam in snow, afternoon made midnight through underexposure', aspect: [2, 3], size: 'medium', align: 'right' },
      { src: '/images/the-world-continued/mattress-pillow.jpg', alt: 'mattress and pillow on factory floor, graffiti walls, someone slept here', aspect: [3, 2], size: 'full' },
      { src: '/images/the-world-continued/floor-wires-cloth.jpg', alt: 'wires and cloth on broken floor, the residue of presence', aspect: [3, 2], size: 'medium', align: 'left' },
      { src: '/images/the-world-continued/abandoned-through-darkness.jpg', alt: 'abandoned building seen through darkness, light struggling through a strip', aspect: [3, 2], size: 'medium' },
      { src: '/images/the-world-continued/debris-lot.jpg', alt: 'debris lot, graffiti, bare trees, everything left behind', aspect: [3, 2], size: 'large' },

      // — closing —
      { src: '/images/god-is-indifferent/deer-disappearing.jpg', alt: 'deer sideways in total darkness, barely visible, disappearing', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/storm-two-lights.jpg', alt: 'storm on the street, the two lights still fighting', aspect: [11, 5], bleed: true },
    ],
  },

  'god-is-indifferent': {
    intro: 'the universe is indifferent. the light is beautiful anyway.',
    images: [
      { src: '/images/god-is-indifferent/storm-two-lights.jpg', alt: 'storm on the street, two light sources at different color temperatures fighting each other', aspect: [11, 5], bleed: true },
      { src: '/images/god-is-indifferent/deer-cracked-pavement.jpg', alt: 'deer stepping off curb onto cracked pavement, still here', aspect: [4, 3], size: 'full' },
      { src: '/images/god-is-indifferent/storm-dark-house.jpg', alt: 'house barely visible through rain and darkness', aspect: [4, 3], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/deer-grazing.jpg', alt: 'deer grazing at midnight, neighborhood behind', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/storm-pano.jpg', alt: 'storm panoramic, rain catching both lights', aspect: [11, 5], bleed: true },
      { src: '/images/god-is-indifferent/ghost-car-streetlight.jpg', alt: 'ghost car blurring past streetlight', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/deer-looking-back.jpg', alt: 'deer looking back, backlit by house windows', aspect: [3, 2], size: 'large' },
      { src: '/images/god-is-indifferent/blossoms-house-night.jpg', alt: 'blossoms against house at night, life persisting', aspect: [3, 2], size: 'medium' },
      { src: '/images/god-is-indifferent/ivy-trunk-window.jpg', alt: 'ivy clinging to bark, window glowing warm behind it', aspect: [3, 2], size: 'medium', align: 'right' },
      { src: '/images/god-is-indifferent/amber-window-evergreen.jpg', alt: 'amber window through evergreen silhouettes', aspect: [3, 2], size: 'medium', align: 'left' },
      { src: '/images/god-is-indifferent/dark-yard-scattered-light.jpg', alt: 'dark yard with scattered light points', aspect: [3, 2], size: 'medium' },
      { src: '/images/god-is-indifferent/light-streaks-void.jpg', alt: 'light streaks against total void', aspect: [2, 1], bleed: true },
      { src: '/images/god-is-indifferent/deer-disappearing.jpg', alt: 'deer disappearing into total darkness', aspect: [3, 2], size: 'medium' },
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
    images: [],
  },
};
