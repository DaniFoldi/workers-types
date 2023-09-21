import { mkdir, stat } from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import { finished } from 'node:stream/promises'
import { Readable } from 'node:stream'
import { x } from 'tar'


const data = await fetch('https://registry.npmjs.org/@cloudflare/workers-types', {
  headers: {
    'Accept': 'application/vnd.npm.install-v1+json'
  }
}).then(response => response.json())

// Lazy semver validation warning
const supportedVersions = Object.keys(data.versions).filter(version => version.startsWith('4.'))

await mkdir('src/tarballs', { recursive: true })

await Promise.allSettled(supportedVersions.map(async version => {
  if (!await stat(`src/tarballs/${version}.tgz`).catch(() => {})) {
    // noinspection JSDeprecatedSymbols, JSUnresolvedReference
    const tarball = await fetch(data.versions[version].dist.tarball)

    const download = Readable
      .fromWeb(tarball.body)
      .pipe(createWriteStream(`src/tarballs/${version}.tgz`, { flags: 'wx' }).on('error', console.error.bind(console)))
    await finished(download)
  }
  
  await mkdir(`src/workers-types/${version}`, { recursive: true })
  await x({
    file: `src/tarballs/${version}.tgz`,
    C: `src/workers-types/${version}`
  })
}))
