import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { AttachmentsNullClientV1 } from '../version1/AttachmentsNullClientV1';
import { AttachmentsDirectClientV1 } from '../version1/AttachmentsDirectClientV1';
import { AttachmentsHttpClientV1 } from '../version1/AttachmentsHttpClientV1';

export class AttachmentsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-attachments', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-attachments', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-attachments', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-attachments', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AttachmentsClientFactory.NullClientV1Descriptor, AttachmentsNullClientV1);
		this.registerAsType(AttachmentsClientFactory.DirectClientV1Descriptor, AttachmentsDirectClientV1);
		this.registerAsType(AttachmentsClientFactory.HttpClientV1Descriptor, AttachmentsHttpClientV1);
	}
	
}
