import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      tasks: [],
      setUser: (user) => {
        set({ user });
      },
      logout: () => set({ user: null }),
      setTasks: (tasks) => set({ tasks }),
      toggleTaskStatus: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id !== id) return task;
            let newStatus;
            if (task.status === "todo") newStatus = "inprogress";
            else if (task.status === "inprogress") newStatus = "completed";
            else newStatus = "todo";

            return { ...task, status: newStatus };
          }),
        })),
    }),
    {
      name: "task-board-storage",
    },
  ),
);
