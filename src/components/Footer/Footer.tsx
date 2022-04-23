import React, {useState} from 'react'
import styles from './Footer.module.scss'
import {MdOutlineContentCopy} from "react-icons/md";

function Footer() {
  const [btnIsPressed,setBtnIsPressed] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  function copyEmail() {
    const email = "olyavlasak@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
      setIsCopied(true)
      setBtnIsPressed(true)
    }, function() {
      setIsCopied(false)
      setBtnIsPressed(true)
    });
  }
  return (
    <footer className={styles.footerContainer}>
      {btnIsPressed ? (
        isCopied ? <p className={styles.successMessage}>Email Copied to Clipboard</p>
        : <p className={styles.successMessage}>Error. Copy Email manually</p>
      ) : <p>&nbsp;</p>
      }


      <p>© 2022 by Olya Vlasak - olyavlasak@gmail.com
        <button type={"button"} className={styles.emailBtn} onClick={copyEmail}>
          <MdOutlineContentCopy className={styles.linkIcon}/></button>
      </p>
    </footer>
  );
}

export default Footer;