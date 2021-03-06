"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class AttachmentsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/attachments');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getAttachmentById(correlationId, id, callback) {
        this.callCommand('get_attachment_by_id', correlationId, {
            id: id
        }, callback);
    }
    addAttachments(correlationId, reference, ids, callback) {
        this.callCommand('add_attachments', correlationId, {
            reference: reference,
            ids: ids
        }, callback);
    }
    updateAttachments(correlationId, reference, oldIds, newIds, callback) {
        this.callCommand('update_attachments', correlationId, {
            reference: reference,
            old_ids: oldIds,
            new_ids: newIds
        }, callback);
    }
    removeAttachments(correlationId, reference, ids, callback) {
        this.callCommand('remove_attachments', correlationId, {
            reference: reference,
            ids: ids
        }, callback);
    }
    deleteAttachmentById(correlationId, id, callback) {
        this.callCommand('delete_attachment_by_id', correlationId, {
            id: id
        }, callback);
    }
}
exports.AttachmentsHttpClientV1 = AttachmentsHttpClientV1;
//# sourceMappingURL=AttachmentsHttpClientV1.js.map