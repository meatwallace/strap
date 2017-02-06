// eslint-disable-next-line no-undef
const nativeDev = typeof __DEV__ === 'undefined' || __DEV__;

const isDev = nativeDev || process.env.NODE_ENV === 'development';

export default isDev;
