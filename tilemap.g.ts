// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`100011000000000000000000000000000000000000010101000001000001000101010000000100000000010000010000010000000001010100010001000100010101000000000000000000000000000000000000000101010001000100010001000100000000000000010101000100000001000000010101000100010001010100010000000000000000000000000000000000000001010000010001000102010001010000000100000000010001010000000100000001010001000100010001000101000000000000000000000000000000000000010001000100010000010001010100000001010100000101000101010001000001000100010000010000000000010000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 . . 2 . . 2 . 2 2 2 . . 
. 2 . . . . 2 . . 2 . . 2 . . . 
. 2 2 2 . 2 . 2 . 2 . 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 . 2 . 2 . 2 . 2 . 2 . . 
. . . . . 2 2 2 . 2 . . . 2 . . 
. 2 2 2 . 2 . 2 . 2 2 2 . 2 . . 
. . . . . . . . . . . . . . . . 
. 2 2 . . 2 . 2 . 2 . 2 . 2 2 . 
. . 2 . . . . 2 . 2 2 . . . 2 . 
. . 2 2 . 2 . 2 . 2 . 2 . 2 2 . 
. . . . . . . . . . . . . . . . 
. 2 . 2 . 2 . 2 . . 2 . 2 2 2 . 
. . 2 2 2 . . 2 2 . 2 2 2 . 2 . 
. 2 . 2 . 2 . . 2 . . . . . 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000000000001000000000000010000000000000001000100000000010000000001000201010101000000000000000000000000000101010100010100000000000000000000000000000000010000000000`, img`
. . . . 2 . . . . . 
. 2 . . . . . . . 2 
. 2 . . . . 2 . . . 
. 2 . . 2 2 2 2 . . 
. . . . . . . . . . 
. 2 2 2 2 . 2 2 . . 
. . . . . . . . . . 
. . . . 2 . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
