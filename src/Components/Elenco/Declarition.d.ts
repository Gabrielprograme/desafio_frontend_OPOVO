
// Isso resolve os erros de "Cannot find module" dos estilos do Swiper
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

// Isso resolve o problema de importar imagens (png, jpg) no TypeScript
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";