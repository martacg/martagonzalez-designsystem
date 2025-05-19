// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://martacg.github.io/martagonzalez-designsystem',
  	base: 'martagonzalez-designsystem',
	integrations: [
		starlight({
			title: 'Sistema de diseño de martagonzalez.dev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/martacg' }],
			sidebar: [
				{
					label: 'Guía de Estilo',
					items: [
						{ label: 'Introducción', slug: 'intro' },
						{ label: 'Paleta de colores', slug: 'colores' },
						{ label: 'Tipografía', slug: 'tipografia' },
						{ label: 'Componentes UI', slug: 'componentes' },
					],
				},
			],
		}),
	],
});
