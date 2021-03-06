import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IAttachmentsClientV1 } from './IAttachmentsClientV1';
//import { IAttachmentsController } from 'pip-services-attachments-node';
import { ReferenceV1 } from './ReferenceV1';
import { BlobAttachmentV1 } from './BlobAttachmentV1';

export class AttachmentsDirectClientV1 extends DirectClient<any> implements IAttachmentsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-attachments", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getAttachmentById(correlationId: string, id: string,
        callback: (err: any, attachments: BlobAttachmentV1) => void): void {
        let timing = this.instrument(correlationId, 'attachments.get_attachment_by_id');
        this._controller.getAttachmentById(correlationId, id, (err, attachment) => {
            timing.endTiming();
            callback(err, attachment);
        });
    }
    
    public addAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void {
        let timing = this.instrument(correlationId, 'attachments.add_attachments');
        this._controller.addAttachments(correlationId, reference, ids, (err, attachments) => {
            timing.endTiming();
            callback(err, attachments);
        });
    }

    public updateAttachments(correlationId: string, reference: ReferenceV1, oldIds: string[], newIds: string[],
        callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void {
        let timing = this.instrument(correlationId, 'attachments.update_attachments');
        this._controller.updateAttachments(correlationId, reference, oldIds, newIds, (err, attachments) => {
            timing.endTiming();
            callback(err, attachments);
        });
    }

    public removeAttachments(correlationId: string, reference: ReferenceV1, ids: string[],
        callback?: (err: any, attachments: BlobAttachmentV1[]) => void): void {
        let timing = this.instrument(correlationId, 'attachments.remove_attachments');
        this._controller.removeAttachments(correlationId, reference, ids, (err, attachment) => {
            timing.endTiming();
            callback(err, attachment);
        });
    }

    public deleteAttachmentById(correlationId: string, id: string,
        callback?: (err: any, attachments: BlobAttachmentV1) => void): void {
        let timing = this.instrument(correlationId, 'attachments.delete_attachment_by_id');
        this._controller.deleteAttachmentById(correlationId, id, (err, attachment) => {
            timing.endTiming();
            callback(err, attachment);
        });
    }

}