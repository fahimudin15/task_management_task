"use client"

import { useEffect } from "react"
import { useTaskStore } from "@/store/use-task-store"
import { TaskCard } from "@/components/task-card"
import { CreateTaskModal } from "@/components/create-task-modal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"

export function TaskDashboard() {
  const { tasks, fetchTasks, isLoading } = useTaskStore()

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  if (isLoading && tasks.length === 0) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  const todoTasks = tasks.filter((t) => t.status === "todo")
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress")
  const doneTasks = tasks.filter((t) => t.status === "done")

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 p-8 text-primary-foreground shadow-lg">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
            <p className="text-primary-foreground/90">Manage your daily tasks and projects with ease.</p>
          </div>
          <CreateTaskModal />
        </div>
      </div>

      <Tabs defaultValue="board" className="space-y-4">
        <TabsList>
          <TabsTrigger value="board">Board View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="board" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 shadow-sm">
                <h3 className="font-semibold text-lg">📋 To Do</h3>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">{todoTasks.length}</span>
              </div>
              <div className="space-y-3">
                {todoTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 shadow-sm">
                <h3 className="font-semibold text-lg">⚡ In Progress</h3>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-sm font-medium text-amber-700 dark:text-amber-300">{inProgressTasks.length}</span>
              </div>
              <div className="space-y-3">
                {inProgressTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 shadow-sm">
                <h3 className="font-semibold text-lg">✅ Done</h3>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-300">{doneTasks.length}</span>
              </div>
              <div className="space-y-3">
                {doneTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="list">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
