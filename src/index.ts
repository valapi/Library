// import //

import HTTP_Response from "./HTTP_Response";

//client
import { AxiosClient, type ValorantApiRequestResponse, type ValorantApiRequestMethod, type ValorantApiRequestData, type ValorantApiRequestEvent } from "./client/AxiosClient";
import { CustomEvent, type ValorantApiError, type ValorantCustomEventFunction } from "./client/CustomEvent";
import { ValRegion, type ValorantApiRegion } from "./client/ValRegion";

//resources
import ItemTypeId from "./resources/ItemTypeId";
import Locale from "./resources/Locale";
import QueueId from "./resources/QueueId";
import Region from "./resources/Region";

//utils
import { toUft8, fromUft8 } from "./utils/Uft8";

// export //

export {
    HTTP_Response as ValHttpResponse,

    //client
    AxiosClient as ValRequestClient, type ValorantApiRequestResponse, type ValorantApiRequestMethod, type ValorantApiRequestData, type ValorantApiRequestEvent,
    CustomEvent as ValEvent, type ValorantApiError, type ValorantCustomEventFunction,
    ValRegion, type ValorantApiRegion,

    //resources
    ItemTypeId,
    Locale,
    QueueId,
    Region,

    //utils
    toUft8, fromUft8
};