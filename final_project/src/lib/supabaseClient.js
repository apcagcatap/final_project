import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://cdkxqyvomuwofwgpzncw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNka3hxeXZvbXV3b2Z3Z3B6bmN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjQ0NDMsImV4cCI6MjA1Njc0MDQ0M30.tt8wy7LrkWTYSHXdmOdXNh92dBT0-t-tir7_DGbb54U')