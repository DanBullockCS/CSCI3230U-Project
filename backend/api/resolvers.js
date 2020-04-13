
export default {
    Query: {
        User: (parent, { id }, { db }, info) => db.User.findByPk(id),
        Users: (parent, args, { db }, info) => db.User.findAll(),
        
        Notifier: (parent, { id }, { db }, info) => db.Notifier.findByPk(id),
        Notifiers: (parent, args, { db }, info) => db.Notifier.findAll(),
        
        NotifierGroup: (parent, { id }, { db }, info) => db.NotifierGroup.findByPk(id),
        NotifierGroups: (parent, args, { db }, info) => db.NotifierGroup.findAll(),
        
    },
    User: {
    },  
    
    Notifier: {
       Group: async (parent, args, { db }, info) => db.NotifierGroup.findByPk( parent.notifierGroupID ),
       
    },
    NotifierGroup: {
        Notifiers: async (parent, args, { db }, info) => db.Notifier.findAll( { where: { notifierGroupID: parent.id } } ),
    }

    
    // Author: {
    //     posts: (parent, args, context, info) => parent.getPosts(),
    // },
    // Post: {
    //     author: (parent, args, context, info) => parent.getAuthor(),
    // },
    // Query: {
    //     posts: (parent, args, { db }, info) => db.post.findAll(),
    //     authors: (parent, args, { db }, info) => db.author.findAll(),
    //     post: (parent, { id }, { db }, info) => db.post.findByPk(id),
    //     author: (parent, { id }, { db }, info) => db.author.findByPk(id)
    // },
    // Mutation: {
    //     createPost: (parent, { title, content, authorId }, { db }, info) =>
    //         db.post.create({
    //             title: title,
    //             content: content,
    //             authorId: authorId
    //         }),
    //     updatePost: (parent, { title, content, id }, { db }, info) =>
    //         db.post.update({
    //             title: title,
    //             content: content
    //         },
    //             {
    //                 where: {
    //                     id: id
    //                 }
    //             }),
    //     deletePost: (parent, { id }, { db }, info) =>
    //         db.post.destroy({
    //             where: {
    //                 id: id
    //             }
    //         })
    // }
};