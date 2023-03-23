basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (input.soundLevel() > 5) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
