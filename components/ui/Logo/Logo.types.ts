type LogoNames = "full" | "logo" | "text";

export interface LogoSvgOwnProps {
    size: number;
}

export interface LogoOwnProps {
    name?: LogoNames;
    size?: number;
}