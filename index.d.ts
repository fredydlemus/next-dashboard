type Person = {
    name: string;
    title?: string;
    department?: string;
    role?: string;
    email: string;
    imageUrl: string;
}

type Navigation = {
    name: string;
    href: string;
    current?: boolean;
}