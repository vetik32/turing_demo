export interface Tweet {
  created_at: string;
  id_str: string;
  favorite_count: number;
  retweet_count: number;
  text: string;
  user: User;
}

export interface User {
  profile_image_url: string;
  screen_name: string;
}
