class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 250
        
        this.rightHandX = this.bodyX + 155;
        this.rightHandY = this.bodyY + 50;

        this.leftHandX = this.bodyX - 150;
        this.leftHandY = this.bodyY - 100;

        this.rightFootX = this.bodyX + 60;
        this.rightFootY = this.bodyY + 190;

        this.leftFootX = this.bodyX - 60;
        this.leftFootY = this.bodyY + 190;

        this.rightEyeX = this.bodyX + 40;
        this.rightEyeY = this.bodyY;
        
        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 55;

        this.rightAntennaeX = this.bodyX + 40;
        this.rightAntennaeY = this.bodyY - 110;

        this.leftAntennaeX = this.bodyX - 40;
        this.leftAntennaeY = this.bodyY - 100;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueB.png");
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_redD.png");
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.leftHandY, "monsterParts", "arm_whiteA.png");
        my.sprite.leftHand.flipX = true;
        my.sprite.leftHand.flipY = true;
        my.sprite.rightFoot = this.add.sprite(this.rightFootX, this.rightFootY, "monsterParts", "leg_whiteA.png");
        my.sprite.leftFoot = this.add.sprite(this.leftFootX, this.leftFootY, "monsterParts", "leg_redA.png");
        my.sprite.leftFoot.flipX = true;
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_angry_red.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_angry_red.png");
        my.sprite.leftEye.flipX = true;
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png")
        my.sprite.rightAntennae = this.add.sprite(this.rightAntennaeX, this.rightAntennaeY, "monsterParts", "detail_blue_antenna_large.png")
        my.sprite.leftAntennae = this.add.sprite(this.leftAntennaeX, this.leftAntennaeY, "monsterParts", "detail_blue_antenna_small.png")
        my.sprite.leftAntennae.flipX = true;

        my.sprite.fangs.visible = false;

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

	    sKey.on('down', (key, event) => {
		    my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        })

        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

	    fKey.on('down', (key, event) => {
		    my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        })
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.input.keyboard.checkDown(this.input.keyboard.addKey('A'))){
            for(let s in my.sprite){
                my.sprite[s].x -= 1;
            }
        }

        if(this.input.keyboard.checkDown(this.input.keyboard.addKey('D'))){
            for(let s in my.sprite){
                my.sprite[s].x += 1;
            }
        }
    }

}