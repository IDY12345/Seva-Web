import { motion } from 'framer-motion'
import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <motion.div class= "Contact1" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
        <p class="Info">Contact</p>
    </motion.div>
  )
}

export default Contact