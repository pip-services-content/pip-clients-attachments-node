import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';

import { ReferenceV1 } from './ReferenceV1';
import { AttachmentV1 } from './AttachmentV1';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';

export class AttachmentsNullClientV1 implements IAttachmentsClientV1 {
    constructor(config?: any) {}
        
    public getAttachmentById(correlationId: string, id: string,
        callback: (err: any, attachments: AttachmentV1) => void): void {
        callback(null, null);
    }
    
    public addAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: AttachmentV1[]) => void): void {
        if (callback) callback(null, []);
    }

    public updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[],
        callback?: (err: any, attachments: AttachmentV1[]) => void): void {
        if (callback) callback(null, []);
    }

    public removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: AttachmentV1[]) => void): void {
        if (callback) callback(null, []);
    }

    public deleteAttachmentById(correlationId: string, id: string,
        callback?: (err: any, attachments: AttachmentV1) => void): void {
        if (callback) callback(null, null);
    }
}
