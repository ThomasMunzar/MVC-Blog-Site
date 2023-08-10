// No Many to Many relationships, All one to many relationships

// USER
    // Users have many comments
    // users have many blogs
    // Users will not have any foreign keys

// Blog
    // Blogs belong to one User
    // Blogs can have MANY comments
    // Will have foreign key that points to the User

// Comment
    // Comment belongs to ONE user
    // Comments belongs to ONE blog
    //Will have foreign key for User and one for Blog (it has two parents, User and Blog)





