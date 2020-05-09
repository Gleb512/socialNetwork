import React from 'react';
import s from './blog_items.module.css';

let BlogItems = (props) => {
    return (
        <div className={s.item}>
            <p>George Taylor</p>
            <div className={s.item_name}>
                {props.name}
                    </div>
            <div className={s.item_description}>
                {props.description}
                    </div>
        </div>
    );
}
export default BlogItems;