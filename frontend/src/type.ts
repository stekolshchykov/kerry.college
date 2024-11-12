export interface UserI {
    id: number;
    documentId: string;
    username: string;
    name: string;
    lastName: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isTeacher: boolean | null;
    isStudent: boolean;
    isVolunteer: boolean;
    isAuthor: boolean;
    avatar: AvatarI[];
    articles: ArticleI[];
    news: NewsItemI[];
}

export interface AvatarI {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: AvatarFormatsI;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface AvatarFormatsI {
    thumbnail: ThumbnailFormatI;
}

export interface ThumbnailFormatI {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface ArticleI {
    id: number;
    documentId: string;
    title: string;
    text: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
}

export interface NewsItemI {
}
