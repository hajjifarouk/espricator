var node_acl = require( 'acl' );

function set_roles() {

    // Define roles, resources and permissions
    acl.allow([
        {
            roles: 'admin',
            allows: [
                { resources: '/secret', permissions: '*' }
            ]
        }, {
            roles: 'user',
            allows: [
                { resources: '/secret', permissions: 'get' }
            ]
        }, {
            roles: 'guest',
            allows: []
        }
    ]);

    // Inherit roles
    //  Every user is allowed to do what guests do
    //  Every admin is allowed to do what users do
    acl.addRoleParents( 'user', 'guest' );
    acl.addRoleParents( 'admin', 'user' );
}