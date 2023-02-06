import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

import { useThunk } from "../hooks/use-thunk";
import UserListItem from './UserListItem';


const UsersList = () => {
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const [loadingUsersError, setLoadingUsersError] = useState(null);

    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [CreatingUserError, setCreatingUserError] = useState(null);

   
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    
    const [doCreateUser, isCreatingUser, CreatingUserError] = useThunk(addUser)
    
    const dispatch = useDispatch();

    const { isLoading, data , error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        // setIsLoadingUsers(true);
        // dispatch(fetchUsers())
        // .unwrap()
        // .catch((err) => setLoadingUsersError(err))
        // .finally(() => setIsLoadingUsers(false));

        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        // setIsCreatingUser(true);
        // dispatch(addUser())
        // .unwrap()
        // .catch((err) => CreatingUserError(err))
        // .finally(() => setIsCreatingUser(false));

        doCreateUser();
    }

   
    let content;

    if(isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full"/>
    } else if(loadingUsersError) {
        content = <div>Error fetching data...</div>
    } else {
        content = data.map((user) => {
            //return <div>{user.id}</div>
            return <UserListItem key={user.id} user={user} />
        })
    }

    // const renderedUsers = data.map((user) => {
    //     return (
    //         <div key={user.id} className="mb-2 border rounded">
    //             <div className="flex p-2 justify-between items-center cursor-pointer">
    //                 {user.name}
    //                 <Button onClick={() => handleUserRemove(user.id)}>-</Button>
    //             </div>
    //         </div>
    //     )
    // })

    return ( 
        <div>
            <div className="flex flex-row justify-between m-3">
                <h4>User List</h4>
               
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
                
                {CreatingUserError && 'Error creating user...'}
            </div>
            {content}
        </div>
    );
}
 
export default UsersList;