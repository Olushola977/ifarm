export const lgsettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0.5,
  };
export const categorylgsettings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 0.5,
    };
export const smsettings = {
    infinite: false,
    auto: true,
    speed: 500,
    dots: true,
    arrows: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
export const mdsettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.7,
    slidesToScroll: 1,
  };
export const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");