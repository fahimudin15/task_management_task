"use client"

import { useState } from "react"
import { type Task, useTaskStore } from "@/store/use-task-store"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2 } from "lucide-react"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const { updateTask, deleteTask } = useTaskStore()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdating(true)
    await updateTask(task.id, { status: newStatus as any })
    setIsUpdating(false)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/15 text-red-700 dark:bg-red-500/20 dark:text-red-400 border-red-500/30"
      case "medium":
        return "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border-amber-500/30"
      case "low":
        return "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500/30"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="group w-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <CardTitle className="text-base font-semibold line-clamp-1 group-hover:text-primary transition-colors">{task.title}</CardTitle>
        <Badge variant="secondary" className={`${getPriorityColor(task.priority)} font-medium`}>
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground min-h-[2.5rem] line-clamp-2">
          {task.description || "No description"}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <Select defaultValue={task.status} onValueChange={handleStatusChange} disabled={isUpdating}>
          <SelectTrigger className="w-[120px] h-9 text-sm font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">📋 To Do</SelectItem>
            <SelectItem value="in-progress">⚡ In Progress</SelectItem>
            <SelectItem value="done">✅ Done</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          onClick={() => deleteTask(task.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
