export interface TokenPayload {
	email: string;
	userId: number;
	orgId: number;
	roles: string[];
}

declare global {
	namespace App {
		interface Locals {
			tokenPayload: TokenPayload;
		}
	}
}

export {};
