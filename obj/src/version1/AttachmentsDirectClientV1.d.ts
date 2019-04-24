import { DirectClient } from 'pip-services3-rpc-node';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';
import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';
export declare class AttachmentsDirectClientV1 extends DirectClient<any> implements IAttachmentsClientV1 {
    constructor(config?: any);
    getAttachmentById(correlationId: string, id: string, callback: (err: any, attachments: BlobAttachmentV1) => void): void;
    addAttachments(correlationId: string, reference: ReferenceV1, ids: string[], callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void;
    updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[], callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void;
    removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[], callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void;
    deleteAttachmentById(correlationId: string, id: string, callback?: (err: any, attachments: BlobAttachmentV1) => void): void;
}
