"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_aws_node_1 = require("pip-services-aws-node");
class AttachmentsLambdaClientV1 extends pip_services_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('attachments');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
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
exports.AttachmentsLambdaClientV1 = AttachmentsLambdaClientV1;
//# sourceMappingURL=AttachmentsLambdaClientV1.js.map