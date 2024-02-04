// TODO Create Tests for shape renders
const shapes = require("./svgShapes");

// Triangle Test
describe ('Triangle', () => {
    test('Renders a Triangle', ()=> {
        const shape = new Triangle();
        let color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`)
    })
})

// Circle Test
describe ('Circle', () => {
    test('Renders a Circle', ()=> {
        const shape = new Circle();
        let color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`)
    })
})

// Square Test
describe ('Square', () => {
    test('Renders a Square', ()=> {
        const shape = new Square();
        let color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`)
    })
})