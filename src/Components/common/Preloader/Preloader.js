import React from 'react';
import preloader from "../../../assets/loader.gif";
import s from './preloader.module.css';

let Preloader = () => {
    return (
        <div className={s.preloader_sect}>
            <img className={s.preloader_img} alt={preloader} src={preloader} />
        </div>
    )
}

export default Preloader;