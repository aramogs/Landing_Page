$(function () {

    var datascource = {
        'name': 'Jesus Blanco',
        'title': 'Managing Director',
        'children': [
            {'name': 'Sergio Gonzalez', 'title': 'Engineering Manager',
                'children': [
                    { 'name': 'Alonso Martinez', 'title': 'Engineer Superintendant' },
                ]
            },
            { 'name': 'Monica Cossio', 'title': 'Engineering Manager' },
            { 'name': 'Luis Zapata', 'title': 'Production Manager',
                'children':[
                    { 'name': 'Macario Villalobos', 'title': 'Production Superintendent' },
                    { 'name': 'Juan Burciaga', 'title': 'Production Superintendent' },
                    { 'name': 'Jesus Lopez', 'title': 'Production Superintendent' },
                    { 'name': 'Alberto Fierro', 'title': 'Production Superintendent' },
                ]
        },
            { 'name': 'Norma Castillo', 'title': 'CIP Manager' },
            { 'name': 'Victor Maldonado', 'title': 'Maintenance Manager' },
            { 'name': 'Marco Antonio Acosta', 'title': 'Quality Manager' },
            { 'name': 'Jorge Cuevas', 'title': 'Logistics Manager',
                'children':[
                    { 'name': 'Rolando Rodriguez', 'title': 'Logistics Superintendent' },
                ]
        },
            { 'name': 'Armando Alarcon', 'title': 'Finance Manager' },
            { 'name': 'Cecilia Montaño', 'title': 'H.R. Manager' },
            { 'name': 'Raul Acosta', 'title': 'Purchasing Manager' },
            { 'name': 'Horacio Mendoza', 'title': 'S.D. Manager' },
        ]
    };

    $('#chart-container').orgchart({
        'data': datascource,
        'nodeContent': 'title',
        'pan': true,
        'zoom': true
    });

});