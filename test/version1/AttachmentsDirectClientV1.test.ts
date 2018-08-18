let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { AttachmentsMemoryPersistence } from 'pip-services-attachments-node';
import { AttachmentsController } from 'pip-services-attachments-node';
import { IAttachmentsClientV1 } from '../../src/version1/IAttachmentsClientV1';
import { AttachmentsDirectClientV1 } from '../../src/version1/AttachmentsDirectClientV1';
import { AttachmentsClientFixtureV1 } from './AttachmentsClientFixtureV1';

suite('AttachmentsDirectClientV1', ()=> {
    let client: AttachmentsDirectClientV1;
    let fixture: AttachmentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AttachmentsMemoryPersistence();
        let controller = new AttachmentsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-attachments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-attachments', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new AttachmentsDirectClientV1();
        client.setReferences(references);

        fixture = new AttachmentsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
