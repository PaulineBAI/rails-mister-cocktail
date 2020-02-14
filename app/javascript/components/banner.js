import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('.banner-text', {
    strings: ["Discover cocktails", "Do you dare?"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
