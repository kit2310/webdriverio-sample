declare namespace WebdriverIO {
    export interface Browser {
        waitAndClick(el: WebdriverIO.Element): void;
        waitAndType(el: WebdriverIO.Element, text: string): void;
    }   
}