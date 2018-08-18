let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { AttachmentsMemoryPersistence } from 'pip-services-attachments-node';
import { AttachmentsController } from 'pip-services-attachments-node';
import { AttachmentsSenecaServiceV1 } from 'pip-services-attachments-node';
import { IAttachmentsClientV1 } from '../../src/version1/IAttachmentsClientV1';
import { AttachmentsSenecaClientV1 } from '../../src/version1/AttachmentsSenecaClientV1';
import { AttachmentsClientFixtureV1 } from './AttachmentsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('AttachmentsSenecaClient', () => {
    let service: AttachmentsSenecaServiceV1;
    let client: AttachmentsSenecaClientV1;
    let fixture: AttachmentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AttachmentsMemoryPersistence();
        let controller = new AttachmentsController();

        service = new AttachmentsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-attachments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-attachments', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-attachments', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new AttachmentsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new AttachmentsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
