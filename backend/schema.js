export default `
type User {
  id: ID!
  profileId: Int!
}
type Query {
    user(id: ID!): User
    users: [User!]!
}
`;