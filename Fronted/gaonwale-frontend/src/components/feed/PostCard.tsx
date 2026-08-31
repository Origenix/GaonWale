import React, { useState } from 'react';
import { MoreHorizontal, MessageCircle, Send, Bookmark, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Post } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { classNames, formatNumber } from '../../utils/helpers';

interface PostCardProps { post: Post; rank?: number; }

export const PostCard: React.FC<PostCardProps> = ({ post, rank }) => {
  const { theme } = useTheme();
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const authorName = post.author.id.startsWith('a') ? (post.author as any).displayName : (post.author as any).fullName;

  const handleLike = () => {
    setIsLiked(current => {
      setLikesCount(count => current ? Math.max(0, count - 1) : count + 1);
      return !current;
    });
  };

  return (
    <article className={classNames('mb-2 md:mb-4 md:rounded-2xl border-y md:border shadow-sm overflow-hidden', theme === 'dark' ? 'bg-[#151835] border-[#252952]' : 'bg-white border-gray-200')}>
      <div className="flex items-center justify-between px-4 py-3.5">
        <Link to={`/profile/${post.author.id}`} className="flex min-w-0 items-center gap-3">
          {rank && <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white">{rank}</span>}
          <img src={post.author.avatar} alt={authorName} className={classNames('h-10 w-10 shrink-0 rounded-full object-cover', post.author.id.startsWith('a') ? 'ring-2 ring-gw-purple ring-offset-2 dark:ring-offset-[#151835]' : '')} />
          <div className="min-w-0">
            <h3 className={classNames('truncate text-sm font-bold', theme === 'dark' ? 'text-white' : 'text-gray-900')}>{authorName}</h3>
            <p className="truncate text-xs text-gray-500">{post.village} · {post.createdAt}</p>
          </div>
        </Link>
        <button aria-label="More options" className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-[#1C1F45]">
          <MoreHorizontal size={21} />
        </button>
      </div>

      {post.content && <div className="px-4 pb-3"><p className={classNames('whitespace-pre-line text-[14px] leading-5', theme === 'dark' ? 'text-gray-100' : 'text-gray-800')}>{post.content}</p></div>}

      {post.images && post.images.length > 0 && (
        <div className={classNames('w-full overflow-hidden bg-black', post.images.length > 1 ? 'grid grid-cols-2 gap-px' : '')}>
          {post.images.map((img, i) => (
            <img key={i} src={img} alt="Post attachment" loading="lazy" className={classNames('w-full object-cover', post.images.length === 1 ? 'max-h-[620px] min-h-[260px]' : 'aspect-square')} />
          ))}
        </div>
      )}

      <div className="px-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button aria-label={isLiked ? 'Unlike post' : 'Like post'} onClick={handleLike} className={classNames('rounded-full p-2 transition active:scale-90', isLiked ? 'text-red-500' : 'text-gray-600 dark:text-gray-300')}>
              <Heart size={25} fill={isLiked ? 'currentColor' : 'none'} strokeWidth={isLiked ? 2.2 : 1.8} />
            </button>
            <Link aria-label="View comments" to={`/post/${post.id}`} className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#1C1F45]"><MessageCircle size={24} strokeWidth={1.9} /></Link>
            <button aria-label="Share post" className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#1C1F45]"><Send size={24} strokeWidth={1.9} /></button>
          </div>
          <button aria-label={isSaved ? 'Remove from saved' : 'Save post'} onClick={() => setIsSaved(value => !value)} className={classNames('rounded-full p-2 transition active:scale-90', isSaved ? 'text-gw-purple' : 'text-gray-600 dark:text-gray-300')}>
            <Bookmark size={24} fill={isSaved ? 'currentColor' : 'none'} strokeWidth={1.9} />
          </button>
        </div>
        <p className="pb-3 text-xs font-semibold text-gray-500 dark:text-gray-400">{formatNumber(likesCount)} likes · {formatNumber(post.comments)} comments</p>
      </div>
    </article>
  );
};
