import React,{useEffect,useState} from 'react'
import './Home.css'
import { Link} from 'react-router-dom'
import { motion } from 'framer-motion'
function Home(sidebar) {
  const [mobile, setMobile] = useState(false);
  console.log(sidebar);
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        }
    }, []);
    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 768) {
                setMobile(true);
            }
            else {
                setMobile(false);
            }
        };
        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        }
    }, []);
  <meta name='viewport' content='width=device-width,initial-scale=1.0' />
  return (
    <nav>
      {!mobile && (
      <motion.div class="Main" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
        <motion.div class="Pipes" animate={{scale:1}} initial={{scale:0}} transition={{duration:2.5}}>
        <img src="assets\pipy-removebg-preview.png" alt=""/>
        </motion.div>
        <motion.div class="Firm" animate={{scale:1}} initial={{scale:0}} transition={{duration:2.5}}>
        <p class="Name1">DELIVERS ELITE PLUMBING SERVICES</p>
        <p class="Subname1">for businesses and home owners</p>
        <Link to="/Portal"><button class="Customer-Portal1">Customer-Portal</button></Link>
        </motion.div>
        <motion.div class="Pipes1" animate={{scale:1}} initial={{scale:0}} transition={{duration:2.5}}>
        <img src="assets\pippp-removebg-preview.png" class="Pipe"alt="" />
        </motion.div>
      </motion.div>
      )}
      {
        mobile &&(
          <div class="Main-sidebar">
            <div class={sidebar ? "Inner-Main active":"Inner-Main"}>
              <p class="Checked">{sidebar}</p>
              <p class="Sidebar-Name">DELIVERS ELITE PLUMBING SERVICES</p>
              <p class="Sidebar-Subname">to businesses and home owners</p>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Home