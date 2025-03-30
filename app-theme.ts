import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

// Based on https://coolors.co/c5d500-1c7c54-1b512d-e0a890-9c6615

export const appTheme: CustomThemeConfig = {
	name: 'app-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `"Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif'`,
		'--theme-font-family-heading': `"Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif`,
		'--theme-font-color-base': '51 51 51',
		'--theme-font-color-dark': '0 0 0',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0', 	
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #c5d500
		'--color-primary-50': '246 249 217', // #f6f9d9
		'--color-primary-100': '243 247 204', // #f3f7cc
		'--color-primary-200': '241 245 191', // #f1f5bf
		'--color-primary-300': '232 238 153', // #e8ee99
		'--color-primary-400': '214 226 77', // #d6e24d
		'--color-primary-500': '197 213 0', // #c5d500
		'--color-primary-600': '177 192 0', // #b1c000
		'--color-primary-700': '148 160 0', // #94a000
		'--color-primary-800': '118 128 0', // #768000
		'--color-primary-900': '97 104 0', // #616800
		// secondary | #1C7C54
		'--color-secondary-50': '221 235 229', // #ddebe5
		'--color-secondary-100': '210 229 221', // #d2e5dd
		'--color-secondary-200': '198 222 212', // #c6ded4
		'--color-secondary-300': '164 203 187', // #a4cbbb
		'--color-secondary-400': '96 163 135', // #60a387
		'--color-secondary-500': '28 124 84', // #1C7C54
		'--color-secondary-600': '25 112 76', // #19704c
		'--color-secondary-700': '21 93 63', // #155d3f
		'--color-secondary-800': '17 74 50', // #114a32
		'--color-secondary-900': '14 61 41', // #0e3d29
		// tertiary | #1B512D
		'--color-tertiary-50': '221 229 224', // #dde5e0
		'--color-tertiary-100': '209 220 213', // #d1dcd5
		'--color-tertiary-200': '198 212 203', // #c6d4cb
		'--color-tertiary-300': '164 185 171', // #a4b9ab
		'--color-tertiary-400': '95 133 108', // #5f856c
		'--color-tertiary-500': '27 81 45', // #1B512D
		'--color-tertiary-600': '24 73 41', // #184929
		'--color-tertiary-700': '20 61 34', // #143d22
		'--color-tertiary-800': '16 49 27', // #10311b
		'--color-tertiary-900': '13 40 22', // #0d2816
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #9C6615
		'--color-warning-50': '240 232 220', // #f0e8dc
		'--color-warning-100': '235 224 208', // #ebe0d0
		'--color-warning-200': '230 217 197', // #e6d9c5
		'--color-warning-300': '215 194 161', // #d7c2a1
		'--color-warning-400': '186 148 91', // #ba945b
		'--color-warning-500': '156 102 21', // #9C6615
		'--color-warning-600': '140 92 19', // #8c5c13
		'--color-warning-700': '117 77 16', // #754d10
		'--color-warning-800': '94 61 13', // #5e3d0d
		'--color-warning-900': '76 50 10', // #4c320a
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #9a9996
		'--color-surface-50': '240 240 239', // #f0f0ef
		'--color-surface-100': '235 235 234', // #ebebea
		'--color-surface-200': '230 230 229', // #e6e6e5
		'--color-surface-300': '215 214 213', // #d7d6d5
		'--color-surface-400': '184 184 182', // #b8b8b6
		'--color-surface-500': '154 153 150', // #9a9996
		'--color-surface-600': '139 138 135', // #8b8a87
		'--color-surface-700': '116 115 113', // #747371
		'--color-surface-800': '92 92 90', // #5c5c5a
		'--color-surface-900': '75 75 74', // #4b4b4a
	},
};
