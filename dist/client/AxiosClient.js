"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClient = void 0;
const tslib_1 = require("tslib");
const CustomEvent_1 = require("./CustomEvent");
const axios_1 = tslib_1.__importDefault(require("axios"));
//class
class AxiosClient extends CustomEvent_1.CustomEvent {
    /**
     *
     * @param {AxiosRequestConfig} config Config
     */
    constructor(config = {}) {
        super();
        if (config.timeout && isNaN(config.timeout)) {
            config.timeout = 60000; // 1 minute (60 * 1000)
        }
        this.theAxios = axios_1.default.create(config);
        this.emit('ready');
    }
    /**
     *
     * @param {AxiosError} error Axios Error
     * @returns {AxiosClient.Response}
     */
    errorHandler(error) {
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
    get(url, config = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //setup
            const RequestData = {
                method: 'get',
                url: url,
                config: config,
            };
            this.emit('request', RequestData);
            //request
            const _request = yield this.theAxios.get(url, config).catch((error) => {
                return this.errorHandler(error);
            }).then((response) => {
                return response.data;
            });
            //return
            return {
                isError: false,
                data: _request,
            };
        });
    }
    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    post(url, body = {}, config = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //setup
            const RequestData = {
                method: 'post',
                url: url,
                body: body,
                config: config,
            };
            this.emit('request', RequestData);
            //request
            const _request = yield this.theAxios.post(url, body, config).catch((error) => {
                return this.errorHandler(error);
            }).then((response) => {
                return response.data;
            });
            //return
            return {
                isError: false,
                data: _request,
            };
        });
    }
    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    put(url, body = {}, config = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //setup
            const RequestData = {
                method: 'put',
                url: url,
                body: body,
                config: config,
            };
            this.emit('request', RequestData);
            //request
            const _request = yield this.theAxios.put(url, body, config).catch((error) => {
                return this.errorHandler(error);
            }).then((response) => {
                return response.data;
            });
            //return
            return {
                isError: false,
                data: _request,
            };
        });
    }
    /**
    * @param {string} url URL
    * @param {object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    patch(url, body = {}, config = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //setup
            const RequestData = {
                method: 'patch',
                url: url,
                body: body,
                config: config,
            };
            this.emit('request', RequestData);
            //request
            const _request = yield this.theAxios.patch(url, body, config).catch((error) => {
                return this.errorHandler(error);
            }).then((response) => {
                return response.data;
            });
            //return
            return {
                isError: false,
                data: _request,
            };
        });
    }
    /**
    * @param {string} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<AxiosClient.Response>}
    */
    delete(url, config = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //setup
            const RequestData = {
                method: 'delete',
                url: url,
                config: config,
            };
            this.emit('request', RequestData);
            //request
            const _request = yield this.theAxios.post(url, config).catch((error) => {
                return this.errorHandler(error);
            }).then((response) => {
                return response.data;
            });
            //return
            return {
                isError: false,
                data: _request,
            };
        });
    }
}
exports.AxiosClient = AxiosClient;
