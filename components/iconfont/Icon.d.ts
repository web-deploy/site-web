/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  name: 'home' | 'about' | 'archive' | 'tag';
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

export declare const Icon: FunctionComponent<Props>;

export default Icon;
