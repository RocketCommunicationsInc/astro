var log = document.getElementById('testing')
var data = [
    {
        timestamp: new Date(1663804800000),
        status: 'normal',
        message: 'Quisque in arcu quis metus gravida bibendum',
    },
    {
        timestamp: new Date(1663808844000),
        status: 'critical',
        message: 'Nullam non felis felis. Donec tempus faucibus gravida',
    },
    {
        timestamp: new Date(1663839915000),
        status: 'normal',
        message: 'Aenean venenatis fringilla lorem non posuere',
    },
    {
        timestamp: new Date(1663886320000),
        status: 'standby',
        message:
            'Phasellus vulputate dolor non elit rutrum, in imperdiet augue tristique',
    },
    {
        timestamp: new Date(1663885342000),
        status: 'caution',
        message: 'Nullam faucibus euismod facilisis',
    },
    {
        timestamp: new Date(1663856520000),
        status: 'serious',
        message: 'Nam sed erat et nunc dictum lacinia id non libero',
    },
    {
        timestamp: new Date(1663888271000),
        status: 'normal',
        message:
            'Aliquam at fringilla turpis. Donec pharetra molestie ultrices',
    },
    {
        timestamp: new Date(1663855620000),
        status: 'off',
        message: 'Vivamus interdum condimentum dolor et sollicitudin',
    },
    {
        timestamp: new Date(1663889640000),
        status: 'normal',
        message: 'Curabitur vel viverra arcu, eu viverro odio',
    },
    {
        timestamp: new Date(1557503698781),
        status: 'standby',
        message: 'In feugiat dui magna, a sodales lectus vestibulum in ',
    },
]

log.data = data
