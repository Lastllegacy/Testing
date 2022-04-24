import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
   mode: 'development',
   entry: {
      main : './2 page/js/script.js',
   },
   output: {
      path: path.resolve(__dirname,'2 page', 'dist'),
      filename: 'bundle.js',
    },
}