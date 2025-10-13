// store/categoryStore.ts
import { create } from "zustand";
import { CategorySchema } from "@/utils/types";

type CategoryState = {
  data: CategorySchema[];
  selected: string; // category slug
};

type CategoryActions = {
  setCategory: (slug: string) => void;
  setData: (data: CategorySchema[]) => void;
};

type CategoryStore = CategoryState & CategoryActions;

const useCategoryState = create<CategoryStore>((set) => ({
  data: [{ id: 0, name: "All", slug: "all" }],
  selected: "all",
  setData: (data) => set({ data }),
  setCategory: (slug) => set({ selected: slug }),
}));

export default useCategoryState;
