import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { BLOGTYPE } from '@/helper/types';

interface BlogState {
  blogs: BLOGTYPE[];
  singleBlog: BLOGTYPE | null;
  searchQuery: {
    page: number;
    tags: string[];
    user:string;
    keyword: string;
  };
  updateBlog: any | null;
  totals: number;
}

const initialState: BlogState = {
  blogs: [],
  singleBlog: null,
  searchQuery: {
    page: 1,
    tags: [''],
    keyword: '',
    user:''
  },
  updateBlog: null,
  totals:1,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogInfo: (state, action: PayloadAction<{ blogs: BLOGTYPE[] }>) => {
      state.blogs = action.payload.blogs;
    },
    setSingleBlog: (state, action: PayloadAction<{ blog: BLOGTYPE | null }>) => {
      state.singleBlog = action.payload.blog;
    },
    setSearchQuery: (state, action: PayloadAction<{ page: number; tags: string[]; keyword: string;user:string }>) => {
      state.searchQuery = action.payload;
    },
    setUpdatedBlog: (state, action: PayloadAction<{ blog: any | null }>) => {
      state.updateBlog = action.payload
    },
    setTotal: (state, action: PayloadAction<{ totals: number }>) => {
      state.totals = action.payload.totals
    }
  },
});

export const { setBlogInfo, setSingleBlog, setSearchQuery, setUpdatedBlog,setTotal } = blogSlice.actions;

export const selectBlogInfo = (state: RootState) => state.blog.blogs;
export const selectSingleBlog = (state: RootState) => state.blog.singleBlog;
export const selectQuery = (state: RootState) => state.blog.searchQuery;
export const selectUpdatedBlog = (state: RootState) => state.blog.updateBlog;
export const selectTotal = (state: RootState) => state.blog.totals;


export default blogSlice.reducer;
