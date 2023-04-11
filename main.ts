input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
