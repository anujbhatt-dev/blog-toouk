// store/auth.ts
import {  User } from '@/utils/types';
import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  // actions
  setUser:(props:User | null) => void;
};

export const authStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  user: null,
  loading: false,
  setUser: (user) => {
    if(user) set({ user , isAuthenticated:true })
    else set({user, isAuthenticated:false})
      
  },
}));