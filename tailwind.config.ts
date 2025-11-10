import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				'sora': ['Sora', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.1)'
					},
					'100%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.2)'
					}
				},
				// New animations for "How it Ramps" section
				'progress-fill': {
					'0%': { width: '0%' },
					'25%': { width: '25%' },
					'50%': { width: '50%' },
					'75%': { width: '75%' },
					'100%': { width: '100%' }
				},
				// Step 1
				'step-highlight-1': {
					'0%': { backgroundColor: 'hsl(var(--card) / 0.5)', borderColor: 'hsl(var(--border))', transform: 'scale(1)' },
					'1%, 100%': { backgroundColor: 'hsl(var(--primary) / 0.15)', borderColor: 'hsl(var(--primary) / 0.5)', transform: 'scale(1.02)' }
				},
				'icon-bounce-1': {
					'0%': { transform: 'scale(1)', opacity: '0.5' },
					'1%, 100%': { transform: 'scale(1.1) translateY(-3px)', opacity: '1' }
				},
				// Step 2
				'step-highlight-2': {
					'0%, 24.9%': { backgroundColor: 'hsl(var(--card) / 0.5)', borderColor: 'hsl(var(--border))', transform: 'scale(1)' },
					'25%, 100%': { backgroundColor: 'hsl(var(--primary) / 0.15)', borderColor: 'hsl(var(--primary) / 0.5)', transform: 'scale(1.02)' }
				},
				'icon-bounce-2': {
					'0%, 24.9%': { transform: 'scale(1)', opacity: '0.5' },
					'25%, 100%': { transform: 'scale(1.1) translateY(-3px)', opacity: '1' }
				},
				// Step 3
				'step-highlight-3': {
					'0%, 49.9%': { backgroundColor: 'hsl(var(--card) / 0.5)', borderColor: 'hsl(var(--border))', transform: 'scale(1)' },
					'50%, 100%': { backgroundColor: 'hsl(var(--primary) / 0.15)', borderColor: 'hsl(var(--primary) / 0.5)', transform: 'scale(1.02)' }
				},
				'icon-bounce-3': {
					'0%, 49.9%': { transform: 'scale(1)', opacity: '0.5' },
					'50%, 100%': { transform: 'scale(1.1) translateY(-3px)', opacity: '1' }
				},
				// Step 4
				'step-highlight-4': {
					'0%, 74.9%': { backgroundColor: 'hsl(var(--card) / 0.5)', borderColor: 'hsl(var(--border))', transform: 'scale(1)' },
					'75%, 100%': { backgroundColor: 'hsl(var(--secondary) / 0.15)', borderColor: 'hsl(var(--secondary) / 0.5)', transform: 'scale(1.02)' }
				},
				'icon-bounce-4': {
					'0%, 74.9%': { transform: 'scale(1)', opacity: '0.5' },
					'75%, 100%': { transform: 'scale(1.1) translateY(-3px)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'spin-slow': 'spin 8s linear infinite',
				// New animations for "How it Ramps" section
				'progress-fill': 'progress-fill 8s ease-in-out infinite',
				'step-highlight-1': 'step-highlight-1 8s ease-in-out infinite',
				'step-highlight-2': 'step-highlight-2 8s ease-in-out infinite',
				'step-highlight-3': 'step-highlight-3 8s ease-in-out infinite',
				'step-highlight-4': 'step-highlight-4 8s ease-in-out infinite',
				'icon-bounce-1': 'icon-bounce-1 8s ease-in-out linear infinite',
				'icon-bounce-2': 'icon-bounce-2 8s ease-in-out linear infinite',
				'icon-bounce-3': 'icon-bounce-3 8s ease-in-out linear infinite',
				'icon-bounce-4': 'icon-bounce-4 8s ease-in-out linear infinite'
			},
			scale: {
				'102': '1.02',
				'105': '1.05',
				'110': '1.10'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;