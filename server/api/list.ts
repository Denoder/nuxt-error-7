/**
 * @file
 */ 

import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  return {
    items: [
      {
        item: 1
      }, {
        item: 2
      }, {
        item: 3
      }, {
        item: 4
      }, {
        item: 5
      }
    ]
  }
})
