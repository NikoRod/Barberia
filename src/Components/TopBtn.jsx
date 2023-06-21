import { useState } from 'react';

// STYLES
import "../Styles/TopBtn.scss";

// ICONS
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function TopBtn() {

// FUNCTION BTN
  const top = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

// VISIBLE BTN
  const [visible, setVisible] = useState(false);
  
  const visibility = () => {
    if (window.scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  window.addEventListener("scroll", visibility);

  return (

    <div className='topbtn-container'>

    <button onClick={top} className={visible ? "btn btn-visible" : "btn"}> <KeyboardArrowUpIcon fontSize='small' /> </button>

  </div>

  );
}
