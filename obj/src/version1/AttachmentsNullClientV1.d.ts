import { ReferenceV1 } from './ReferenceV1';
import { AttachmentV1 } from './AttachmentV1';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';
export declare class AttachmentsNullClientV1 implements IAttachmentsClientV1 {
    constructor(config?: any);
    getAttachmentById(correlationId: string, id: string, callback: (err: any, attachments: AttachmentV1) => void): void;
    addAttachments(correlationId: string, reference: ReferenceV1, ids: string[], callback?: (err: any, attachments: AttachmentV1[]) => void): void;
    updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[], callback?: (err: any, attachments: AttachmentV1[]) => void): void;
    removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[], callback?: (err: any, attachments: AttachmentV1[]) => void): void;
    deleteAttachmentById(correlationId: string, id: string, callback?: (err: any, attachments: AttachmentV1) => void): void;
}
