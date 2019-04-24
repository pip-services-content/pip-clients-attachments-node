"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const AttachmentsNullClientV1_1 = require("../version1/AttachmentsNullClientV1");
const AttachmentsDirectClientV1_1 = require("../version1/AttachmentsDirectClientV1");
const AttachmentsHttpClientV1_1 = require("../version1/AttachmentsHttpClientV1");
class AttachmentsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(AttachmentsClientFactory.NullClientV1Descriptor, AttachmentsNullClientV1_1.AttachmentsNullClientV1);
        this.registerAsType(AttachmentsClientFactory.DirectClientV1Descriptor, AttachmentsDirectClientV1_1.AttachmentsDirectClientV1);
        this.registerAsType(AttachmentsClientFactory.HttpClientV1Descriptor, AttachmentsHttpClientV1_1.AttachmentsHttpClientV1);
    }
}
AttachmentsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-attachments', 'factory', 'default', 'default', '1.0');
AttachmentsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-attachments', 'client', 'null', 'default', '1.0');
AttachmentsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-attachments', 'client', 'direct', 'default', '1.0');
AttachmentsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-attachments', 'client', 'http', 'default', '1.0');
exports.AttachmentsClientFactory = AttachmentsClientFactory;
//# sourceMappingURL=AttachmentsClientFactory.js.map