import { useEffect, useRef, useState } from "react";
import { useComment } from "../../Context/CommentContext";
import CommentForm from "./CommentForm/CommentForm";
import "./Comments.css";

export default function Comments() {
  const { comments, getComments } = useComment();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

  useEffect(() => {
    getComments();
  }, []);

  const handleLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 490;
    }
  };

  const handleRightClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 490;
    }
  };

  const handleAddClick = () => {
    setIsAddingComment(true);
    setEditingCommentId(null);
  };

  const closeForm = () => {
    setIsAddingComment(false);
    setEditingCommentId(null);
  };

  const handleSelectChange = (value: string, commentId: number) => {
    if (value === "edit") {
      setEditingCommentId(commentId);
      setIsAddingComment(false);
    } else if (value === "delete") {
      console.log(`Eliminar comentario con ID ${commentId}`);
    }
  };

  return (
    <section className="comments-section">
      <h2>Comments</h2>
      <div className="comments-container">
        <div className="comments-container-slider" ref={sliderRef}>
          {comments.map((comment, id) => (
            <div key={id} className="comment-card">
              <div className="comment-user">
                <span></span>
                <p>@{comment.user_name}</p>
              </div>
              <p>" {comment.description} "</p>

              <select
                className="comments-options"
                onChange={(e) => handleSelectChange(e.target.value, id)}
                defaultValue=""
              >
                <option value="" disabled>
                  ...
                </option>
                <option value="delete">Delete</option>
                <option value="edit">Edit</option>
              </select>
            </div>
          ))}
        </div>
        <div className="comments-buttons">
          <button onClick={handleLeftClick}>Prev</button>
          <button onClick={handleRightClick}>Next</button>
        </div>
        <button className="addComment-btn" onClick={handleAddClick}>
          BOOST MY EGO 🤞
        </button>
      </div>
      {(isAddingComment || editingCommentId !== null) && (
        <CommentForm onClose={closeForm} />
      )}
    </section>
  );
}
