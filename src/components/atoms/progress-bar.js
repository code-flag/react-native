import * as React from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const ProgressBar = ({val = 0.5}) => (
//   <ProgressBar progress={0.5} color={MD3Colors.error50} />
  <ProgressBar animatedValue={val} color={MD3Colors.error50} />
);

export default ProgressBar;