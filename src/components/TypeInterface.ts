export interface Post {
    id: Number | null,
    author: Author | null,
    title: string | null,
    content: string | null,
    date: string | null,
    tags: string[] | null,
}

export interface Author {
    id: Number | null
    name: string | null,
    avatar: string | null
}