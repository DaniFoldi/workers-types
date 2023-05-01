export const headerData = {
  links: [
    {
      text: 'Types',
      href: '/'
    },
    {
      text: 'Bindings',
      href: '/bindings'
    },
    {
      text: 'APIs',
      href: '/apis'
    },
    {
      text: 'Recommended Usage',
      href: '/usage'
    },
  ],
  actions: [
    { type: 'button', text: 'Source', href: 'https://github.com/danifoldi/workers-types' }
  ],
};
  
export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'simple-icons:github', href: 'https://github.com/DaniFoldi/workers-types' },
    { ariaLabel: 'Cloudflare', icon: 'simple-icons:cloudflare', href: 'https://cloudflare.com' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://danifoldi.com/">Dániel Földi</a> · All rights reserved.
    <p>Not affiliated with Cloudflare.</p>
  `,
};
