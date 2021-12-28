export interface Post {
    id: number;
    title: string;
    content: string;
    publishedAt: any;
}

export interface PostJsonResponse {
   data: Post[];
}