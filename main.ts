namespace SpriteKind {
    export const ProjectleEnemy = SpriteKind.create()
}
function levelStart () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level2`)
    } else {
        game.over(true)
    }
    info.player2.setLife(level + 3)
    numEnemy = level + 2
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    while (massEnemy.length == 0) {
        massEnemy.pop().destroy()
    }
    while (massEnemy.length <= numEnemy) {
        doCreateEnemy()
    }
}
function doCreateEnemy () {
    massEnemy.unshift(sprites.create(img`
        . . . . . 6 . 9 . . . . . 
        . . . . . 6 9 9 . . . . . 
        . . . . . 6 9 9 . . . . . 
        6 6 6 6 . 6 9 9 . 6 6 6 6 
        6 6 6 6 . 6 9 9 . 6 6 6 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 
        6 6 6 6 9 6 6 6 9 6 6 6 6 
        6 6 6 6 6 6 6 9 6 6 6 6 6 
        6 6 6 6 6 6 9 6 6 6 6 6 6 
        9 9 9 9 6 9 6 6 6 9 9 9 9 
        6 6 6 6 9 6 6 6 9 6 6 6 6 
        6 6 6 6 9 9 9 9 9 6 6 6 6 
        6 6 6 6 . 6 9 9 . 6 6 6 6 
        9 9 9 9 . . . . . 9 9 9 9 
        `, SpriteKind.Enemy))
    tiles.placeOnRandomTile(massEnemy[0], assets.tile`transparency16`)
    sprites.setDataNumber(massEnemy[0], "dir", randint(-2, 2))
    while (sprites.readDataNumber(massEnemy[0], "dir") == 0) {
        sprites.setDataNumber(massEnemy[0], "dir", randint(-2, 2))
    }
    if (Math.abs(sprites.readDataNumber(massEnemy[0], "dir")) > 1) {
        massEnemy[0].setVelocity(speedEnemy * (sprites.readDataNumber(massEnemy[0], "dir") / 2), 0)
    } else {
        massEnemy[0].setVelocity(0, speedEnemy * sprites.readDataNumber(massEnemy[0], "dir"))
    }
    if (massEnemy[0].vx > 0) {
        animation.runImageAnimation(
        massEnemy[0],
        [img`
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            `,img`
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            `,img`
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            `,img`
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            `],
        speedEnemy * 10,
        true
        )
    } else if (massEnemy[0].vx < 0) {
        animation.runImageAnimation(
        massEnemy[0],
        [img`
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            `,img`
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            `,img`
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            `,img`
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            `],
        speedEnemy * 10,
        true
        )
    } else if (massEnemy[0].vy > 0) {
        animation.runImageAnimation(
        massEnemy[0],
        [img`
            9 9 9 9 . . . . . 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 6 9 6 6 6 9 9 9 9 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `,img`
            6 6 6 6 . . . . . 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            9 9 9 9 6 6 9 6 6 9 9 9 9 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `,img`
            6 6 6 6 . . . . . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            9 9 9 9 6 6 6 9 6 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `,img`
            6 6 6 6 . . . . . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `],
        speedEnemy * 15,
        true
        )
    } else if (massEnemy[0].vy < 0) {
        animation.runImageAnimation(
        massEnemy[0],
        [img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            9 9 9 9 6 9 6 6 6 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 . . . . . 9 9 9 9 
            `,img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            9 9 9 9 6 6 9 6 6 9 9 9 9 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 . . . . . 6 6 6 6 
            `,img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 6 6 6 9 6 9 9 9 9 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . . . . . 6 6 6 6 
            `,img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . . . . . 6 6 6 6 
            `],
        speedEnemy * 15,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, massEnemy[0])
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
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        . . . . . 4 . 5 . . . . . 
        . . . . . 4 5 5 . . . . . 
        . . . . . 4 5 5 . . . . . 
        4 4 4 4 . 4 5 5 . 4 4 4 4 
        5 5 5 5 . 4 5 5 . 5 5 5 5 
        4 4 4 4 5 5 5 5 5 4 4 4 4 
        5 5 5 5 5 e e e 5 5 5 5 5 
        4 4 4 4 e e e 5 4 4 4 4 4 
        5 5 5 5 e e 5 4 4 5 5 5 5 
        4 4 4 4 e 5 4 4 4 4 4 4 4 
        5 5 5 5 5 4 4 4 5 5 5 5 5 
        4 4 4 4 5 5 5 5 5 4 4 4 4 
        5 5 5 5 . 4 5 5 . 5 5 5 5 
        4 4 4 4 . . . . . 4 4 4 4 
        `],
    100,
    true
    )
    mySprite.setVelocity(0, 0 - speedPlayer)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 1000, function () {
        if (Math.abs(sprites.readDataNumber(mySprite, "dir")) > 1) {
            projectile = sprites.createProjectileFromSprite(img`
                5 5 5 
                `, mySprite, speedProjectle * (sprites.readDataNumber(mySprite, "dir") / 2), 0)
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                5 
                5 
                5 
                `, mySprite, 0, speedProjectle * sprites.readDataNumber(mySprite, "dir"))
        }
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    })
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
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . . . 5 5 e e e 5 5 . . 
        4 4 4 4 4 5 e e e 5 4 5 4 . 
        . 5 5 5 5 5 e e 5 4 4 5 5 . 
        5 5 5 5 5 5 e 5 4 4 4 5 5 . 
        . . . . . 5 5 4 4 4 5 5 . . 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        . . . 4 5 4 5 4 5 4 5 4 5 4 
        `],
    100,
    true
    )
    mySprite.setVelocity(0 - speedPlayer, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    massEnemy.removeAt(massEnemy.indexOf(sprite))
    otherSprite.destroy()
    doCreateEnemy()
    info.player2.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    info.player2.changeLifeBy(1)
    numEnemy += 1
    doCreateEnemy()
    otherSprite.destroy(effects.hearts, 100)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (Math.percentChance(90)) {
        sprite.setVelocity(0 - sprite.vx, 0 - sprite.vy)
    } else {
        sprite.setVelocity(0 - sprite.vy, 0 - sprite.vx)
    }
    if (sprite.vx > 0) {
        animation.runImageAnimation(
        sprite,
        [img`
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            9 6 6 6 9 6 6 6 9 6 6 . . . 
            `,img`
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            6 9 6 6 6 9 6 6 6 9 6 . . . 
            `,img`
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            6 6 9 6 6 6 9 6 6 6 9 . . . 
            `,img`
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            . . 9 9 6 6 6 9 9 . . . . . 
            . 6 9 6 9 6 6 6 9 6 6 6 6 6 
            . 9 9 6 6 9 6 6 9 9 9 9 9 . 
            . 9 9 6 6 6 9 6 9 9 9 9 9 9 
            . . 9 9 6 6 6 9 9 . . . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            6 6 6 9 6 6 6 9 6 6 6 . . . 
            `],
        speedEnemy * 10,
        true
        )
    } else if (sprite.vx < 0) {
        animation.runImageAnimation(
        sprite,
        [img`
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            . . . 6 6 9 6 6 6 9 6 6 6 9 
            `,img`
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            . . . 6 9 6 6 6 9 6 6 6 9 6 
            `,img`
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            . . . 9 6 6 6 9 6 6 6 9 6 6 
            `,img`
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . . . 9 9 6 6 6 9 9 . . 
            6 6 6 6 6 9 6 6 6 9 6 9 6 . 
            . 9 9 9 9 9 6 6 9 6 6 9 9 . 
            9 9 9 9 9 9 6 9 6 6 6 9 9 . 
            . . . . . 9 9 6 6 6 9 9 . . 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            . . . 6 6 6 9 6 6 6 9 6 6 6 
            `],
        speedEnemy * 10,
        true
        )
    } else if (sprite.vy > 0) {
        animation.runImageAnimation(
        sprite,
        [img`
            9 9 9 9 . . . . . 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 6 9 6 6 6 9 9 9 9 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `,img`
            6 6 6 6 . . . . . 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            9 9 9 9 6 6 9 6 6 9 9 9 9 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `,img`
            6 6 6 6 . . . . . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            9 9 9 9 6 6 6 9 6 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `,img`
            6 6 6 6 . . . . . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 . 9 . . . . . 
            `],
        speedEnemy * 15,
        true
        )
    } else if (sprite.vy < 0) {
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            9 9 9 9 6 9 6 6 6 9 9 9 9 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 . . . . . 9 9 9 9 
            `,img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            9 9 9 9 6 6 9 6 6 9 9 9 9 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 . . . . . 6 6 6 6 
            `,img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            9 9 9 9 . 6 9 9 . 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 6 6 6 9 6 9 9 9 9 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 
            9 9 9 9 9 9 9 9 9 9 9 9 9 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . . . . . 6 6 6 6 
            `,img`
            . . . . . 6 . 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            . . . . . 6 9 9 . . . . . 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 6 6 6 9 6 6 6 6 6 
            6 6 6 6 6 6 9 6 6 6 6 6 6 
            6 6 6 6 6 9 6 6 6 6 6 6 6 
            9 9 9 9 9 6 6 6 9 9 9 9 9 
            6 6 6 6 9 9 9 9 9 6 6 6 6 
            6 6 6 6 . 6 9 9 . 6 6 6 6 
            6 6 6 6 . . . . . 6 6 6 6 
            `],
        speedEnemy * 15,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
    }
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
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        . . 5 5 e e e 5 5 . . . . . 
        . 4 5 4 5 e e e 5 4 4 4 4 4 
        . 5 5 4 4 5 e e 5 5 5 5 5 . 
        . 5 5 4 4 4 5 e 5 5 5 5 5 5 
        . . 5 5 4 4 4 5 5 . . . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        4 5 4 5 4 5 4 5 4 5 4 . . . 
        `],
    100,
    true
    )
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
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
        4 4 4 4 . . . . . 4 4 4 4 
        5 5 5 5 . 4 5 5 . 5 5 5 5 
        4 4 4 4 5 5 5 5 5 4 4 4 4 
        5 5 5 5 5 4 4 4 5 5 5 5 5 
        4 4 4 4 e 5 4 4 4 4 4 4 4 
        5 5 5 5 e e 5 4 4 5 5 5 5 
        4 4 4 4 e e e 5 4 4 4 4 4 
        5 5 5 5 5 e e e 5 5 5 5 5 
        4 4 4 4 5 5 5 5 5 4 4 4 4 
        5 5 5 5 . 4 5 5 . 5 5 5 5 
        4 4 4 4 . 4 5 5 . 4 4 4 4 
        . . . . . 4 5 5 . . . . . 
        . . . . . 4 5 5 . . . . . 
        . . . . . 4 . 5 . . . . . 
        `],
    100,
    true
    )
    mySprite.setVelocity(0, speedPlayer)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.player1.changeLifeBy(1)
    otherSprite.destroy(effects.hearts, 100)
})
info.player2.onLifeZero(function () {
    game.splash("Уровень " + convertToText(level) + " пройден!")
    level += 1
    levelStart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    massEnemy.removeAt(massEnemy.indexOf(otherSprite))
    doCreateEnemy()
    info.player1.changeLifeBy(-1)
    info.player2.changeLifeBy(-1)
})
let projectile2: Sprite = null
let gunGen = 0
let mySprite2: Sprite = null
let projectile: Sprite = null
let numEnemy = 0
let mySprite: Sprite = null
let massEnemy: Sprite[] = []
let level = 0
let speedPlayer = 0
let speedEnemy = 0
let speedProjectle = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffe2222e222222122222ffffffffffff122222122fffffffffffff222e2222e222222d22ffffff222122222122222122ffffffe22de2effffffffffffffffff222122222122222122fffffffff
    ffffffffe2222e222222122222ffffffffffff122222122fffffffffffff222e2222e222222122ffffff222122222122222122ffffffe22de2effffffffffffffffff222122222122222122fffffffff
    ffffffff111111111111111111ffffffffffff111111111fffffffffffff111111111111111111ffffff111111111111111111ffffff1111111ffffffffffffffffff111111111111111111fffffffff
    ffffffff22e222fffffffff122222ffffff122222fff222122ffffffffffffffff422222ffffffffffffffffff122222ffffffffffff122222effffffffffffffffff122222fffffffffffffffffffff
    ffffffff22e222fffffffff122222ffffff122222fff222122ffffffffffffffffb22222ffffffffffffffffff122222ffffffffffff122222effffffffffffffffff122222fffffffffffffffffffff
    ffffffff111111fffffffff111111ffffff111111fff111111ffffffffffffffff111111ffffffffffffffffff111111ffffffffffff1111111ffffffffffffffffff111111fffffffffffffffffffff
    ffffffffe22224fffffffff222122fff122222fffffffffe22122fffffffffffff22e222ffffffffffffffffff222122ffffffffffffe221e2effffffffffffffffff222122fffffffffffffffffffff
    ffffffff42222efffffffff222122fff122222fffffffff422122fffffffffffff22e222ffffffffffffffffff222122ffffffffffffe221e2effffffffffffffffff222122fffffffffffffffffffff
    ffffffff111111fffffffff111111fff111111fffffffff111111fffffffffffff111111ffffffffffffffffff111111ffffffffffff1111111ffffffffffffffffff111111fffffffffffffffffffff
    ffffffff22e222222d22222122ffffff222122fffffffff1e2222fffffffffffff422222ffffffffffffffffff122222ffffffffffffde2222effffffffffffffffff122222122222122ffffffffffff
    ffffffff22e222222d22222122ffffff222122fffffffff122222fffffffffffff422222ffffffffffffffffff122222ffffffffffff122222effffffffffffffffff122222122222122ffffffffffff
    ffffffff111111111111111111ffffff111111fffffffff111111fffffffffffff111111ffffffffffffffffff111111ffffffffffff1111111ffffffffffffffffff111111111111111ffffffffffff
    ffffffffe2222efffffffff22e122fff1222221222221222221e2fffffffffffff22e12effffffffffffffffff2221e2ffffffffffffe221e2effffffffffffffffff222122fffffffffffffffffffff
    ffffffffe2222efffffffff222122fff122222122222122222122fffffffffffff22e12effffffffffffffffff222122ffffffffffffe221e2effffffffffffffffff222122fffffffffffffffffffff
    ffffffffddddddfffffffff1111ddfff111111111111111111111fffffffffffff111111ffffffffffffffffff111111ffffffffffff1111111ffffffffffffffffffddd1ddfffffffffffffffffffff
    ffffffffeee222fffffffff1222e2fffeee1e2fffffffff1eeeeefffffffffffff122222ffffffffffffffffff1eeeeeffffffffffff1eeeeeeffffffffffffffffff1eeeeefffffffffffffffffffff
    ffffffff22e222fffffffff122222fff222122fffffffff122222fffffffffffff122222ffffffffffffffffff122222ffffffffffff122222effffffffffffffffff122222fffffffffffffffffffff
    ffffffff111111fffffffff111111fff111111fffffffff111111fffffffffffff111111ffffffffffffffffff111111ffffffffffff111111effffffffffffffffff111111fffffffffffffffffffff
    ffffffffeeeeee1222ee1e4eeeffffff1eeeeefffffffffeee1eefffffffffffff222122ffffffffffffffffffeee1eeffffffffffffeee1eeeee12eee122eeffffffeee1ee2221eee221eefffffffff
    ffffffffe22222122222122222ffffff122222fffffffffe22122fffffffffffff222122ffffffffffffffffff222122ffffffffffffe221e2222122221222effffff222122222122222122fffffffff
    ffffffff222222122222122222ffffff122224fffffffff222122fffffffffffff222122ffffffffffffffffff222122ffffffffffffe221222221222212222ffffff422122222122222124fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff222122222122ffffffffff122222122222122222ffffff122222122222122222ffffff1e2222effffff12222effffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffe221e22221eeffffffffff12222212ee22122222ffffff1222e214eee21e2222ffffff1e422eeffffff12222effffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111111111111ffffffffff111111111111111111ffffff111111111111111111ffffff1111111ffffff111111ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff222122ffffffe22122fffffffffffff222d22ffffffffffffffffff222122ffffffffffffe221222ffffff222d22ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff222122ffffffe221e2fffffffffffff22ed2effffffffffffffffff222122ffffffffffff2221222ffffff222d2effffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff111111ffffff111111fffffffffffff111111ffffffffffffffffff111111ffffffffffff1111111ffffff111111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff222122ffffffffffffffffffffffffffff122222ffffffffffffffffff122222ffffffffffff1e2222effffff12222effffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff222122ffffffffffffffffffffffffffff12222effffffffffffffffff122222ffffffffffff1e2222effffff122222ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffff111111ffffffffffffffffff111111ffffffffffff1111111ffffff111111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff122222ffffffffffffffffffffffffffff222122ffffffffffffffffff222122fffffffffffffff1e2222e122222fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff122222ffffffffffffffffffffffffffff22e124ffffffffffffffffff222122fffffffffffffff1e2222e122224fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffff111111ffffffffffffffffff111111fffffffffffffff1111111111111fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff222122ffffffffffffffffffffffffffff122222ffffffffffffffffff122222fffffffffffffffffffe2222effffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff222122ffffffffffffffffffffffffffff122222ffffffffffffffffff122222fffffffffffffffffffe222eeffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffff111111ffffffffffffffffff111111fffffffffffffffffff111111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff222122ffffffe221e2fffffffffffff222d22ffffffffffffffffff222122fffffffffffffffffff22e22effffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff222122ffffffe221e2fffffffffffff222d22ffffffffffffffffff222122fffffffffffffffffff22e222ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff111111ffffff111111fffffffffffff111111ffffffffffffffffff111111fffffffffffffffffff111111ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff2221e2222122ffffffffff222222122222122222ffffffffffff122222fffffffffffffffffffe2222effffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff222122222122ffffffffff222222122222122222ffffffffffff122222fffffffffffffffffff222222ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111111111111ffffffffff111111111111111111ffffffffffff111111fffffffffffffffffff111111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.wawawawaa.play()
game.showLongText("8th:bit Edition", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
speedProjectle = 150
speedEnemy = 10
speedPlayer = 10
level = 1
massEnemy = [sprites.create(img`
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
    `, SpriteKind.Enemy)]
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
info.player1.setLife(3)
scene.cameraFollowSprite(mySprite)
levelStart()
game.onUpdate(function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
game.onUpdateInterval(5000, function () {
    if (Math.percentChance(5)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 2 2 1 1 1 1 1 . . 
            . . 1 1 1 1 1 2 2 1 1 1 1 1 . . 
            . . 1 1 1 2 2 2 2 2 2 1 1 1 . . 
            . . 1 1 1 2 2 2 2 2 2 1 1 1 . . 
            . . 1 1 1 1 1 2 2 1 1 1 1 1 . . 
            . . 1 1 1 1 1 2 2 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        mySprite2.lifespan = 30000
        tiles.placeOnRandomTile(mySprite2, assets.tile`transparency16`)
    }
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(100)) {
        gunGen = randint(0, massEnemy.length - 1)
        if (massEnemy[gunGen].vx > 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                9 9 9 
                `, massEnemy[gunGen], speedProjectle, 0)
        } else if (massEnemy[gunGen].vx < 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                9 9 9 
                `, massEnemy[gunGen], 0 - speedProjectle, 0)
        } else if (massEnemy[gunGen].vy > 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                9 
                9 
                9 
                `, massEnemy[gunGen], 0, speedProjectle)
        } else {
            projectile2 = sprites.createProjectileFromSprite(img`
                9 
                9 
                9 
                `, massEnemy[gunGen], 0, 0 - speedProjectle)
        }
        projectile2.setKind(SpriteKind.ProjectleEnemy)
    }
})
