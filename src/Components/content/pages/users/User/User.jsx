import React from 'react';
import s from './../users.module.css';
import avatarImg from './../../../../../../src/assets/avatar10.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, unfollow, follow}) => {
    return (<div key={user.id} className={s.usersItem}>
                    <div className={s.photoSide}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.userphoto} alt={"User"}
                                 src={user.photos.small != null ? user.photos.small : avatarImg  } />
                        </NavLink>
                    </div>
                    <div className={s.informSide}>
                        <NavLink to={'/profile/' + user.id}>
                            <h4>
                                {user.name} <span>({"u.userLocation"})</span>
                            </h4>
                        </NavLink>
                        <p className={s.inform}>
                            {user.status}
                        </p>
                        <p className={s.inform}>
                            Email: {"u.userEmail"}
                        </p>
                    </div>
                    <div className={s.buttonSide}>
                        {user.followed
                            ?<button className={s.followBtn} onClick={() =>{unfollow(user.id)} }>Delete</button>
                            : <button className={s.followBtn} onClick={() =>{follow(user.id)} }>+Add</button>
                        }
                    </div>
                </div>
    );
}


export default User;