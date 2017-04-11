"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const AttachmentsNullClientV1_1 = require("../version1/AttachmentsNullClientV1");
const AttachmentsDirectClientV1_1 = require("../version1/AttachmentsDirectClientV1");
const AttachmentsHttpClientV1_1 = require("../version1/AttachmentsHttpClientV1");
const AttachmentsSenecaClientV1_1 = require("../version1/AttachmentsSenecaClientV1");
class AttachmentsFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(AttachmentsFactory.NullClientV1Descriptor, AttachmentsNullClientV1_1.AttachmentsNullClientV1);
        this.registerAsType(AttachmentsFactory.DirectClientV1Descriptor, AttachmentsDirectClientV1_1.AttachmentsDirectClientV1);
        this.registerAsType(AttachmentsFactory.HttpClientV1Descriptor, AttachmentsHttpClientV1_1.AttachmentsHttpClientV1);
        this.registerAsType(AttachmentsFactory.SenecaClientV1Descriptor, AttachmentsSenecaClientV1_1.AttachmentsSenecaClientV1);
    }
}
AttachmentsFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-attachments', 'factory', 'default', 'default', '1.0');
AttachmentsFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-attachments', 'client', 'null', 'default', '1.0');
AttachmentsFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-attachments', 'client', 'direct', 'default', '1.0');
AttachmentsFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-attachments', 'client', 'http', 'default', '1.0');
AttachmentsFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-attachments', 'client', 'seneca', 'default', '1.0');
exports.AttachmentsFactory = AttachmentsFactory;
//# sourceMappingURL=AttachmentsFactory.js.map