import * as path from 'path';
import * as fs  from 'fs';

const fetchMovieData = (): Object => JSON.parse(fs.readFileSync(path.join(__dirname, './MovieData.json'), 'utf8'));
export {fetchMovieData};