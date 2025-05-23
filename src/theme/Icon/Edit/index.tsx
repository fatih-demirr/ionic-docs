/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/Icon/Edit/index.tsx
 *
 * Reason for overriding:
 * - Changed the icon to be the GitHub icon since the icon is used on the `Edit this page` link, which links to the GitHub repo.
 */

import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Icon/Edit';

import styles from '@docusaurus/theme-classic/src/theme/Icon/Edit/styles.module.css';

export default function IconEdit({ className, ...restProps }: Props): ReactNode {
  return (
    <svg
      fill="none"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={clsx(styles.iconEdit, className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <g>
        <path
          d="M7 0C3.13438 0 0 3.21563 0 7.17813C0 10.35 2.00625 13.0375 4.7875 13.9875C4.83125 13.9969 4.86875 14 4.90625 14C5.16563 14 5.26562 13.8094 5.26562 13.6438C5.26562 13.4719 5.25938 13.0219 5.25625 12.4219C4.99375 12.4812 4.75938 12.5063 4.55 12.5063C3.20313 12.5063 2.89687 11.4594 2.89687 11.4594C2.57812 10.6313 2.11875 10.4094 2.11875 10.4094C1.50938 9.98125 2.11562 9.96875 2.1625 9.96875H2.16563C2.86875 10.0312 3.2375 10.7125 3.2375 10.7125C3.5875 11.325 4.05625 11.4969 4.475 11.4969C4.80312 11.4969 5.1 11.3906 5.275 11.3094C5.3375 10.8469 5.51875 10.5312 5.71875 10.35C4.16563 10.1688 2.53125 9.55313 2.53125 6.80312C2.53125 6.01875 2.80312 5.37813 3.25 4.87813C3.17812 4.69688 2.9375 3.96563 3.31875 2.97813C3.31875 2.97813 3.36875 2.9625 3.475 2.9625C3.72812 2.9625 4.3 3.05937 5.24375 3.71562C5.80312 3.55625 6.4 3.47812 6.99687 3.475C7.59062 3.47812 8.19063 3.55625 8.75 3.71562C9.69375 3.05937 10.2656 2.9625 10.5188 2.9625C10.625 2.9625 10.675 2.97813 10.675 2.97813C11.0563 3.96563 10.8156 4.69688 10.7437 4.87813C11.1906 5.38125 11.4625 6.02187 11.4625 6.80312C11.4625 9.55937 9.825 10.1656 8.26562 10.3438C8.51562 10.5656 8.74063 11.0031 8.74063 11.6719C8.74063 12.6313 8.73125 13.4062 8.73125 13.6406C8.73125 13.8094 8.82812 14 9.0875 14C9.125 14 9.16875 13.9969 9.2125 13.9875C11.9969 13.0375 14 10.3469 14 7.17813C14 3.21563 10.8656 0 7 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
