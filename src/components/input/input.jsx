import React from 'react'
import classnames from 'classnames'

import input from './input.module.scss'
import styles from './input.module.scss'

export function Input({ className, ...props }) {
  const classNames = classnames(input, className)

  return <input className={styles.classNames} {...props} />
}
