import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface BlogState {
  blogs: any[];
  singleBlog: any | null;
  searchQuery: {
    page: number;
    tags: string[];
    keyword: string;
  };
}

const initialState: BlogState = {
  blogs: [],
  singleBlog: null,
  searchQuery: {
    page: 1,
    tags: [''],
    keyword: ''
  }
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogInfo: (state, action: PayloadAction<{ blogs: any[] }>) => {
      state.blogs = action.payload.blogs;
    },
    setSingleBlog: (state, action: PayloadAction<{ blog: any[] }>) => {
      state.singleBlog = action.payload.blog;
    },
    setSearchQuery: (state, action: PayloadAction<{ page: number; tags: string[]; keyword: string }>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setBlogInfo, setSingleBlog, setSearchQuery } = blogSlice.actions;

export const selectBlogInfo = (state: RootState) => state.blog.blogs;
export const selectSingleBlog = (state: RootState) => state.blog.singleBlog;
export const selectQuery = (state: RootState) => state.blog.searchQuery;

export default blogSlice.reducer;
