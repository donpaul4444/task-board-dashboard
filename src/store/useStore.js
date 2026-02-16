import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      tasks: [],
      setUser:(user)=>{
        set({user})
      }
    }),
    {
      name: "task-board-storage",
    },
  ),
);
