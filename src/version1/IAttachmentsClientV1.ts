import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';

export interface IAttachmentsClientV1 {
    getAttachmentById(correlationId: string, id: string,
        callback: (err: any, attachments: BlobAttachmentV1) => void): void;
    
    addAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void;

    updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[],
        callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void;

    removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void;

    deleteAttachmentById(correlationId: string, id: string,
        callback?: (err: any, attachments: BlobAttachmentV1) => void): void;
}
