# n8n-nodes-waalaxy-tools

This is an n8n community node. It lets you use [Waalaxy](https://www.waalaxy.com/) Tools in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation) |
[Operations](#operations) |
[Credentials](#credentials) |
[Compatibility](#compatibility) |
[Usage](#usage) |
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Find LinkedIn URL

Find a LinkedIn profile URL by providing a first name, last name, and company.

| Parameter  | Type   | Required | Description                          |
| ---------- | ------ | -------- | ------------------------------------ |
| First Name | string | Yes      | The first name of the person         |
| Last Name  | string | Yes      | The last name of the person          |
| Company    | string | Yes      | The company the person is working at |

## Credentials

This node authenticates via **OAuth2** using the Waalaxy Tools API.

1. In n8n, go to **Credentials** > **New Credential**.
2. Search for **Waalaxy Tools OAuth2 API**.
3. Enter your **Client ID** and **Client Secret** (provided by Waalaxy).
4. Click **Connect my account** to complete the OAuth2 authorization flow.

The authorization and token endpoints are pre-configured — no additional setup is needed.

## Compatibility

Tested with n8n >= 1.60.0.

## Usage

### Single lookup

1. Add the **Waalaxy Tools** node to your workflow.
2. Select the **Find LinkedIn URL** operation.
3. Fill in the **First Name**, **Last Name**, and **Company** fields.
4. Execute the node.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Waalaxy website](https://www.waalaxy.com/)
