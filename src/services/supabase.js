
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mfcaqroovsofsidixlxp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mY2Fxcm9vdnNvZnNpZGl4bHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MzkxMjQsImV4cCI6MjAxMDQxNTEyNH0.cc2Xn8Vujukgo20rhMslugPmq6Igk2nPGzzEn9DuyJI'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
