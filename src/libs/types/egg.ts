// Chicken의 Instance에 해당
export interface EggInterface {
  id: number;
  created_at: string;
  chicken_id: number;
  user_id: string;
  start_at: string | null;
  end_at: string | null;
  is_percentage: boolean;
  progress: number; // 0-10
}
