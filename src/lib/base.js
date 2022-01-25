const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/signup';


export default base;