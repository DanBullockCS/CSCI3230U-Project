export default `
type Query {
    User(id: ID!): User
    Users: [User!]!

    Notifier(id: ID!): Notifier
    Notifiers: [Notifier!]!

    NotifierGroup(id: ID!): NotifierGroup
    NotifierGroups: [NotifierGroup!]!
}

type User {
  id: ID!
  profileId: Int!
}

type Notifier {
  id: ID!
  Group: NotifierGroup
  token: String!
  extraData: String
  createdAt: String!
  updatedAt: String!
}

type NotifierGroup {
  id: ID
  displayName: String!
  Notifiers: [Notifier!]!
  extraData: String
  createdAt: String!
  updatedAt: String!
}

`;