import Skeleton from './Skeleton';
import Button from './Button';

import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import AlbumListItem from './AlbumListItem';


const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
   
    const handleAlbumAdd = () => {
        addAlbum(user);
    }
    //console.log(data, error, isLoading);
    let content;
    if(isLoading) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if(error) {
        content = <div>Error Loading Albums.</div>
    } else {
        content = data.map(album => {
            return <AlbumListItem key={album.id} album={album}  />
        })
    }

    return ( 
        <div>
            <div className="flex p-2 justify-between items-center text-blue-600">
                <h3 className='text-lg font-bold'>Albums of {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAlbumAdd}>+ Add Album</Button>
            </div>
            <div>{content}</div>
        </div>
    );
}
 
export default AlbumsList;