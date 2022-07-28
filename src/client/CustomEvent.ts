//interface

interface ValorantApiError {
    errorCode: string;
    message: string;
    data: any;
}

type ValorantCustomEventFunction = (args: any) => any;

//class

class CustomEvent {
    protected EventController: {
        //key:value
        [key: string]: Array<ValorantCustomEventFunction>;
    };

    /**
     * Class Constructor
     */
    public constructor() {
        this.EventController = {};
    }

    /**
     * 
     * @param {string} name Name
     * @param {any} args Data
     */
    public emit(name: string, ...args: Array<any>): void {
        if (this.EventController[name]) {
            this.EventController[name].forEach((callback: ValorantCustomEventFunction) => {
                callback(args);
            });
        }
    }

    /**
     * 
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     */
    public off(name: string, callback?: (ValorantCustomEventFunction)): void {
        if (this.EventController[name]) {
            if (callback) {
                this.EventController[name] = this.EventController[name].filter((cb: ValorantCustomEventFunction) => {
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
    public on(name: string, callback: ValorantCustomEventFunction): void {
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
    public once(name: string, callback: ValorantCustomEventFunction): void {
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
export type { ValorantApiError, ValorantCustomEventFunction };