import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useRemovePhotoMutation } from "../store";

const PhotoListItem = ({photo}) => {
    const [removePhoto, removePhotoResults] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    }
    return ( 
        <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
            <img className="h-20 w-20" src={photo.url} alt="pic"/>
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
            <GoTrash className="text-3xl" loading={removePhotoResults.loading} />
            </div>
            {/* <Button loading={removePhotoResults.loading} onClick={handleRemovePhoto}>
            </Button> */}
        </div>
     );
}
 
export default PhotoListItem;