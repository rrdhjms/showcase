import React from 'react';
import styles from './ListHeader.module.css';

type Props = {
  header: string;
  info: string;
};

export default function ListHeader({ header, info }: Props) {
  return (
    <div className={styles.numStats}>
      <h3>{header}</h3>
      <div>
        <span>{info}</span>
      </div>
    </div>
  );
}
