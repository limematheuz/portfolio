import { useEffect, useRef } from "react";
import { useComment } from "../../Context/CommentContext";
import "./Comments.css";

export default function Comments() {
  const { comments, getComments } = useComment();
const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getComments();
  }, []);

  const handleLeftClick = () => {
    if(sliderRef.current){
      sliderRef.current.scrollLeft -= 490;
    }
  };

  const handleRightClick = () => {
    if(sliderRef.current){
      sliderRef.current.scrollLeft += 490;
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
            </div>
          ))}
        </div>
        <div className="comments-buttons">
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
        </div>
      </div>
    </section>
  );
}
