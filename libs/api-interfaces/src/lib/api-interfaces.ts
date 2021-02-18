export interface Message {
  message: string;
}


export interface Article {
  id: string;
  title: string;
  annotation: string;
  created_at: string;
  category_id: string;
  category_title?: string;
  tags: {
    name: string;
  }[];
  is_published: boolean;
}

export interface Category {
  id: string;
  title: string;
}
