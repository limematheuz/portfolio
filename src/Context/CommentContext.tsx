import React, { createContext, useState, useContext } from "react";
import { supabase } from "../supabase/client";

interface Comment {
  user_name: string;
  title: string;
  description: string;
}

interface CommentContextType {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  getComments: () => Promise<void>;
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
    const {error, data} = await supabase.from("comments").select();
    if(error) throw error;;

    setComments(data);
  };

  return (
    <CommentContext.Provider value={{ comments, setComments, getComments  }}>
      {children}
    </CommentContext.Provider>
  );
};
