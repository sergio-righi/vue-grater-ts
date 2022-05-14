/**
 * It returns the background class according to the parameter
 * @param {string} value - color string
 */
const getBackground = (value: string) => (value ? `bg-${value}` : null);

/**
 * It returns the color class according to the parameter
 * @param {string} value - color string
 */
const getFontColor = (value: string) => (value ? `color-${value}` : null);

/**
 * It returns the border class according to the parameter
 * @param {string} value - color string
 */
const getBorderColor = (value: string) => (value ? `border-${value}` : null);

export default { getBackground, getFontColor, getBorderColor };
