interface ValorantApiError {
    errorCode: string;
    message: string;
    data: any;
}
declare type ValorantCustomEventFunction = (args: any) => any;
declare class CustomEvent {
    protected EventController: {
        [key: string]: Array<ValorantCustomEventFunction>;
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
    off(name: string, callback?: (ValorantCustomEventFunction)): void;
    /**
     *
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    on(name: string, callback: ValorantCustomEventFunction): void;
    /**
     * Beta
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    once(name: string, callback: ValorantCustomEventFunction): void;
}
export { CustomEvent };
export type { ValorantApiError, ValorantCustomEventFunction };
