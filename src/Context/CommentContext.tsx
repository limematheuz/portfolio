import React, { createContext, useState, useContext } from "react";
import { supabase } from "../supabase/client";

interface Comment {
  user_name: string;
  description: string;
}

interface CommentContextType {
  comments: Comment[];
  data: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  getComments: () => Promise<void>;
  addComment: (inputName: string, comment: string) => void;
}

export const CommentContext = createContext<CommentContextType | null>(null);

export const useComment = (): CommentContextType => {
  const context = useContext(CommentContext);
  if (!context)
    throw new Error("useComment must be used within a CommentProvider");
  return context;
};

interface CommentProviderProps {
  children: React.ReactNode;
}

export const CommentProvider: React.FC<CommentProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = async () => {
    const { error, data } = await supabase.from("comments").select();
    if (error) throw error;

    setComments(data);
  };

  const addComment = async (inputName: string, comment: string) => {
    try {
      const { data, error } = await supabase.from("comments").insert({
        user_name: inputName,
        description: comment,
      }).select();

      if (error) throw error;
      setComments((prevComments) => [...(data || []), ...prevComments]);
    } catch (error) {
      // console.error("Error adding comment:", error);
    }
  };

  return (
    <CommentContext.Provider
      value={{ comments, setComments, getComments, addComment, data: comments }}
    >
      {children}
    </CommentContext.Provider>
  );
};
