basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (input.soundLevel() > 10) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
