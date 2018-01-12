export interface iWidget {

    Container: Element;

    preRender(): Promise<void>;
    render(): Promise<void>;
    postRender(): Promise<void>;
}