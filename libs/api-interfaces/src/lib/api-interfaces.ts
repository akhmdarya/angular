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
}

export interface Category {
  id: string;
  title: string;

}