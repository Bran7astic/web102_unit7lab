import { createClient } from '@supabase/supabase-js'

const URL = "https://pshgwamrlkoofcpnlptm.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzaGd3YW1ybGtvb2ZjcG5scHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTI4NTksImV4cCI6MjA2ODg4ODg1OX0.OENoJ3iPAsbKCjuUzrjcVzorgD6Yl_pOpKbboLCTh8s"

export const supabase = createClient(URL, API_KEY)