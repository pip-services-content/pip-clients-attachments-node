let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { BlobAttachmentV1 } from '../../src/version1/BlobAttachmentV1';
import { ReferenceV1 } from '../../src/version1/ReferenceV1';
import { IAttachmentsClientV1 } from '../../src/version1/IAttachmentsClientV1';

export class AttachmentsClientFixtureV1 {
    private _client: IAttachmentsClientV1;
    
    constructor(client: IAttachmentsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        async.series([
        // Add attachments
            (callback) => {
                this._client.addAttachments(
                    null,
                    {
                        type: 'goal',
                        id: '000000000000000000000011',
                        name: 'Goal 1'
                    },
                    ['1', '2'],
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Add other attachments
            (callback) => {
                this._client.addAttachments(
                    null,
                    {
                        type: 'goal',
                        id: '000000000000000000000012',
                        name: 'Goal 2'
                    },
                    ['2', '3'],
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Check attachments has references
            (callback) => {
                this._client.getAttachmentById(
                    null,
                    '2',
                    (err, item) => {
                        assert.isNull(err);
                        
                        assert.isObject(item);
                        assert.lengthOf(item.references, 2);

                        callback();
                    }
                );
            },
        // Remove reference
            (callback) => {
                this._client.updateAttachments(
                    null,
                    {
                        type: 'goal',
                        id: '000000000000000000000011',
                        name: null
                    },
                    ['1', '2'],
                    ['1'],
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Remove another reference
            (callback) => {
                this._client.removeAttachments(
                    null,
                    {
                        type: 'goal',
                        id: '000000000000000000000011',
                        name: null
                    },
                    ['1'],
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
        // Remove attachments
            (callback) => {
                this._client.deleteAttachmentById(
                    null,
                    '1',
                    (err, item) => {
                        assert.isNull(err);

                        assert.isNull(item);

                        callback();
                    }
                );
            },
        // Try to get deleted attachments
            (callback) => {
                this._client.getAttachmentById(
                    null,
                    '2',
                    (err, item) => {
                        assert.isNull(err);
                        
                        assert.isObject(item);
                        assert.lengthOf(item.references, 1);

                        let reference = item.references[0];
                        assert.equal('000000000000000000000012', reference.id);

                        callback();
                    }
                );
            },
        ], done);
    }
}
