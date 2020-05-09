/*import React from 'react';
import s from './users.module.css';
import * as axios from "axios";
import avatarImg from './../../../../../src/assets/avatar10.jpg'

let UsersCC = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }

    return <div className={s.users}>
        <button onClick={getUsers} className="btn">Get Users</button>
        {
            props.users.map( u => <div key={u.id} className={s.usersItem}>
                <div className={s.photoSide}>
                    <img className={s.userphoto} src={u.photos.small != null ? u.photos.small : avatarImg  } />
                </div>
                <div className={s.informSide}>
                    <h4>
                        {u.name} <span>({"u.userLocation"})</span>
                    </h4>
                    <p className={s.inform}>
                        {"u.status"}
                    </p>
                    <p className={s.inform}>
                        Email: {"u.userEmail"}
                    </p>
                </div>
                <div className={s.buttonSide}>
                    {u.followed
                        ? <button className={s.followBtn} onClick={() =>{ props.follow(u.id) } }>Delete</button>
                        : <button className={s.followBtn} onClick={() =>{ props.unfollow(u.id) } }>+Add</button>
                    }
                </div>
            </div>)
        }
        </div>
    }

export default UsersCC;*/