/*
looping
ava saunders
may 6th 2019
*/

let squidY = 0
let whaleY = 0
let octoY = 0

let animationSpeed = 3

function preload() {
  squid = loadImage('squid.png')
  whale = loadImage('whale.png')
  octo = loadImage('octopus.png')
 }

function setup() {
  createCanvas(800, 600)
}

function draw() {
  background (255)

  let squidX = 40
  let whaleX = -70
  let octoX = 40

  squidY += animationSpeed
  whaleY += animationSpeed
  octoY += animationSpeed

  while (squidX <= width) {
    image(squid, squidX, squidY, squid.width/1.8, squid.height/1.8)
    squidX = squidX + 200
  }
  while (whaleX <= width) {
    image(whale, whaleX, whaleY + 200, whale.width/1.8, whale.height/1.8)
    whaleX = whaleX + 200
  }
  while (octoX <= width) {
    image(octo, octoX, octoY + 400, octo.width/1.8, octo.height/1.8)
    octoX = octoX + 200
  }

  if (squidY === height) {
    squidY = 0
  }
  if (whaleY === height) {
    whaleY = 0
  }
  if (octoY === height) {
    octoY = 0
  }
}
