import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are missing. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    )
  }

  // Validate URL format to prevent crash
  let validSupabaseUrl = supabaseUrl
  try {
    new URL(supabaseUrl!)
  } catch (e) {
    console.warn(`Invalid Supabase URL provided: ${supabaseUrl}. Using fallback to prevent crash.`)
    validSupabaseUrl = "https://example.com"
  }

  return createBrowserClient(validSupabaseUrl!, supabaseKey!)
}
