interface ValorantApiError {
    errorCode: string;
    message: string;
    data: any;
}
declare class CustomEvent {
    protected EventController: {
        [key: string]: Array<Function>;
    };
    /**
     * Class Constructor
     */
    constructor();
    /**
     *
     * @param {String} name Name
     * @param {any} args Data
     */
    emit(name: string, ...args: Array<any>): void;
    /**
     *
     * @param {String} name Name
     * @param {Function} callback Call Back Function
     */
    off(name: string, callback?: Function): void;
    /**
     *
     * @param {String} name Name
     * @param {Function} callback Call Back Function
     */
    on(name: string, callback: Function): void;
    /**
     * Beta
     * @param {String} name Name
     * @param {Function} callback Call Back Function
     */
    once(name: string, callback: Function): void;
}
export { CustomEvent };
export type { ValorantApiError };
