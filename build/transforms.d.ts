export declare type transforms = {
    [key: string]: any;
    delimiter(): string;
    header(block: block): string;
    paragraph(block: block): string;
    list(block: block): string;
    image(block: block): string;
    quote(block: block): string;
    code(block: block): string;
    embed(block: block): string;
};
export declare type block = {
    type: string;
    data: {
        text?: string;
        level?: number;
        caption?: string;
        file?: {
            url?: string;
        };
        stretched?: boolean;
        withBackground?: boolean;
        withBorder?: boolean;
        items?: string[];
        style?: string;
        code?: string;
        service?: "vimeo" | "youtube";
        source?: string;
        embed?: string;
        width?: number;
        height?: number;
    };
};
declare const transforms: transforms;
export default transforms;
