import type { Asset } from "$lib/types";
import { base } from "$app/paths";
import { theme } from "$lib/stores/theme";

const a = (light: string, dark?: string): Asset => 
    dark ? {
        dark :`${base}/logos/${dark}`,
        light:`${base}/logos/${light}`
    } : `${base}/logos/${light}`


const Assets = {
	AWS: a('aws.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Nginx: a('nginx.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetees.svg'),
	TypeScript: a('ts.png'),
	ReactJs: a('react.svg'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Svelte: a('svelte.png'),
	JavaScript: a('js.png'),
	Java: a('java.png'),
	PostgreSQL: a('postgres.png'),
	Sass: a('sass.png'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Vite: a('vite.png'),
	Jest: a('jest.png'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => { currentTheme = v; });

export const getAssetUrl = (asset: Asset):string =>{
    return typeof asset === 'string' ? asset: currentTheme? asset.dark: asset.light;
}