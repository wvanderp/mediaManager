module.exports = function (plop) {
    plop.setGenerator('Entity', {
        description: 'An entity of the database',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'The name of The entity'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'plop-templates/entity.hbs'
        }]
    });
};
