import React from 'react';
import { useEffect } from 'react';
import { UserData } from './types';


export interface UserListProps {
    results: {
        id: string
        name: string
        email: string
    }[]
}

const UserList: React.FC<UserListProps> = ({ results }) => {

    useEffect(() => {
        console.log(results);
    })

    return (
        <>
            {
                results.map((instance) => {
                    console.log(instance);
                    return (
                        <div>
                            <p>ID: {instance.id}</p>
                            <p>Name: {instance.name}</p>
                            <p>Email: {instance.email}</p>
                        </div>
                    )
                })
            }
        </>
    )


}

export default UserList;