import React, {useState} from 'react';
import MyModal from "./MyModal";

const ModalCreate = ({modalCreate, user, setUser, setModalCreate, createBtnClick, ...props}) => {

    const [createPostTitle, setCreatePostTitle] = useState("");
    const [createPostDescription, setCreatePostDescription] = useState("");
    const [createPostTags, setCreatePostTags] = useState("");
    const [createPostUrlPhoto, setCreatePostUrlPhoto] = useState("");
    const [selectedPhotoFile, setSelectedPhotoFile] = useState(null);
    const photoFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedPhotoFile(file);
        }
    };
    return (
        <div>
            <MyModal visible={modalCreate} setVisible={setModalCreate}>
                <div style={{display: "block"}}>
                    <div style={{display: "inlineBlock", verticalAlign: "top"}}>
                        <img style={{verticalAlign: "top"}} width="300px" src={user.photo} style={{marginTop: "8%"}}/>
                        <input style={{verticalAlign: "top"}} name="photo" type="file" onChange={photoFileChange}/>
                        <input style={{verticalAlign: "top"}} onChange={(e) => {
                            setCreatePostUrlPhoto(e.target.value)
                        }} name="urlPhoto" placeholder="URL-photo"/>
                    </div>
                    <div style={{display: "inlineBlock", verticalAlign: "top"}}>
                        <input style={{verticalAlign: "top"}} onChange={(e) => {
                            setCreatePostTitle(e.target.value)
                        }} name="title" placeholder="Title"/>
                        <input style={{verticalAlign: "top"}} onChange={(e) => {
                            setCreatePostDescription(e.target.value)
                        }} name="description" placeholder="description"/>
                        <input style={{verticalAlign: "top"}} onChange={(e) => {
                            setCreatePostTags(e.target.value)
                        }} name="tags" placeholder="tags"/>
                    </div>
                    <div>
                        <button onClick={createBtnClick}>Create</button>
                    </div>
                </div>
            </MyModal>
        </div>
    );
};

export default ModalCreate;