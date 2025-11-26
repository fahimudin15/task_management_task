import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { TaskDashboard } from "@/components/task-dashboard"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 p-1">
            <div className="h-full w-full rounded-full bg-primary" />
          </div>
          <span className="font-semibold">TaskMaster</span>
        </div>
        <form action="/auth/signout" method="post">
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground">Sign out</button>
        </form>
      </div>
      <TaskDashboard />
    </div>
  )
}
