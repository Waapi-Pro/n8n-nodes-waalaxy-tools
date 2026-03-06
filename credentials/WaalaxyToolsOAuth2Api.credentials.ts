import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class WaalaxyToolsOAuth2Api implements ICredentialType {
	name = 'waalaxyToolsOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Waalaxy Tools OAuth2 API';

	icon: Icon = {
		light: 'file:../icons/logo-api-gradient.svg',
		dark: 'file:../icons/logo-api-gradient-dark.svg',
	};

	documentationUrl = 'https://google.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://waalaxy-tools-api-01b7e745bb4d.herokuapp.com/api/auth/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://waalaxy-tools-api-01b7e745bb4d.herokuapp.com/api/auth/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
