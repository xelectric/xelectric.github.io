import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Home from '../components/Home';
import '../common/home.css';

storiesOf('Home', module).add('Home', () => <Home />);
