import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <p>
        Start by creating a new SvelteKit project if you don't have one set up already. The most
        common approach is outlined in the{' '}
        <a href="https://kit.svelte.dev/docs#introduction-getting-started">
          Getting Started with SvelteKit
        </a>{' '}
        introduction.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init svelte@latest my-app\ncd my-app',
    },
  },
  {
    title: 'Install Tailwind CSS',
    body: () => (
      <p>
        Using npm, install <code>tailwindcss</code> and its peer dependencies, as well as{' '}
        <code>svelte-preprocess</code>, and then run the following commands to generate both{' '}
        <code>tailwind.config.cjs</code> and <code>postcss.config.cjs</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init tailwind.config.cjs -p',
    },
  },
  {
    title: 'Enable use of PostCSS in <style> blocks',
    body: () => (
      <p>
        In your <code>svelte.config.js</code> file, import <code>vitePreprocess</code> to enable
        processing <code>&lt;style&gt;</code> blocks as PostCSS.
      </p>
    ),
    code: {
      name: 'svelte.config.js',
      lang: 'js',
      code: `  import adapter from '@sveltejs/adapter-auto';
> import { vitePreprocess } from '@sveltejs/kit/vite';

  /** @type {import('@sveltejs/kit').Config} */
  const config = {
    kit: {
      adapter: adapter()
    },
>   preprocess: vitePreprocess()
  };

  export default config;`,
    },
  },
  {
    title: 'Configure your template paths',
    body: () => (
      <p>
        Add the paths to all of your template files in your <code>tailwind.config.cjs</code> file.
      </p>
    ),
    code: {
      name: 'tailwind.config.cjs',
      lang: 'javascript',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: []
  };`,
    },
  },
  {
    title: 'Add the Tailwind directives to your CSS',
    body: () => (
      <p>
        Create a <code>./src/app.css</code> file and add the <code>@tailwind</code> directives for
        each of Tailwind’s layers.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
  },
  {
    title: 'Import the CSS file',
    body: () => (
      <p>
        Create a <code>./src/routes/+layout.svelte</code> file and import the newly-created{' '}
        <code>app.css</code> file.
      </p>
    ),
    code: {
      name: '+layout.svelte',
      lang: 'html',
      code: `<script>
  import "../app.css";
</script>

<slot />`,
    },
  },
  {
    title: 'Start your build process',
    body: () => (
      <p>
        Run your build process with <code>npm run dev</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
    code: {
      name: '+page.svelte',
      lang: 'html',
      code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
    },
  },
]

export default function UsingSvelteKit({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with SvelteKit"
      description="Setting up Tailwind CSS in a SvelteKit project."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

UsingSvelteKit.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with SvelteKit',
    description: 'Setting up Tailwind CSS in a SvelteKit project.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
