export const typeDefs = `
    type Query {
      users(userId: Int): [User]
      chats(chatId: Int): [Chat]
    }
    
    type Mutation {
      createChat(name: String!, everyoneCanJoin: Boolean!, userId: Int!): Chat
      sendMessage(message: String!, userId: Int!, chatId: Int!): Message
      joinChat(userId: Int!, chatId: Int!): Member
    }
    
    type User {
      id: ID
      name: String
      avatar: String
      members: [Member]
    }
    
    type Chat {
      id: ID
      everyoneCanJoin: Boolean
      name: String
      members: [Member]
      messages: [Message]
    }
    
    type Message {
      id: ID
      message: String
      createdAt: String
      owner: Member
    }
    
    type Member {
      id: ID
      user: User
      chat: Chat
      messages: [Message]
    }
`;
