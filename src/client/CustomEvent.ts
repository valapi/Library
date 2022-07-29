//interface

namespace CustomEvent {
    /**
     * Error Event
     */
    export interface Error {
        errorCode: string;
        message: string;
        data: any;
    }

    /**
     * Call Back Function
     */
    export type Function = (args: any) => any;
}

//class

class CustomEvent {
    private EventController: {
        //key:value
        [key: string]: Array<CustomEvent.Function>;
    };

    protected constructor() {
        this.EventController = {};
    }

    /**
     * 
     * @param {string} name Name
     * @param {any} args Data
     */
    public emit(name: string, ...args: Array<any>): void {
        if (this.EventController[name]) {
            this.EventController[name].forEach((callback: CustomEvent.Function) => {
                callback(args);
            });
        }
    }

    /**
     * 
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    public off(name: string, callback?: (CustomEvent.Function)): void {
        if (this.EventController[name]) {
            if (callback) {
                this.EventController[name] = this.EventController[name].filter((cb: CustomEvent.Function) => {
                    return cb !== callback;
                });
            } else {
                delete this.EventController[name];
            }
        }
    }

    /**
     * 
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    public on(name: string, callback: CustomEvent.Function): void {
        if (!this.EventController[name]) {
            this.EventController[name] = [];
        }

        this.EventController[name].push(callback);
    }

    /**
     * Beta
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    public once(name: string, callback: CustomEvent.Function): void {
        const self = this as this;
        const onceCallback = function (...args: Array<any>) {
            callback(args);
            self.off(name, onceCallback);
        };

        this.on(name, onceCallback);
    }

}

//export

export { CustomEvent };