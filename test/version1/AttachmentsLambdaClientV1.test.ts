import { YamlConfigReader } from 'pip-services-commons-node';
import { AttachmentsClientFixtureV1 } from './AttachmentsClientFixtureV1';
import { AttachmentsLambdaClientV1 } from '../../src/version1/AttachmentsLambdaClientV1';

suite('AttachmentsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: AttachmentsLambdaClientV1;
    let fixture: AttachmentsClientFixtureV1;

    setup((done) => {
        client = new AttachmentsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new AttachmentsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});