import { defineConfig } from 'umi'

export default defineConfig({
  title: 'Template - CanisMinor',
  favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/51a51720-8a30-4430-b6c9-be5712364f04.svg'],
  routes: [{ path: '/', component: 'index' }],
  define: {
    'process.env': process.env,
  },
  npmClient: 'yarn',
})
