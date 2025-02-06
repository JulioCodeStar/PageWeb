/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem',
  			lg: '4rem',
  			xl: '5rem'
  		},
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		}
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			device: {
  				'50': '#effefd',
  				'100': '#c7fffc',
  				'200': '#90fffa',
  				'300': '#51f7f6',
  				'400': '#1ddfe4',
  				'500': '#04c1c8',
  				'600': '#009ca6',
  				'700': '#057880',
  				'800': '#0a5d65',
  				'900': '#0d4e54',
  				'950': '#002c33'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'h1-mobile': [
  				'2rem',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'h2-mobile': [
  				'1.5rem',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			'h3-mobile': [
  				'1.25rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'body-mobile': [
  				'1rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'h1-tablet': [
  				'2.5rem',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'h2-tablet': [
  				'2rem',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			'h3-tablet': [
  				'1.5rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'body-tablet': [
  				'1.125rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'h1-desktop': [
  				'3rem',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'h2-desktop': [
  				'2.25rem',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			'h3-desktop': [
  				'1.75rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'body-desktop': [
  				'1.125rem',
  				{
  					lineHeight: '1.6'
  				}
  			]
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require('@tailwindcss/typography'),
  ],
};
