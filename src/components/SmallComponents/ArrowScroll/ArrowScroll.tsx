import React from 'react';
import s from "./ArrowScroll.module.css";
import {animateScroll as scroll} from "react-scroll/modules";

export const ArrowScroll = () => {
    return (
        <div className={s.block_tools_news}>
            <div className={s.arrow_down} onClick={() => scroll.scrollToBottom()}>
                <span/>
                <span/>
                <span/>
            </div>
            <div className={s.arrow_up} onClick={() => scroll.scrollToTop()}>
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    );
};
