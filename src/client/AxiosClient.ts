//import

import { CustomEvent } from "./CustomEvent";
import axios, { type Axios, type AxiosRequestConfig, type AxiosError, type AxiosResponse } from 'axios';

//interface

namespace AxiosClient {
    /**
     * Request Response
     */
    export interface Response<Return = any> {
        isError: boolean;
        data: Return;
        error?: AxiosError;
    }

    /**
     * Client Request Method
     */
    export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

    /**
     * Client Request Event
     */
    export interface Request {
        method: AxiosClient.Method;
        url: string;
        body?: object;
        config: AxiosRequestConfig;
    }

    /**
     * Client Events
     */
    export interface Event {
        'ready': () => void;
        'request': (data: AxiosClient.Request) => void;
        'error': (data: CustomEvent.Error) => void;
    }
}

//event

declare interface AxiosClient {
    emit<EventName extends keyof AxiosClient.Event>(name: EventName, ...args: Parameters<AxiosClient.Event[EventName]>): void;
    on<EventName extends keyof AxiosClient.Event>(name: EventName, callback: AxiosClient.Event[EventName]): void;
    once<EventName extends keyof AxiosClient.Event>(name: EventName, callback: AxiosClient.Event[EventName]): void;
    off<EventName extends keyof AxiosClient.Event>(name: EventName, callback?: AxiosClient.Event[EventName]): void;
}

//class

class AxiosClient extends CustomEvent {
    public theAxios: Axios;

    /**
     * 
     * @param {AxiosRequestConfig} config Config
     */
    public constructor(config: AxiosRequestConfig = {}) {
        super();

        if (config.timeout && isNaN(config.timeout)) {
            config.timeout = 60000; // 1 minute (60 * 1000)
        }

        this.theAxios = axios.create(config);
        this.emit('ready');
    }

    /**
     * 
     * @param {AxiosError} error Axios Error
     * @returns {AxiosClient.Response}
     */
    private errorHandler(error: AxiosError): AxiosClient.Response<any> {
        //event
        this.emit('error', {
            errorCode: 'ValorantAPI_Request_Error',
            message: error.message,
            data: error,
        });

        //data
        if (error.response && error.response.data) {
            return {
                isError: error.isAxiosError,
                data: error.response.data,
                error: error,
            };
        }

        if (error.response && error.response.status && error.response.statusText) {
            return {
                isError: error.isAxiosError,
                data: {
                    errorCode: error.response.status,
                    message: error.response.statusText,
                },
                error: error,
            };
        }

        return {
            isError: error.isAxiosError,
            data: {
                errorCode: error.name,
                message: error.message,
            },
            error: error,
        };
    }

    /**
    * @param {string} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    public async get(url: string, config: AxiosRequestConfig = {}): Promise<AxiosClient.Response<any>> {
        //setup
        const RequestData: AxiosClient.Request = {
            method: 'get',
            url: url,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request: any = await this.theAxios.get(url, config).catch((error: AxiosError): any => {
            return this.errorHandler(error);

        }).then((response: AxiosResponse) => {
            return response.data;
        });

        //return
        return {
            isError: false,
            data: _request,
        };
    }

    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    public async post(url: string, body: object = {}, config: AxiosRequestConfig = {}): Promise<AxiosClient.Response<any>> {
        //setup
        const RequestData: AxiosClient.Request = {
            method: 'post',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request: any = await this.theAxios.post(url, body, config).catch((error: AxiosError): any => {
            return this.errorHandler(error);

        }).then((response: AxiosResponse) => {
            return response.data;
        });

        //return
        return {
            isError: false,
            data: _request,
        };
    }

    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    public async put(url: string, body: object = {}, config: AxiosRequestConfig = {}): Promise<AxiosClient.Response<any>> {
        //setup
        const RequestData: AxiosClient.Request = {
            method: 'put',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request: any = await this.theAxios.put(url, body, config).catch((error: AxiosError): any => {
            return this.errorHandler(error);

        }).then((response: AxiosResponse) => {
            return response.data;
        });

        //return
        return {
            isError: false,
            data: _request,
        };
    }

    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    public async patch(url: string, body: object = {}, config: AxiosRequestConfig = {}): Promise<AxiosClient.Response<any>> {
        //setup
        const RequestData: AxiosClient.Request = {
            method: 'patch',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request: any = await this.theAxios.patch(url, body, config).catch((error: AxiosError): any => {
            return this.errorHandler(error);

        }).then((response: AxiosResponse) => {
            return response.data;
        });

        //return
        return {
            isError: false,
            data: _request,
        };
    }

    /**
    * @param {string} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    public async delete(url: string, config: AxiosRequestConfig = {}): Promise<AxiosClient.Response<any>> {
        //setup
        const RequestData: AxiosClient.Request = {
            method: 'delete',
            url: url,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request: any = await this.theAxios.post(url, config).catch((error: AxiosError): any => {
            return this.errorHandler(error);

        }).then((response: AxiosResponse) => {
            return response.data;
        });

        //return
        return {
            isError: false,
            data: _request,
        };
    }
}

//export

export { AxiosClient };