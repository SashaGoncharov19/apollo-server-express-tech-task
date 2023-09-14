# Introduction to Apollo Express Server

### Installation

1. First, make sure you have `Node.js` installed.
2. Once you have verified that `Node.js` is installed, run the following commands in strict order.

* `npm install` This command will install Node.js packages
* `npm run build` This command will build the project to <b>build</b> folder.
* `npm run db:init` This command will create a DB and push the database schema onto DB file.
* `npm run db:seed` This command will create test data in database.


### Startup
How to launch a project? It is quite simple.

Just run following command:
* `npm run start:prod`


## GraphQL Types

Here you can familiarize yourself with the GraphQl model and queries.

* `Query`
    * `users(userId: Int)`
        * Returns a list of all users if userId parameter not passed, or a user.
    * `chats(chatId: Int)`
        * Returns a list of all chats if chatId parameter not passed, or a chat.
* `Mutation`
    * `createChat(name: String!, everyoneCanJoin: Boolean!, userId: Int!)`
        * Creates a new chat.
    * `sendMessage(message: String!, userId: Int!, chatId: Int!)`
        * Sends a message to a chat.
    * `joinChat(userId: Int!, chatId: Int!)`
        * Adds a user to a chat.
* `User`
    * `id: ID`
        * The user's unique identifier.
    * `name: String`
        * The user's name.
    * `avatar: String`
        * The user's avatar.
    * `members: [Member]`
        * A list of the chats that the user is a member of.
* `Chat`
    * `id: ID`
        * The chat's unique identifier.
    * `everyoneCanJoin: Boolean`
        * Indicates whether anyone can join the chat.
    * `name: String`
        * The chat's name.
    * `members: [Member]`
        * A list of the users who are members of the chat.
    * `messages: [Message]`
        * A list of the messages that have been sent in the chat.
* `Message`
    * `id: ID`
        * The message's unique identifier.
    * `message: String`
        * The message's content.
    * `createdAt: String`
        * The date and time the message was created.
    * `owner: Member`
        * The user who sent the message.
* `Member`
    * `id: ID`
        * The member's unique identifier.
    * `user: User`
        * The user who is a member of the chat.
    * `chat: Chat`
        * The chat that the user is a member of.
    * `messages: [Message]`
        * A list of the messages that the user has sent in the chat.