import React from 'react';

import { storiesOf } from '@storybook/react';
import Prompt from '../components/Prompt';
import '../common/home.css';

storiesOf('Prompt', module).add('Home', () => <Prompt />);
