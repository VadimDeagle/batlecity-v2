function levelStart () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "dir", -1)
    mySprite.setImage(img`
        . . . . . 4 . 5 . . . . . 
        . . . . . 4 5 5 . . . . . 
        . . . . . 4 5 5 . . . . . 
        5 5 5 5 . 4 5 5 . 5 5 5 5 
        4 4 4 4 . 4 5 5 . 4 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        4 4 4 4 5 e e e 5 4 4 4 4 
        5 5 5 5 e e e 5 4 5 5 5 5 
        4 4 4 4 e e 5 4 4 4 4 4 4 
        5 5 5 5 e 5 4 4 4 5 5 5 5 
        4 4 4 4 5 4 4 4 5 4 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        4 4 4 4 . 4 5 5 . 4 4 4 4 
        5 5 5 5 . . . . . 5 5 5 5 
        `)
    mySprite.setVelocity(0, 0 - speedPlayer)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "dir", -2)
    mySprite.setImage(img`
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . . . 5 5 e e e 5 5 . . 
        4 4 4 4 4 5 e e e 5 4 5 4 . 
        . 5 5 5 5 5 e e 5 4 4 5 5 . 
        5 5 5 5 5 5 e 5 4 4 4 5 5 . 
        . . . . . 5 5 4 4 4 5 5 . . 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        . . . 5 4 5 4 5 4 5 4 5 4 5 
        `)
    mySprite.setVelocity(0 - speedPlayer, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "dir", 2)
    mySprite.setImage(img`
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        . . 5 5 e e e 5 5 . . . . . 
        . 4 5 4 5 e e e 5 4 4 4 4 4 
        . 5 5 4 4 5 e e 5 5 5 5 5 . 
        . 5 5 4 4 4 5 e 5 5 5 5 5 5 
        . . 5 5 4 4 4 5 5 . . . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        `)
    mySprite.setVelocity(speedPlayer, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.setDataNumber(mySprite, "dir", 1)
    mySprite.setImage(img`
        5 5 5 5 . . . . . 5 5 5 5 
        4 4 4 4 . 4 5 5 . 4 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        4 4 4 4 5 4 4 4 5 4 4 4 4 
        5 5 5 5 e 5 4 4 4 5 5 5 5 
        4 4 4 4 e e 5 4 4 4 4 4 4 
        5 5 5 5 e e e 5 4 5 5 5 5 
        4 4 4 4 5 e e e 5 4 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        4 4 4 4 . 4 5 5 . 4 4 4 4 
        5 5 5 5 . 4 5 5 . 5 5 5 5 
        . . . . . 4 5 5 . . . . . 
        . . . . . 4 5 5 . . . . . 
        . . . . . 4 . 5 . . . . . 
        `)
    mySprite.setVelocity(0, speedPlayer)
})
let mySprite: Sprite = null
let level = 0
let speedPlayer = 0
let speedEnemy = 5
speedPlayer = 8
level = 1
levelStart()
mySprite = sprites.create(img`
    . . . . . 4 . 5 . . . . . 
    . . . . . 4 5 5 . . . . . 
    . . . . . 4 5 5 . . . . . 
    5 5 5 5 . 4 5 5 . 5 5 5 5 
    4 4 4 4 . 4 5 5 . 4 4 4 4 
    5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 4 4 4 5 e e e 5 4 4 4 4 
    5 5 5 5 e e e 5 4 5 5 5 5 
    4 4 4 4 e e 5 4 4 4 4 4 4 
    5 5 5 5 e 5 4 4 4 5 5 5 5 
    4 4 4 4 5 4 4 4 5 4 4 4 4 
    5 5 5 5 5 5 5 5 5 5 5 5 5 
    4 4 4 4 . 4 5 5 . 4 4 4 4 
    5 5 5 5 . . . . . 5 5 5 5 
    `, SpriteKind.Player)
sprites.setDataNumber(mySprite, "dir", -1)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
mySprite.setStayInScreen(true)
let EnemyMass: number[] = []
