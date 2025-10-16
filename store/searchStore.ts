import { create } from 'zustand'

type SearchStore = {
  isSearchOpen: boolean
  toggleSearch: () => void
}

export const useSearchStore = create<SearchStore>()((set) => ({
  isSearchOpen: false,
  toggleSearch: () => {
    return set((state) => ({ isSearchOpen: !state.isSearchOpen }))
  },
}))