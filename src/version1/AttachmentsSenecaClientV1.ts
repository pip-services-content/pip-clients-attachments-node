import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';

import { ReferenceV1 } from './ReferenceV1';
import { AttachmentV1 } from './AttachmentV1';
import { IAttachmentsClientV1 } from './IAttachmentsClientV1';

export class AttachmentsSenecaClientV1 extends CommandableSenecaClient implements IAttachmentsClientV1 {

    constructor(config?: any) {
        super('attachments');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public getAttachmentById(correlationId: string, id: string,
        callback: (err: any, attachments: AttachmentV1) => void): void {
        this.callCommand(
            'get_attachment_by_id',
            correlationId,
            {
                id: id
            }, 
            callback
        );
    }
    
    public addAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: AttachmentV1[]) => void): void {
        this.callCommand(
            'add_attachments',
            correlationId,
            {
                reference: reference,
                ids: ids
            }, 
            callback
        );
    }

    public updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[],
        callback?: (err: any, attachments: AttachmentV1[]) => void): void {
        this.callCommand(
            'update_attachments',
            correlationId,
            {
                reference: reference,
                old_ids: oldIds,
                new_ids: newIds
            }, 
            callback
        );
    }

    public removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: AttachmentV1[]) => void): void {
        this.callCommand(
            'remove_attachments',
            correlationId,
            {
                reference: reference,
                ids: ids
            }, 
            callback
        );
    }

    public deleteAttachmentById(correlationId: string, id: string,
        callback?: (err: any, attachments: AttachmentV1) => void): void {
        this.callCommand(
            'delete_attachment_by_id',
            correlationId,
            {
                id: id
            }, 
            callback
        );
    }
    
}
