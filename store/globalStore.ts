import { AssetType, ChainType } from '@/utils/types'
import { create } from 'zustand'

type Store = {
  registerPortal: boolean
  loginPortal: boolean
  selectedCountry: "USA" | "CHINA" | "UAE" | "ALL"
  selectedChain: ChainType | "ALL"
  selectedAsset: AssetType | "ALL"
  setRegisterPortal: (v: boolean) => void
  setLoginPortal: (v: boolean) => void
  selectCountry: (c: "USA" | "CHINA" | "UAE" | "ALL") => void
  selectChain: (c: ChainType | "ALL") => void
  setSelectedAsset: (a: AssetType | "ALL") => void
}

export const useGlobalStore = create<Store>()((set) => ({
  registerPortal: false,
  loginPortal: false,
  selectedCountry: "UAE",
  selectedChain: "ALL",
  selectedAsset: "ALL",

  setRegisterPortal: (v) => set({ registerPortal: v }),
  setLoginPortal:    (v) => set({ loginPortal: v }),
  selectCountry:     (c) => set({ selectedCountry: c }),
  selectChain:       (c) => set({ selectedChain: c }),
  setSelectedAsset:  (a) => set({ selectedAsset: a }),
}))
