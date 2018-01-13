export interface iProtonWidget {

    Container: Element;
    Name: string;

    preRender(): Promise<void>;
    whileRender(): Promise<void>;
    render(): Promise<void>;
    postRender(): Promise<void>;
}