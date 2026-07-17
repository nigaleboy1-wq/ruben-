/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

export interface ClientLogo {
  name: string;
  svg: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

