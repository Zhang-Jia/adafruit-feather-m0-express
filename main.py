def on_forever():
    light.show_animation(light.rainbow_animation, 500)
    light.set_all(0xff0000)
forever(on_forever)
