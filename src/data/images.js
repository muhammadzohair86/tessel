// Resolves photos in src/assets/images by path without extension, e.g. img('portfolio/app-1').
const files = import.meta.glob('../assets/images/**/*.jpg', { eager: true, import: 'default' });
export const img = (name) => files[`../assets/images/${name}.jpg`];
