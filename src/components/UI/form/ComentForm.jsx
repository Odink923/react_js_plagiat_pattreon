import React, {useState} from 'react';
import classes from './ComentForm.module.css'
import MyButton from "../button/MyButton";
const ComentForm = (props) =>
{

    const [comment, setComment] = useState({Name: '',body: ''})
    const addNewComment = (e) =>{
        e.preventDefault();
        const newComment={
            ...comment, id: Date.now()
        }
        props.create(newComment);
        setComment({Name: '', body: ''})

    }


    return (
        <form className={classes.forM}>
            <div >Name</div>
            <input
                value={comment.Name}
                onChange={e => setComment({ ...comment, Name: e.target.value })}
                placeholder="Enter name" className={classes.myFormName}/>
            <div >Comment</div>
            <textarea type="text" placeholder="Start text"
                      value={comment.body}
                      onChange={e => setComment({ ...comment, body: e.target.value })}
                      className={classes.myFormComment}/>

            <MyButton  onClick={addNewComment} >
                <div style={{background:"#F2F2F2"}}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                     className="bi bi-send" viewBox="0 0 16 16">
                    <path
                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg></div></MyButton>
        </form>
    );
};

export default ComentForm;