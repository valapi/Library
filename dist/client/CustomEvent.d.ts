declare namespace CustomEvent {
    interface Error {
        errorCode: string;
        message: string;
        data: any;
    }
    type Function = (args: any) => any;
}
declare class CustomEvent {
    protected EventController: {
        [key: string]: Array<CustomEvent.Function>;
    };
    /**
     * Class Constructor
     */
    constructor();
    /**
     *
     * @param {string} name Name
     * @param {any} args Data
     */
    emit(name: string, ...args: Array<any>): void;
    /**
     *
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    off(name: string, callback?: (CustomEvent.Function)): void;
    /**
     *
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    on(name: string, callback: CustomEvent.Function): void;
    /**
     * Beta
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    once(name: string, callback: CustomEvent.Function): void;
}
export { CustomEvent };
