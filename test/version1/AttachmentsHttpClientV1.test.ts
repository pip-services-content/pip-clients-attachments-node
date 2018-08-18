let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { AttachmentsMemoryPersistence } from 'pip-services-attachments-node';
import { AttachmentsController } from 'pip-services-attachments-node';
import { AttachmentsHttpServiceV1 } from 'pip-services-attachments-node';
import { IAttachmentsClientV1 } from '../../src/version1/IAttachmentsClientV1';
import { AttachmentsHttpClientV1 } from '../../src/version1/AttachmentsHttpClientV1';
import { AttachmentsClientFixtureV1 } from './AttachmentsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('AttachmentsHttpClientV1', ()=> {
    let service: AttachmentsHttpServiceV1;
    let client: AttachmentsHttpClientV1;
    let fixture: AttachmentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AttachmentsMemoryPersistence();
        let controller = new AttachmentsController();

        service = new AttachmentsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-attachments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-attachments', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-attachments', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new AttachmentsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

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
