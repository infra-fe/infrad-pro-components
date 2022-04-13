import { readdirSync } from 'fs';
import { join } from 'path';

// utils must build before core
// runtime must build before renderer-react
// components dependencies order: form -> table -> list
const headPkgs: string[] = [
  'provider',
  'utils',
  'layout',
  'card',
  'field',
  'skeleton',
  'layout',
  'form',
  'descriptions',
  'table',
  'list',
  'header',
];
const tailPkgs =
  [] ||
  readdirSync(join(__dirname, 'packages')).filter(
    (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
  );

console.log(5555, tailPkgs);

const type = process.env.BUILD_TYPE;

let config = {};

if (type === 'lib') {
  config = {
    cjs: { type: 'babel', lazy: true },
    esm: false,
    runtimeHelpers: true,
    pkgs: [...headPkgs, ...tailPkgs],
    extraBabelPlugins: [
      [
        'babel-plugin-import',
        { libraryName: 'infrad', libraryDirectory: 'es', style: true },
        'infrad',
      ],
    ],
  };
}

if (type === 'es') {
  config = {
    cjs: false,
    esm: {
      type: 'babel',
    },
    runtimeHelpers: true,
    pkgs: [...headPkgs, ...tailPkgs],
    extraBabelPlugins: [
      [require('./scripts/replaceLib')],
      [
        'babel-plugin-import',
        { libraryName: 'infrad', libraryDirectory: 'es', style: true },
        'infrad',
      ],
    ],
  };
}

export default config;
