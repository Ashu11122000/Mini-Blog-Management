// services/analyticsService.ts

import { posts } from "../data/posts";
import { categories } from "../data/categories";
import { comments } from "../data/comments";

export const getDashboardStats = () => {
  const totalPosts = posts.length;

  const totalViews = posts.reduce(
    (total, post) => total + post.views,
    0
  );

  const totalComments = comments.length;

  const totalCategories = categories.length;

  return {
    totalPosts,
    totalViews,
    totalComments,
    totalCategories,
  };
};

export const getPostsPerCategory = () => {
  return categories.map((category) => ({
    category: category.name,
    count: posts.filter(
      (post) => post.category === category.name
    ).length,
  }));
};

export const getMostViewedPosts = (limit = 5) => {
  return [...posts]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

export const getRecentPosts = (limit = 5) => {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
};

export const getTopCommentedPosts = (limit = 5) => {
  return [...posts]
    .sort((a, b) => b.comments - a.comments)
    .slice(0, limit);
};

export const getAnalyticsSummary = () => {
  return {
    stats: getDashboardStats(),
    categories: getPostsPerCategory(),
    recentPosts: getRecentPosts(),
    mostViewedPosts: getMostViewedPosts(),
    topCommentedPosts: getTopCommentedPosts(),
  };
};