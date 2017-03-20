import initApollo from '@common/lib/initApollo';

const host = process.env.HOST;
const port = process.env.PORT;

const getToken = () => localStorage.getItem('token');

const apollo = initApollo(host, port, getToken);

export default apollo;