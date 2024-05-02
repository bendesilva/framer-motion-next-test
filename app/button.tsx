'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import styles from './page.module.css'

export default function Button () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Hide' : 'Show'}
      </button>
      <div className={styles.container}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>This should be visible</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}