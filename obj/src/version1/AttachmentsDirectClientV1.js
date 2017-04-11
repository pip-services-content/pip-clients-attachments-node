"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class AttachmentsDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-attachments", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getAttachmentById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'attachments.get_attachment_by_id');
        this._controller.getAttachmentById(correlationId, id, (err, attachment) => {
            timing.endTiming();
            callback(err, attachment);
        });
    }
    addAttachments(correlationId, reference, ids, callback) {
        let timing = this.instrument(correlationId, 'attachments.add_attachments');
        this._controller.addAttachments(correlationId, reference, ids, (err, attachments) => {
            timing.endTiming();
            callback(err, attachments);
        });
    }
    updateAttachments(correlationId, reference, oldIds, newIds, callback) {
        let timing = this.instrument(correlationId, 'attachments.update_attachments');
        this._controller.updateAttachments(correlationId, reference, oldIds, newIds, (err, attachments) => {
            timing.endTiming();
            callback(err, attachments);
        });
    }
    removeAttachments(correlationId, reference, ids, callback) {
        let timing = this.instrument(correlationId, 'attachments.remove_attachments');
        this._controller.removeAttachments(correlationId, reference, ids, (err, attachment) => {
            timing.endTiming();
            callback(err, attachment);
        });
    }
    deleteAttachmentById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'attachments.delete_attachment_by_id');
        this._controller.deleteAttachmentById(correlationId, id, (err, attachment) => {
            timing.endTiming();
            callback(err, attachment);
        });
    }
}
exports.AttachmentsDirectClientV1 = AttachmentsDirectClientV1;
//# sourceMappingURL=AttachmentsDirectClientV1.js.map