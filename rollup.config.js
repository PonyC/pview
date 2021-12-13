import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import {nodeResolve} from '@rollup/plugin-node-resolve'

module.exports =[
  {
    input:'index.js',
    output:[
      {
        file:'dist/index.js',
        format:'es'
      }
    ],
    plugins:[
      vue({
        css:true,
        compileTemplate:true,
      }),
      terser()
    ]
  }
]