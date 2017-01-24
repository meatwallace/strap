import { flow, startCase, trim } from 'lodash/fp';

const lowerCase = s => s.toLowerCase();

const formatName = flow(trim, lowerCase, startCase);

export default formatName;
