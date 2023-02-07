import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import PhotoListItem from './PhotoListItem';


const PhotosList = ({album}) => {
    // const fetchPhotos = useFetchPhotosQuery(album);
    // console.log(fetchPhotos)
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();
    
    const handlePhotoAdd = () => {
        addPhoto(album);
    }

    let content;
    if(isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if(error) {
        content = <div>Photo Loading Error...</div>
    } else {
        content = data.map((photo) => {
            return <PhotoListItem key={photo.id} photo={photo} />
        })
    }
    return ( 
        <div>
            <div className="flex p-2 justify-between items-center text-blue-600">
                <h3 className='text-lg font-bold'>Images of {album.id}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handlePhotoAdd}>+ Add Photo</Button>
            </div>
            <div className="flex flex-row flex-wrap justify-center m-3">{content}</div>
        </div>
     );
}
 
export default PhotosList;