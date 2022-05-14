const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;

const bounceOut = function (t: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
};

const linear = (t: number) => t;
const easeInQuad = (t: number) => t * t;
const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2);
const easeInCubic = (t: number) => t * t * t;
const easeOutCubic = (t: number) => 1 - pow(1 - t, 3);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2;
const easeInQuart = (t: number) => t * t * t * t;
const easeOutQuart = (t: number) => 1 - pow(1 - t, 4);
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) / 2;
const easeInQuint = (t: number) => t * t * t * t * t;
const easeOutQuint = (t: number) => 1 - pow(1 - t, 5);
const easeInOutQuint = (t: number) =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) / 2;
const easeInSine = (t: number) => 1 - cos((t * PI) / 2);
const easeOutSine = (t: number) => sin((t * PI) / 2);
const easeInOutSine = (t: number) => -(cos(PI * t) - 1) / 2;
const easeInExpo = (t: number) => (t === 0 ? 0 : pow(2, 10 * t - 10));
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - pow(2, -10 * t));
const easeInOutExpo = (t: number) =>
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? pow(2, 20 * t - 10) / 2
        : (2 - pow(2, -20 * t + 10)) / 2;
const easeInCirc = (t: number) => 1 - sqrt(1 - pow(t, 2));
const easeOutCirc = (t: number) => sqrt(1 - pow(t - 1, 2));
const easeInOutCirc = (t: number) =>
  t < 0.5
    ? (1 - sqrt(1 - pow(2 * t, 2))) / 2
    : (sqrt(1 - pow(-2 * t + 2, 2)) + 1) / 2;
const easeInBack = (t: number) => c3 * t * t * t - c1 * t * t;
const easeOutBack = (t: number) => 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
const easeInOutBack = (t: number) =>
  t < 0.5
    ? (pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
    : (pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
const easeInElastic = (t: number) =>
  t === 0 ? 0 : t === 1 ? 1 : -pow(2, 10 * t - 10) * sin((t * 10 - 10.75) * c4);
const easeOutElastic = (t: number) =>
  t === 0 ? 0 : t === 1 ? 1 : pow(2, -10 * t) * sin((t * 10 - 0.75) * c4) + 1;
const easeInOutElastic = (t: number) =>
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? -(pow(2, 20 * t - 10) * sin((20 * t - 11.125) * c5)) / 2
        : (pow(2, -20 * t + 10) * sin((20 * t - 11.125) * c5)) / 2 + 1;
const easeInBounce = (t: number) => 1 - bounceOut(1 - t);
const easeOutBounce = bounceOut;
const easeInOutBounce = (t: number) =>
  t < 0.5 ? (1 - bounceOut(1 - 2 * t)) / 2 : (1 + bounceOut(2 * t - 1)) / 2;

const animations = {
  linear: linear,
  "ease-in-quad": easeInQuad,
  "ease-out-quad": easeOutQuad,
  "ease-in-out-quad": easeInOutQuad,
  "ease-in-sine": easeInSine,
  "ease-out-sine": easeOutSine,
  "ease-in-out-sine": easeInOutSine,
  "ease-in-expo": easeInExpo,
  "ease-out-expo": easeOutExpo,
  "ease-in-out-expo": easeInOutExpo,
  "ease-in-circ": easeInCirc,
  "ease-out-circ": easeOutCirc,
  "ease-in-out-circ": easeInOutCirc,
  "ease-in-cubic": easeInCubic,
  "ease-out-cubic": easeOutCubic,
  "ease-in-out-cubic": easeInOutCubic,
  "ease-in-quart": easeInQuart,
  "ease-out-quart": easeOutQuart,
  "ease-in-out-quart": easeInOutQuart,
  "ease-in-quint": easeInQuint,
  "ease-out-quint": easeOutQuint,
  "ease-in-out-quint": easeInOutQuint,
  "ease-in-elastic": easeInElastic,
  "ease-out-elastic": easeOutElastic,
  "ease-in-out-elastic": easeInOutElastic,
  "ease-in-back": easeInBack,
  "ease-out-back": easeOutBack,
  "ease-in-out-back": easeInOutBack,
  "ease-in-bounce": easeInBounce,
  "ease-out-bounce": easeOutBounce,
  "ease-in-out-bounce": easeInOutBounce,
};

export default {
  animations,
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
};
