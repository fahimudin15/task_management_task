import { create } from "zustand"
import { createClient } from "@/utils/supabase/client"

export type TaskStatus = "todo" | "in-progress" | "done"
export type TaskPriority = "low" | "medium" | "high"

export interface Task {
  id: string
  title: string
  description: string | null
  status: TaskStatus
  priority: TaskPriority
  created_at: string
}

interface TaskState {
  tasks: Task[]
  isLoading: boolean
  error: string | null
  fetchTasks: () => Promise<void>
  addTask: (task: Omit<Task, "id" | "created_at" | "user_id">) => Promise<void>
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  fetchTasks: async () => {
    set({ isLoading: true, error: null })
    const supabase = createClient()
    try {
      const { data, error } = await supabase.from("tasks").select("*").order("created_at", { ascending: false })

      if (error) throw error
      set({ tasks: data as Task[] })
    } catch (error: any) {
      set({ error: error.message })
    } finally {
      set({ isLoading: false })
    }
  },

  addTask: async (newTask) => {
    const supabase = createClient()
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("User not authenticated")

      const { data, error } = await supabase
        .from("tasks")
        .insert([{ ...newTask, user_id: user.id }])
        .select()
        .single()

      if (error) throw error
      set((state) => ({ tasks: [data as Task, ...state.tasks] }))
    } catch (error: any) {
      set({ error: error.message })
      throw error
    }
  },

  updateTask: async (id, updates) => {
    const supabase = createClient()
    try {
      const { error } = await supabase.from("tasks").update(updates).eq("id", id)

      if (error) throw error
      set((state) => ({
        tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...updates } : task)),
      }))
    } catch (error: any) {
      set({ error: error.message })
      throw error
    }
  },

  deleteTask: async (id) => {
    const supabase = createClient()
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", id)

      if (error) throw error
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }))
    } catch (error: any) {
      set({ error: error.message })
      throw error
    }
  },
}))
