import React from 'react';
import s from './Users.module.css';
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(Math.ceil(response.data.totalCount / 100))
        })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    
    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        return (
            <div className={s.users}>
                <div className={s.numbers}>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page && s.selectedPage || s.number}
                                     onClick={() => this.onPageChanged(page)}>{page}</span>
                                     // onClick={(e) => this.props.setCurrentPage(page)}>{page}</span>
                    })}
                </div>
                {this.props.users}
            </div>
        )
    }
}

export default Users;
