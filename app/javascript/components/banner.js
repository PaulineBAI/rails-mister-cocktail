import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('.banner-text', {
    strings: ["Cocktail", "Change your life"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
