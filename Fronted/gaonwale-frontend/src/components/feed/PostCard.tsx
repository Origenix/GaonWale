import React, { useState } from 'react';
import { MoreVertical, MessageCircle, Share2, Bookmark, Heart } from 'lucide-react';
import type { Post } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { classNames, formatNumber } from '../../utils/helpers';

interface PostCardProps {
  post: Post;
  rank?: number;
}

export const PostCard: React.FC<PostCardProps> = ({ post, rank }) => {
  const { theme } = useTheme();
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const authorName = post.author.id.startsWith('a') ? (post.author as any).displayName : (post.author as any).fullName;

  return (
    <div className={classNames(
      "mb-2 md:mb-4 md:rounded-2xl border-y md:border shadow-sm",
      theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
    )}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {rank && (
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {rank}
            </div>
          )}
          <img 
            src={post.author.avatar} 
            alt={authorName} 
            className={classNames(
              "w-10 h-10 rounded-full object-cover",
              post.author.id.startsWith('a') ? "border-2 border-[#7C3AED]" : ""
            )} 
          />
          <div>
            <h3 className={classNames("font-bold text-sm", theme === 'dark' ? "text-white" : "text-gray-900")}>
              {authorName}
            </h3>
            <p className="text-xs text-gray-500">
              {post.village} • {post.createdAt}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className={classNames("text-sm whitespace-pre-line leading-relaxed", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>
          {post.content}
        </p>
      </div>

      {/* Media */}
      {post.images && post.images.length > 0 && (
        <div className={classNames(
          "w-full overflow-hidden",
          post.images.length === 1 ? "max-h-[400px]" : "grid grid-cols-2 gap-1"
        )}>
          {post.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt="Post attachment" 
              className={classNames(
                "w-full object-cover",
                post.images.length === 1 ? "h-auto max-h-[400px]" : "h-48"
              )} 
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button 
            onClick={handleLike}
            className={classNames(
              "flex items-center gap-1.5 text-sm font-medium transition-colors",
              isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
            )}
          >
            <Heart size={20} className={isLiked ? "fill-current text-red-500" : ""} />
            <span>{formatNumber(likesCount)}</span>
          </button>
          
          <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <MessageCircle size={20} />
            <span>{formatNumber(post.comments)}</span>
          </button>
          
          <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            <Share2 size={20} />
            <span>{formatNumber(post.shares)}</span>
          </button>
        </div>
        
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className={classNames(
            "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors",
            isSaved ? "text-[#7C3AED]" : ""
          )}
        >
          <Bookmark size={22} className={isSaved ? "fill-current text-[#7C3AED]" : ""} />
        </button>
      </div>
    </div>
  );
};
