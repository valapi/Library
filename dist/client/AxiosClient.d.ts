import { CustomEvent } from "./CustomEvent";
import { type Axios, type AxiosRequestConfig, type AxiosError } from 'axios';
declare namespace AxiosClient {
    interface Response<Return = any> {
        isError: boolean;
        data: Return;
        error?: AxiosError;
    }
    type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';
    interface Request {
        method: AxiosClient.Method;
        url: string;
        body?: object;
        config: AxiosRequestConfig;
    }
    interface Event {
        'ready': () => void;
        'request': (data: AxiosClient.Request) => void;
        'error': (data: CustomEvent.Error) => void;
    }
}
declare interface AxiosClient {
    emit<EventName extends keyof AxiosClient.Event>(name: EventName, ...args: Parameters<AxiosClient.Event[EventName]>): void;
    on<EventName extends keyof AxiosClient.Event>(name: EventName, callback: AxiosClient.Event[EventName]): void;
    once<EventName extends keyof AxiosClient.Event>(name: EventName, callback: AxiosClient.Event[EventName]): void;
    off<EventName extends keyof AxiosClient.Event>(name: EventName, callback?: AxiosClient.Event[EventName]): void;
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
     * @returns {AxiosClient.Response}
     */
    private errorHandler;
    /**
    * @param {string} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    get(url: string, config?: AxiosRequestConfig): Promise<AxiosClient.Response<any>>;
    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    post(url: string, body?: object, config?: AxiosRequestConfig): Promise<AxiosClient.Response<any>>;
    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    put(url: string, body?: object, config?: AxiosRequestConfig): Promise<AxiosClient.Response<any>>;
    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    patch(url: string, body?: object, config?: AxiosRequestConfig): Promise<AxiosClient.Response<any>>;
    /**
    * @param {string} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    delete(url: string, config?: AxiosRequestConfig): Promise<AxiosClient.Response<any>>;
}
export { AxiosClient };
