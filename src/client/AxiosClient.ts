//import
import { CustomEvent, type ValorantApiError } from "./CustomEvent";
import axios, { type Axios, type AxiosRequestConfig, type AxiosError, type AxiosResponse } from 'axios';

//interface
interface ValorantApiRequestResponse<ValorantApiRequestReturn = any> {
    isError: boolean;
    data: ValorantApiRequestReturn;
    error?: AxiosError;
}

type ValorantApiRequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' ;

interface ValorantApiRequestData {
    method: ValorantApiRequestMethod;
    url: string;
    body?: Object;
    config: AxiosRequestConfig;
}

//class

class AxiosClient extends CustomEvent {
    public theAxios: Axios;

    /**
     * Class Constructor
     * @param {AxiosRequestConfig} config Config
     */
    public constructor(config: AxiosRequestConfig = {}) {
        super();

        if(config.timeout && isNaN(config.timeout)){
            config.timeout = 60000; // 1 minute (60 * 1000)
        }

        this.theAxios = axios.create(config);
        this.emit('ready');
    }

    /**
     * 
     * @param {AxiosError} error Axios Error
     * @returns {ValorantApiRequestResponse}
     */
     private errorHandler(error:AxiosError):ValorantApiRequestResponse<any> {
        //event
        this.emit('error', {
            errorCode: 'ValorantAPI_Request_Error',
            message: error.message,
            data: error,
        })

        //data
        if(error.response && error.response.data){
            return {
                isError: error.isAxiosError,
                data: error.response.data,
                error: error,
            }
        }

        if(error.response && error.response.status && error.response.statusText){
            return {
                isError: error.isAxiosError,
                data: {
                    errorCode: error.response.status,
                    message: error.response.statusText,
                },
                error: error,
            }
        }

        return {
            isError: error.isAxiosError,
            data: {
                errorCode: error.name,
                message: error.message,
            },
            error: error,
        }
     }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
     public async get(url:string, config:AxiosRequestConfig = {}):Promise<ValorantApiRequestResponse<any>> {
        //setup
        let _error = false;

        const RequestData:ValorantApiRequestData = {
            method: 'get',
            url: url,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.theAxios.get(url, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:AxiosResponse) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
     public async post(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<ValorantApiRequestResponse<any>> {
        //setup
        let _error = false;

        const RequestData:ValorantApiRequestData = {
            method: 'post',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.theAxios.post(url, body, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:AxiosResponse) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
     public async put(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<ValorantApiRequestResponse<any>> {
        //setup
        let _error = false;

        const RequestData:ValorantApiRequestData = {
            method: 'put',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.theAxios.put(url, body, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:AxiosResponse) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
     public async patch(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<ValorantApiRequestResponse<any>> {
        //setup
        let _error = false;

        const RequestData:ValorantApiRequestData = {
            method: 'patch',
            url: url,
            body: body,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.theAxios.patch(url, body, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:AxiosResponse) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<ValorantApiRequestResponse>}
    */
     public async delete(url:string, config:AxiosRequestConfig = {}):Promise<ValorantApiRequestResponse<any>> {
        //setup
        let _error = false;

        const RequestData:ValorantApiRequestData = {
            method: 'delete',
            url: url,
            config: config,
        };
        this.emit('request', RequestData);

        //request
        const _request:any = await this.theAxios.post(url, config).catch((error:AxiosError):any => {
            return this.errorHandler(error);
            
        }).then((response:AxiosResponse) => {
            if(_error){
                return response;
            } else {
                return response.data;
            }
        });

        //return
        return {
            isError: _error,
            data: _request,
        };
    }
}

//event

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

//export
export { AxiosClient };
export type { ValorantApiRequestResponse, ValorantApiRequestMethod, ValorantApiRequestData, ValorantApiRequestEvent };