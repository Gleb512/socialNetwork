import React from 'react';
import s from './users.module.css';
import Paginator from "./Paginator";
import User from "./User/User";

let Users = ({totalUsersCount,pageSize,onPageChenged,currentPage, users, follow, unfollow}) => {
        return (
        <div className={s.users}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChenged={onPageChenged} currentPage={currentPage}/>
            {
                users.map( u => <User user={u} key={u.id} follow={follow} unfollow={unfollow} />)
            }
        </div>)
    }


export default Users;