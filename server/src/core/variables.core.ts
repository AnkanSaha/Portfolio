import { config } from 'dotenv';
config(); // load.env file into process.env
import { cpus, platform, freemem, arch } from 'node:os'; // Import OS
import { ClassBased } from 'outers'; // Import Methods from outer

// All String Keys
export const StringKeys = Object.freeze({
	AppName: String('Portfolio'),
	CORS_URL: String(process.env.CORS_ORIGIN) ?? '*',
	JWT_SECRET: String(process.env.JWT_SECRET),
	JWT_EXPIRES_IN: String(process.env.JWT_EXPIRES_IN) ?? '3d',
	ENV: String(process.env.NODE_ENV) ?? 'PRODUCTION',
	ADMIN_PASSWORD: String(process.env.ADMIN_PASSWORD) ?? 'admin',

	// Server Details
	Platform: String(platform()),
	Architecture: String(arch()),
	FreeRam: Number((freemem() / 1024 / 1024 / 1024).toFixed(2)),
	Model: String(cpus()[0].model),
	IP_INFO_API_KEY: String(process.env.IP_INFO_API_KEY),
	Allowed_Methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	MongoDB_URL: String(process.env.MONGODB_URL),
	DB_NAME: String(process.env.DB_NAME),
	RequestCollectionName: 'Request Center',
	PortfolioInfoCollectionName: 'Portfolio Info',
});

// All Number Keys
export enum NumberKeys {
	PORT = Number(process.env.PORT) ?? 5678,
	// CPU Count
	CPUCount = Number(process.env.CPU_COUNT_MULTIPLIERENV) ?? cpus().length,
}

// Variables from CORS
export const AllowedHeadersInCORS: string[] = [
	'Content-Type',
	'Authorization',
	'X-Requested-With',
	'Accept',
	'Origin',
	'Access-Control-Allow-Headers',
	'Access-Control-Allow-Origin',
	'Access-Control-Allow-Methods',
	'Access-Control-Allow-Credentials',
]; // All Allowed Headers in CORS headers

export const AllExposedHeadersInCORS: string[] = [
	'Content-Type',
	'Authorization',
	'X-Requested-With',
	'Accept',
	'Origin',
	'Access-Control-Allow-Headers',
	'Access-Control-Allow-Origin',
	'Access-Control-Allow-Methods',
	'Access-Control-Allow-Credentials',
]; // All Exposed Headers in CORS headers to be accessible by the client

// Variables for IP Details Utility

// Register APiCall Instance
export const IP_API = new ClassBased.API('https://ipinfo.io'); // Create New APiCall Instance

// Register Crypto Instance
export const CRY_API = new ClassBased.CryptoGraphy(StringKeys.JWT_SECRET); // Create New Crypto Call Instance
