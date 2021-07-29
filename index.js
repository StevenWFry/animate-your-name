// Define color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

// This variable controls the smallest distance at which a mouse will 
mouseResponseThreshold = 40;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.45;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.1;

message = 'Change the physics!';

drawName(message, letterColors);
bounceBubbles();
drawName("Hello World", letterColors);
(() => {
    const application = Stimulus.Application.start();
    application.register("animate-controls", class extends Stimulus.Controller {
        static get targets() {
            return [ "text", "radius", "radiusOutput" ];
        }
        changeName() {
            const element = this.textTarget
            const text = element.value
            drawName(text, letterColors);
        }
        changeRadius() {
            const element = this.radiusTarget
            const radius = element.value
            mouseResponseThreshold = radius
            this.radiusOutputTarget.textContent = radius
        }
    });
  })()