import { CustomEvent, type ValorantApiError } from "./CustomEvent";
import { type Axios, type AxiosRequestConfig, type AxiosError } from 'axios';
interface ValorantApiRequestResponse<ValorantApiRequestReturn = any> {
    isError: boolean;
    data: ValorantApiRequestReturn;
    error?: AxiosError;
}
declare type ValorantApiRequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
interface ValorantApiRequestData {
    method: ValorantApiRequestMethod;
    url: string;
    body?: Object;
    config: AxiosRequestConfig;
}
declare class AxiosClient extends CustomEvent {
    theAxios: Axios;
    /**
     * Class Constructor
     * @param {AxiosRequestConfig} config Config
     */
    constructor(config?: AxiosRequestConfig);
    /**
     *
     * @param {AxiosError} error Axios Error
     * @returns {ValorantApiRequestResponse}
     */
    private errorHandler;
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
    get(url: string, config?: AxiosRequestConfig): Promise<ValorantApiRequestResponse<any>>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
    post(url: string, body?: object, config?: AxiosRequestConfig): Promise<ValorantApiRequestResponse<any>>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
    put(url: string, body?: object, config?: AxiosRequestConfig): Promise<ValorantApiRequestResponse<any>>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
    patch(url: string, body?: object, config?: AxiosRequestConfig): Promise<ValorantApiRequestResponse<any>>;
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
    delete(url: string, config?: AxiosRequestConfig): Promise<ValorantApiRequestResponse<any>>;
}
interface ValorantApiRequestEvent {
    'ready': () => void;
    'request': (data: ValorantApiRequestData) => void;
    'error': (data: ValorantApiError) => void;
}
declare interface AxiosClient {
    emit<EventName extends keyof ValorantApiRequestEvent>(name: EventName, ...args: Parameters<ValorantApiRequestEvent[EventName]>): void;
    on<EventName extends keyof ValorantApiRequestEvent>(name: EventName, callback: ValorantApiRequestEvent[EventName]): void;
    once<EventName extends keyof ValorantApiRequestEvent>(name: EventName, callback: ValorantApiRequestEvent[EventName]): void;
    off<EventName extends keyof ValorantApiRequestEvent>(name: EventName, callback?: ValorantApiRequestEvent[EventName]): void;
}
export { AxiosClient };
export type { ValorantApiRequestResponse, ValorantApiRequestMethod, ValorantApiRequestData, ValorantApiRequestEvent };
//# sourceMappingURL=AxiosClient.d.ts.map