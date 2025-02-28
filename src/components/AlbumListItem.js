import Button from './Button';
import { GoTrash } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
import PhotosList from './PhotosList';

const AlbumListItem = ({album}) => {
    
    const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();


    const handleAlbumRemove = () => {
        removeAlbum(album);
    }
   
    const header = <>
        <Button className="mr-2" onClick={handleAlbumRemove} loading={removeAlbumResults.isLoading}>
            <GoTrash />
        </Button>
        <p className='text-green-600'>
            #{album.id}: {album.title}
        </p>
        </>

    return <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album}/>
    </ExpandablePanel>

}
 
export default AlbumListItem;