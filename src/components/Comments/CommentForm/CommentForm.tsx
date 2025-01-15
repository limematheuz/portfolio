import { useState } from "react";
import { useComment } from "../../../Context/CommentContext";
import "./CommentForm.css";

interface CommentFormProps {
  onClose: () => void;
}


export default function CommentForm({ onClose }: CommentFormProps) {
  const [inputName, setInputName] = useState("");
  const [comment, setComment] = useState("");
  const { addComment } = useComment();
  // const [loading  , setLoading] = useState(false);


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addComment(inputName, comment);
    setInputName("");
    setComment("");
    onClose();
  };



  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <h3>Leave a comment</h3>
      <div className="comment-form-container">
        <input
          type="text"
          placeholder="Your name"
          required
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <textarea
          placeholder="Your comment"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
        {/* {loading && <p>Loading...</p>} */}
      </div>
    </form>
  );
}
