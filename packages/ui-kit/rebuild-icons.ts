import fs from 'node:fs'
import path from 'node:path'

type FileItem = { fileName: string; filePath: string }

// Recursive function to get files
function getFiles(dir: string, files: FileItem[], baseDir: string): FileItem[] {
  const fileList = fs.readdirSync(dir)
  for (const fileName of fileList) {
    const filePath = `${dir}/${fileName}`
    if (fs.statSync(filePath).isDirectory()) {
      const nextDir = filePath.split('/').pop()
      getFiles(filePath, files, `${baseDir}/${nextDir}`)
    } else {
      files.push({
        fileName: `${baseDir}/${fileName}`,
        filePath,
      })
    }
  }
  return files
}

function getSvgFiles(basePath: string): FileItem[] {
  const checkPath = path.join(basePath)
  const baseDir = path.resolve(checkPath)

  return getFiles(baseDir, [], '.')
}

function camelCase(str: string): string {
  return str
    .replace(/-(.)/g, function (a) {
      return a.toUpperCase()
    })
    .replace(/-/g, '')
    .replace(/^(.)/, function (b) {
      return b.toUpperCase()
    })
}

function getNameFromFileName(fileName: string): string {
  return camelCase(fileName.slice(2, -4))
}

function createAssetFile({
  files,
  exportPath,
}: {
  files: FileItem[]
  exportPath: string
}): string {
  return files
    .map((item) => {
      const componentName = getNameFromFileName(item.fileName)
      return {
        componentName,
        fileName: item.fileName.slice(2),
      }
    })
    .sort((a, b) => a.componentName.localeCompare(b.componentName))
    .map(({ fileName, componentName }) => {
      return `export { default as ${componentName} } from '${exportPath}/${fileName}'`
    })
    .join('\n')
}

function processAssetsSvg({
  basePath,
  assetsPath,
  exportPath,
  key,
}: {
  basePath: string
  assetsPath: string
  exportPath: string
  key: string
}): void {
  const checkPath = path.join(assetsPath)
  const baseDir = path.resolve(checkPath)

  const files = getSvgFiles(basePath)

  const content = `// THIS IS FILE GENERATED AUTOMATICALLY BY rebuild-icons.ts
${createAssetFile({ files, exportPath })}
`

  const isExist = fs.existsSync(baseDir)
  if (isExist && fs.readFileSync(baseDir, 'utf-8') === content) {
    console.log(`[svg] "${key}" no need to rebuild`)
    return
  }

  console.log(`[svg] "${key}" rebuild done`)
  fs.writeFileSync(baseDir, content, 'utf-8')
}

processAssetsSvg({
  key: 'icons',
  basePath: './src/icons/assets/svg-24',
  assetsPath: './src/icons/assets-svg.ts',
  exportPath: './assets/svg-24',
})
