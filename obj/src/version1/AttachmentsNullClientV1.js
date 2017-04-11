"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttachmentsNullClientV1 {
    constructor(config) { }
    getAttachmentById(correlationId, id, callback) {
        callback(null, null);
    }
    addAttachments(correlationId, reference, ids, callback) {
        if (callback)
            callback(null, []);
    }
    updateAttachments(correlationId, reference, oldIds, newIds, callback) {
        if (callback)
            callback(null, []);
    }
    removeAttachments(correlationId, reference, ids, callback) {
        if (callback)
            callback(null, []);
    }
    deleteAttachmentById(correlationId, id, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.AttachmentsNullClientV1 = AttachmentsNullClientV1;
//# sourceMappingURL=AttachmentsNullClientV1.js.map