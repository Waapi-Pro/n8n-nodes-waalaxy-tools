import {
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

const BASE_URL = 'https://waalaxy-tools-api-01b7e745bb4d.herokuapp.com';

export class WaalaxyTools implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Waalaxy Tools',
		name: 'waalaxyTools',
		icon: {
			light: 'file:../../icons/logo-api-gradient.svg',
			dark: 'file:../../icons/logo-api-gradient-dark.svg',
		},
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Consume tools from the Waalaxy API',
		defaults: {
			name: 'Waalaxy Tools',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'waalaxyToolsOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Find LinkedIn URL',
						value: 'findLinkedinUrl',
						action: 'Find a linked in profile url',
						description: 'Find a linked in profile URL by first name, last name and company',
					},
				],
				default: 'findLinkedinUrl',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				required: true,
				default: '',
				description: 'The first name of the person to search for',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				required: true,
				default: '',
				description: 'The last name of the person to search for',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				required: true,
				default: '',
				description: 'The company of the person to search for',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const firstName = this.getNodeParameter('firstName', i) as string;
			const lastName = this.getNodeParameter('lastName', i) as string;
			const company = this.getNodeParameter('company', i) as string;

			const response = await this.helpers.httpRequestWithAuthentication.call(
				this,
				'waalaxyToolsOAuth2Api',
				{
					method: 'GET',
					url: `${BASE_URL}/api/linkedin-url`,
					qs: { firstName, lastName, company },
				},
				{
					oauth2: {
						includeCredentialsOnRefreshOnBody: true,
					},
				},
			);

			const json = (
				typeof response === 'object' && response !== null ? response : { result: response }
			) as {
				[key: string]: never;
			};
			returnData.push({ json });
		}

		return [returnData];
	}
}
