export interface CardProps{
    title: string;
    content: string;
}

export interface  ButtonPros {
    label: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onclick?: () => void;
    className?: string;
} 