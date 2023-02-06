import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UserListItem = ({user}) => {

    const [doRemoveUser, isDeletingUser, deletingUserError] = useThunk(removeUser);
    
    const handleUserRemove = () => {
        //console.log('id::::', id);
        doRemoveUser(user);
    }

    const header = <>
        <Button loading={isDeletingUser} onClick={handleUserRemove}>
            <GoTrashcan />
        </Button>
        {deletingUserError && <div>Error Deleting User</div>}
        {user.name}
    </>;
    
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    );
}
 
export default UserListItem;