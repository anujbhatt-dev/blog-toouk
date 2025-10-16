
import { create } from 'zustand'

type Store = {
  registerPortal: boolean
  loginPortal: boolean
  setRegisterPortal: (v: boolean) => void
  setLoginPortal: (v: boolean) => void
}

export const useGlobalStore = create<Store>()((set) => ({
  registerPortal: false,
  loginPortal: false,
  setRegisterPortal: (v) => set({ registerPortal: v }),
  setLoginPortal:    (v) => set({ loginPortal: v }),
}))
