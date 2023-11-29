namespace SpriteKind {
    export const item = SpriteKind.create()
    export const differentplayer = SpriteKind.create()
    export const oogabooga = SpriteKind.create()
    export const Armor = SpriteKind.create()
    export const key = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const DUMB = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    sprites.destroy(boots)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    200,
    true
    )
    info.changeLifeBy(1)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        tiles.setWallAt(value, false)
    }
    mySprite.sayText("now you can go to the ice biome, something must be there", 5000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.oogabooga, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile5`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Armor, function (sprite, otherSprite) {
    sprites.destroy(blablaarmor)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    200,
    true
    )
    info.changeLifeBy(1)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setWallAt(value, false)
    }
    mySprite.sayText("now you can go in lava. must be something there", 5000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.setGameOverMessage(true, "SHEESH")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DUMB, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile6`)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "Better luck next time!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    sprites.destroy(KEY)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim6`,
    200,
    true
    )
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setWallAt(value, false)
    }
    mySprite.sayText("NOW YOU UNLOCK GO TO PINK ROAD.", 5000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(otherSprite, assets.tile`myTile`)
})
let KEY: Sprite = null
let blablaarmor: Sprite = null
let boots: Sprite = null
let mySprite: Sprite = null
game.showLongText("YOU ARE STUCK IN THIS WORLD. TRY TO ESCAPE!", DialogLayout.Bottom)
game.showLongText("ENEMIES PROTECT SOMETHING", DialogLayout.Center)
game.showLongText("Reach the ending portal to win!!", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(10)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
myEnemy,
assets.animation`myAnim0`,
200,
true
)
mySprite.sayText("LETS GO FIND THE LAVA SHIELD", 2000, false)
pause(2000)
mySprite.sayText("HOPE THIS IS HELPFUL", 2000, false)
pause(2000)
mySprite.sayText("SOMEWHERE HIDDEN. CHECK MAZE FOR CLUES!", 2000, false)
pause(2000)
myEnemy.follow(mySprite, 80)
tiles.placeOnRandomTile(myEnemy, assets.tile`myTile`)
let oogabooga = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.oogabooga)
animation.runImageAnimation(
oogabooga,
assets.animation`myAnim1`,
200,
true
)
tiles.placeOnRandomTile(oogabooga, assets.tile`myTile5`)
oogabooga.follow(mySprite, 80)
boots = sprites.create(assets.image`SHIELD`, SpriteKind.item)
tiles.placeOnRandomTile(boots, assets.tile`myTile1`)
blablaarmor = sprites.create(img`
    2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 
    1 2 2 1 2 2 1 5 1 5 5 1 5 5 5 5 
    1 2 1 2 1 2 1 5 1 5 1 5 1 5 5 5 
    1 2 1 2 1 2 1 2 1 5 1 5 1 5 5 5 
    1 2 1 1 1 2 1 2 1 5 1 1 1 5 5 5 
    1 1 1 2 1 2 2 1 2 5 1 5 1 5 5 5 
    2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 
    2 2 1 1 2 1 2 1 2 1 2 1 5 1 1 5 
    2 2 1 2 2 1 2 1 2 1 2 1 5 1 5 1 
    2 2 1 1 2 1 1 1 2 1 2 1 2 1 5 1 
    2 2 2 1 2 1 2 1 2 1 2 1 2 1 5 1 
    2 2 1 1 2 1 2 1 2 1 2 1 2 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 1 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 1 1 1 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Armor)
tiles.placeOnRandomTile(blablaarmor, sprites.castle.tileGrass3)
KEY = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . b b 3 3 3 b . . . . . . 
    . . . b 3 3 3 3 3 b . . . . . . 
    . . b 3 3 3 3 3 3 b . . . . . . 
    . . b 3 3 b 3 3 3 b . . . . . . 
    . . b b b b 3 3 3 b . . . . . . 
    . . . . . b 3 3 3 b . . . . . . 
    . . . . . b 3 3 3 b . . . . . . 
    . . . . . b 3 b 3 b . . . . . . 
    . . . . . . b 6 b . . . . . . . 
    . . . . . b 6 6 6 b . . . . . . 
    . . . . . . b 6 b . . . . . . . 
    . . . . . . . b . . . . . . . . 
    `, SpriteKind.key)
tiles.placeOnRandomTile(KEY, assets.tile`myTile3`)
let ISHOWSPEED = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.DUMB)
tiles.placeOnRandomTile(ISHOWSPEED, assets.tile`myTile6`)
animation.runImageAnimation(
ISHOWSPEED,
assets.animation`myAnim7`,
200,
true
)
ISHOWSPEED.follow(mySprite, 80)
game.onUpdateInterval(500, function () {
    scene.followPath(myEnemy, scene.aStar(tiles.locationOfSprite(myEnemy), tiles.locationOfSprite(mySprite)))
})
