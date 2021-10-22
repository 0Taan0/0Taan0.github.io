import {Global} from '@emotion/react';
import { render } from 'react-dom';

const Fonts = () => (
    <Global
      styles={{
        'h1': {
          fontSize: 50
        },
        'h2':{
            fontSize: 20
        },
        'h3':{
            fontSize: 10
        }
      }
    
    }
    />
)

export default Fonts