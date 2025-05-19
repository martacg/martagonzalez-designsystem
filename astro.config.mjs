// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://martacg.github.io',
  	base: 'martagonzalez-designsystem',
	integrations: [
		starlight({
			title: 'Sistema de diseño de martagonzalez.dev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/martacg' }],
			sidebar: [
				{
					label: 'Guía de Estilo',
					items: [
						{ label: 'Introducción', slug: '/martagonzalez-designsystem/intro' },
						{ label: 'Paleta de colores', slug: '/martagonzalez-designsystem/colores' },
						{ label: 'Tipografía', slug: '/martagonzalez-designsystem/tipografia' },
						{ label: 'Componentes UI', slug: '/martagonzalez-designsystem/componentes' },
					],
				},
			],
		}),
	],
});
