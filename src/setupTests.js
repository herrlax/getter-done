import React from 'react';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';
import { setup as setupGoober } from 'goober';

setupGoober(React.createElement);
